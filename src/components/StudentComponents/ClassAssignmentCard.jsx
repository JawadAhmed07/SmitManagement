"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ChevronRight, Award, BookOpen, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

export function ClassAssignmentCard({ assignment }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [submitType, setSubmitType] = useState("file")
  const dueDate = new Date(assignment.dueDate)
  const status = assignment.status || "Pending" // Default to "Pending" if status is undefined

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle the submission logic here
    console.log("Assignment submitted", submitType)
    setIsDialogOpen(false)
  }

  return (
    <Card className="mb-4 transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div className="flex-grow space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-primary">{assignment.title}</h3>
              <Badge variant="secondary" className="text-xs">
                {status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{assignment.description}</p>
            <div className="flex items-center text-sm text-muted-foreground space-x-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                <span>
                  Due:{" "}
                  {dueDate.toLocaleDateString(undefined, {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              {assignment.batch && (
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    Batch {assignment.batch}
                  </Badge>
                </div>
              )}
              {assignment.section && (
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    Section {assignment.section}
                  </Badge>
                </div>
              )}
              <div className="flex items-center">
                <Award className="mr-2 h-4 w-4 text-primary" />
                <span>{assignment.points} points</span>
              </div>
              {assignment.courseName && (
                <div className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4 text-primary" />
                  <span>{assignment.courseName}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Submit Assignment</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Submit Assignment</DialogTitle>
                <DialogDescription>Choose how you want to submit your assignment.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <RadioGroup defaultValue="file" onValueChange={setSubmitType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="file" id="file" />
                      <Label htmlFor="file">File Upload</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="link" id="link" />
                      <Label htmlFor="link">Link Submission</Label>
                    </div>
                  </RadioGroup>
                  {submitType === "file" ? (
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="file-upload" className="text-right">
                        File
                      </Label>
                      <Input id="file-upload" type="file" className="col-span-3" />
                    </div>
                  ) : (
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="link-input" className="text-right">
                        Link
                      </Label>
                      <Input id="link-input" type="url" placeholder="https://..." className="col-span-3" />
                    </div>
                  )}
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="comment" className="text-right">
                      Comment
                    </Label>
                    <Input id="comment" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Submit</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}

