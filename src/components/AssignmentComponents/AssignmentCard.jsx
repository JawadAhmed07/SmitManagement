import { Button } from "@/components/ui/button"
import { Calendar, BookOpen, ChevronRight } from 'lucide-react'


export function AssignmentRow({ assignment } ) {
  return (
    <div className="flex items-center justify-between p-4 border-b last:border-b-0">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{assignment.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{assignment.description}</p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>Due: {new Date(assignment.dueDate).toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="mr-1 h-4 w-4" />
            <span>{assignment.course}</span>
          </div>
          <div>Points: {assignment.points}</div>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">View Details</span>
      </Button>
    </div>
  )
}

