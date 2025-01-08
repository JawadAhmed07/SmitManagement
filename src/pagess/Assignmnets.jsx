'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Card } from "@/components/ui/card"
import { AssignmentForm } from "@/components/AssignmentComponents/AddAsignmentform"
import { AssignmentRow } from "@/components/AssignmentComponents/AssignmentCard"

const dummyAssignments= [
  {
    id: "1",
    title: "React Hooks Essay",
    description: "Write an essay about the benefits of React Hooks",
    dueDate: "2023-06-15T23:59:59",
    course: "Advanced React",
    points: 100
  },
  {
    id: "2",
    title: "Node.js API Project",
    description: "Build a RESTful API using Node.js and Express",
    dueDate: "2023-06-20T23:59:59",
    course: "Backend Development",
    points: 150
  },
  {
    id: "3",
    title: "CSS Grid Layout",
    description: "Create a responsive layout using CSS Grid",
    dueDate: "2023-06-18T23:59:59",
    course: "Web Design",
    points: 80
  },
  {
    id: "4",
    title: "JavaScript Algorithms",
    description: "Implement 5 common sorting algorithms in JavaScript",
    dueDate: "2023-06-25T23:59:59",
    course: "Data Structures and Algorithms",
    points: 120
  },
  {
    id: "5",
    title: "UI/UX Case Study",
    description: "Conduct a case study on the UI/UX of a popular web application",
    dueDate: "2023-06-30T23:59:59",
    course: "User Experience Design",
    points: 100
  }
]

function Assignments() {
  const [assignments, setAssignments] = useState(dummyAssignments)
  const { toast } = useToast()

  const handleAssignmentAdded = (newAssignment) => {
    setAssignments([...assignments, { ...newAssignment, id: (assignments.length + 1).toString() }])
    toast({
      title: "Success",
      description: "Assignment added successfully!",
      variant: "success",
    })
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Assignments</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Assignment</Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>Add a New Assignment</DialogTitle>
            </DialogHeader>
            <AssignmentForm onAssignmentAdded={handleAssignmentAdded} />
          </DialogContent>
        </Dialog>
      </div>

      <Card className="overflow-hidden">
        {assignments.map((assignment) => (
          <AssignmentRow key={assignment.id} assignment={assignment} />
        ))}
      </Card>
    </div>
  )
}

export default Assignments

