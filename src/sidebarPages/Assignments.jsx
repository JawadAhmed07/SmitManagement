import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AssignmentRow } from "@/components/AssignmentComponents/AssignmentCard"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AddAssignmentForm } from "@/components/AssignmentComponents/AddAsignmentform"
import { AssignmentCardSkeleton } from "@/components/AssignmentComponents/AssignmentSkeleton"

// Component to fetch and display assignments
export function AssignmentsList() {
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch assignments from the backend
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/assignments/available") // Adjust the API endpoint as needed
        if (!response.ok) {
          throw new Error("Failed to fetch assignments")
        }
        const data = await response.json()
        setAssignments(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAssignments()
  }, [])

  return (
    <div className="max-w-6xl p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Assignments</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Assignment</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Assignment</DialogTitle>
            </DialogHeader>
            <AddAssignmentForm />
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        // Skeleton loading state
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <AssignmentCardSkeleton key={index} />
          ))}
        </div>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : assignments.length > 0 ? (
        assignments.map((assignment) => (
          <AssignmentRow key={assignment._id} assignment={assignment} />
        ))
      ) : (
        <p>No assignments found.</p>
      )}
    </div>
  )
}

