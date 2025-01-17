import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight, Award } from 'lucide-react'

export function AssignmentRow({ assignment }) {
  const dueDate = new Date(assignment.dueDate)
  const isOverdue = dueDate < new Date()

  return (
    <Card className="mb-4 transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div className="flex-grow space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-primary">{assignment.title}</h3>
              {/* <Badge variant={isOverdue ? "destructive" : "secondary"} className="text-xs">
                {isOverdue ? "Overdue" : "Upcoming"}
              </Badge> */}
            </div>
            <p className="text-sm text-muted-foreground">{assignment.description}</p>
            <div className="flex items-center text-sm text-muted-foreground space-x-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                <span>Due: {dueDate.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
              {assignment.batch && (
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    Batch {assignment.batch}
                  </Badge>
                </div>
              )}
              <div className="flex items-center">
                <Award className="mr-2 h-4 w-4 text-primary" />
                <span>{assignment.points} points</span>
              </div>
            </div>
          </div>
          {/* <Button variant="outline" size="sm" className="ml-4">
            View Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button> */}
        </div>
      </CardContent>
    </Card>
  )
}

