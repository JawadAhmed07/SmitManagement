'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"


export function AssignmentForm({ onAssignmentAdded }) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const assignmentData = {
      title: formData.get('title'),
      description: formData.get('description'),
      dueDate: formData.get('dueDate'),
      course: formData.get('course'),
      points: formData.get('points'),
    }

    try {
      const response = await fetch('http://localhost:4000/api/v1/assignments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(assignmentData),
      })

      if (!response.ok) {
        throw new Error('Failed to add assignment')
      }

      const newAssignment = await response.json()
      onAssignmentAdded(newAssignment)
      toast({
        title: "Success",
        description: "Assignment added successfully!",
        variant: "success",
      })
    } catch (error) {
      console.error('Error adding assignment:', error)
      toast({
        title: "Error",
        description: "Failed to add assignment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
      </div>
      <div>
        <Label htmlFor="dueDate">Due Date</Label>
        <Input id="dueDate" name="dueDate" type="datetime-local" required />
      </div>
      <div>
        <Label htmlFor="course">Course</Label>
        <Input id="course" name="course" required />
      </div>
      <div>
        <Label htmlFor="points">Points</Label>
        <Input id="points" name="points" type="number" required />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Adding Assignment...
          </>
        ) : (
          'Add Assignment'
        )}
      </Button>
    </form>
  )
}

