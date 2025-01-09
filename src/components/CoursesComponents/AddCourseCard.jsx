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
  const [state, setState] = useState({ message: null, errors: {} })
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

  const handleRemoveEligibility = (index ) => {
    setEligibilityList(eligibilityList.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Collect form data using FormData
    const formData = new FormData(e.currentTarget)
    const courseData = {
      title: formData.get('title'),
      description: formData.get('description'),
      duration: formData.get('duration'),
      eligibility: eligibilityList,
      trainerName: formData.get('trainerName'),
      // thumbnail: formData.get('thumbnail'),
    }

    // const courseData = {
    //   title: formData.get('title'),
    //   description: formData.get('description'),
    //   duration: formData.get('duration'),
    //   eligibility: eligibilityList,
    //   trainerName: formData.get('trainerName'),
    //   trainerId: trainers.find(
    //     (trainer) => trainer._id === formData.get('trainerName')
    //   )?.id, // Get trainerId from trainers list
    // };
    // console.log("courseData=",courseData)
   
  
    // Log all form fields
    console.log("Form Data:", {
      title: formData.get('title'),
      description: formData.get('description'),
      duration: formData.get('duration'),
      eligibilityList: eligibilityList,
      trainerName: formData.get('trainerName'),
      // thumbnail: formData.get('thumbnail')
    })
  
    try {
      const response = await fetch('http://localhost:4000/api/v1/course/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      })
  
      const result = await response.json()
  
      if (response.ok) {
        toast({
          title: "Success",
          description: "Course added successfully!",
          variant: "default"
        })
        console.log("result", result)
        router('/admin/courses')
      } else {
        setState({ message: result.message, errors: result.errors || {} })
        toast({
          title: "Error",
          description: result.message || "Failed to add the course.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      })
      setState({ message: 'An error occurred. Please try again later.', errors: {} })
    } finally {
      setIsLoading(false)
    }
  }
  

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-2">
          <div className="space-y-1 py-2">
            <Label htmlFor="title">Course Title</Label>
            <Input id="title" name="title" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input id="duration" name="duration" required />
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
            <Select name="trainerName" required>
              <SelectTrigger>
                <SelectValue placeholder="Select Trainer" />
              </SelectTrigger>
              <SelectContent>
                {trainers.map((trainer) => (
                  <SelectItem key={trainer.id} value={trainer.trainerName}>
                    
                    {trainer.trainerName}
                  </SelectItem>
                  
                ))}
                
              </SelectContent>
            </Select>
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input id="thumbnail" name="thumbnail" type="url" placeholder="https://example.com/course-thumbnail.jpg" />
          </div> */}
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

