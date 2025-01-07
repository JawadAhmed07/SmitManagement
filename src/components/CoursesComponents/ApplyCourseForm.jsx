'use client'

import { useState } from 'react'
import { useFormState } from 'react-dom'
import { applyCourse } from '../actions/course-actions'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const initialState = {
  message: null,
  errors: {},
}

export function CourseApplicationForm() {
  const [state, formAction] = useFormState(applyCourse, initialState)
  const [eligibilityList, setEligibilityList] = useState([])
  const [eligibility, setEligibility] = useState('')

  const handleAddEligibility = () => {
    if (eligibility.trim() !== '') {
      setEligibilityList([...eligibilityList, eligibility.trim()])
      setEligibility('')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Course Application</CardTitle>
        <CardDescription>Apply for a new course</CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
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
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Apply for Course</Button>
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

