'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from '@/hooks/use-toast'
import { Loader2, Plus, X } from 'lucide-react'
import { useNavigate } from 'react-router'

export function AddCourseForm() {
  const [formFields, setFormFields] = useState({
    title: '',
    description: '',
    duration: '',
    trainerName: '',
    batch: '',
    section: '',
  })
  const [eligibilityList, setEligibilityList] = useState([])
  const [eligibility, setEligibility] = useState('')
  const [trainers, setTrainers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useNavigate()

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/trainer/available')
        const data = await response.json()
        if (response.ok) {
          setTrainers(data)
        } else {
          toast({
            title: "Error",
            description: "Failed to load trainers.",
            variant: "destructive",
          })
        }
      } catch (error) {
        console.error('Error fetching trainers:', error)
        toast({
          title: "Error",
          description: "An error occurred while fetching trainers.",
          variant: "destructive",
        })
      }
    }

    fetchTrainers()
  }, [toast])

  const handleAddEligibility = () => {
    if (eligibility.trim() !== '') {
      setEligibilityList([...eligibilityList, eligibility.trim()])
      setEligibility('')
    }
  }

  const handleRemoveEligibility = (index) => {
    setEligibilityList(eligibilityList.filter((_, i) => i !== index))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const selectedTrainer = trainers.find(
      (trainer) => trainer.trainerName === formFields.trainerName
    )

    const courseData = {
      ...formFields,
      eligibility: eligibilityList,
      trainerId: selectedTrainer ? selectedTrainer._id : null,
    }

    try {
      const response = await fetch('http://localhost:4000/api/v1/course/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Course added successfully!',
          variant: 'default',
        })

        // Reset the form fields and eligibility list
        setFormFields({
          title: '',
          description: '',
          duration: '',
          trainerName: '',
          batch: '',
          section: '',
        })
        setEligibilityList([])
      } else {
        toast({
          title: 'Error',
          description: result.message || 'Failed to add the course.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again later.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Add New Course</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 py-2">
            <Label htmlFor="title">Course Title</Label>
            <Input id="title" name="title" value={formFields.title} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" value={formFields.description} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input id="duration" name="duration" value={formFields.duration} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="batch">Batch</Label>
            <Input id="batch" name="batch" value={formFields.batch} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="section">Section</Label>
            <Input id="section" name="section" value={formFields.section} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="eligibility">Eligibility</Label>
            <div className="flex space-x-2">
              <Input
                id="eligibility"
                value={eligibility}
                onChange={(e) => setEligibility(e.target.value)}
                placeholder="Add eligibility criterion"
              />
              <Button type="button" onClick={handleAddEligibility} size="icon">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add eligibility</span>
              </Button>
            </div>
            {eligibilityList.length > 0 && (
              <ul className="mt-2 space-y-2">
                {eligibilityList.map((item, index) => (
                  <li key={index} className="flex items-center justify-between p-2 bg-secondary rounded-md">
                    <span>{item}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveEligibility(index)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove eligibility</span>
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="trainerName">Trainer Name</Label>
            <Select id="trainerName" name="trainerName" value={formFields.trainerName} onValueChange={(value) => setFormFields({ ...formFields, trainerName: value })} required>
              <SelectTrigger>
                <SelectValue placeholder="Select Trainer" />
              </SelectTrigger>
              <SelectContent>
                {trainers.map((trainer, index) => (
                  <SelectItem key={index} value={trainer.trainerName}>
                    {trainer.trainerName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding Course...
              </>
            ) : (
              'Add Course'
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
