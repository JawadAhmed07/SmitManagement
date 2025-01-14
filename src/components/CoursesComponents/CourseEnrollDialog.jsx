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
    // <Dialog open={open} onOpenChange={setOpen}>
        <Button>Course detail</Button>
     
     
  )
}

