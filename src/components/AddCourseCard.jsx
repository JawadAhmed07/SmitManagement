'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// This would typically be in a separate file
const addCourse = async (prevState, formData) => {
  // Simulating server-side validation and processing
  const title = formData.get('title')
  const description = formData.get('description')
  const duration = formData.get('duration')
  const eligibility = formData.get('eligibility')
  const trainerName = formData.get('trainerName')
  const thumbnail = formData.get('thumbnail')

  if (!title || !description || !duration || !eligibility || !trainerName) {
    return {
      errors: {
        title: title ? null : ['Title is required'],
        description: description ? null : ['Description is required'],
        duration: duration ? null : ['Duration is required'],
        eligibility: eligibility ? null : ['At least one eligibility criterion is required'],
        trainerName: trainerName ? null : ['Trainer name is required'],
      },
      message: 'Please fill in all required fields.',
    }
  }

  // Simulating a successful course addition
  return {
    message: 'Course added successfully!',
  }
}

const initialState = {
  message: null,
  errors: {},
}

export function AddCourseForm() {
  const [state, formAction] = useState(addCourse, initialState)
  const [eligibilityList, setEligibilityList] = useState([])
  const [eligibility, setEligibility] = useState('')

  const handleAddEligibility = () => {
    if (eligibility.trim() !== '') {
      setEligibilityList([...eligibilityList, eligibility.trim()])
      setEligibility('')
    }
  }

  return (
    <Card className="w-full mx-auto flex flex-col">
    
      <form action={formAction}>
        <div className="flex-grow overflow-y-auto py-2">
          <CardContent className="space-y-1">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input id="title" name="title" required />
              {state.errors?.title && (
                <p className="text-sm text-red-500">{state.errors.title[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" required />
              {state.errors?.description && (
                <p className="text-sm text-red-500">{state.errors.description[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Input id="duration" name="duration" required />
              {state.errors?.duration && (
                <p className="text-sm text-red-500">{state.errors.duration[0]}</p>
              )}
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
                <Button type="button" onClick={handleAddEligibility}>Add</Button>
              </div>
              {eligibilityList.length > 0 && (
                <ul className="list-disc list-inside">
                  {eligibilityList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              <input type="hidden" name="eligibility" value={eligibilityList.join(',')} />
              {state.errors?.eligibility && (
                <p className="text-sm text-red-500">{state.errors.eligibility[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="trainerName">Trainer Name</Label>
              <Input id="trainerName" name="trainerName" required />
              {state.errors?.trainerName && (
                <p className="text-sm text-red-500">{state.errors.trainerName[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail URL</Label>
              <Input id="thumbnail" name="thumbnail" type="url" />
            </div>
          </CardContent>
        </div>
        <CardFooter>
          <Button type="submit" className="w-full">Add Course</Button>
        </CardFooter>
      </form>
      {state.message && (
        <Alert variant={state.errors ? "destructive" : "default"} className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Status</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </Card>
  )
}

