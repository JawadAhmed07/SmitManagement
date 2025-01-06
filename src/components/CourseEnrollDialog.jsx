'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function EnrollmentDialog({ courseName }) {
  const [open, setOpen] = useState(false)

  const handleEnroll = () => {
    // Here you would typically handle the enrollment process
    // For now, we'll just close the dialog
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Enroll Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enroll in Course</DialogTitle>
          <DialogDescription>
            Are you sure you want to enroll in the course "{courseName}"?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleEnroll}>Confirm Enrollment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

