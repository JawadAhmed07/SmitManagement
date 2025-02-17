import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, BookOpen, Layers, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ApplyForCourse } from "./ApplyCourseForm"


export function CourseCard({ course, onClick }) {
  return (
    <Card className="w-full max-w-sm overflow-hidden cursor-pointer hover:shadow-lg transition" onClick={onClick}>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold my-4 uppercase font-sans">{course.title}</CardTitle>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{course.description}</p>
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">{course.duration}</span>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Users className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">{course.enrolledStudents?.length || 0} students enrolled</span>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <Layers className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">Batch: {course.batch}</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Briefcase className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">Section: {course.section}</span>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Eligibility:</h4>
          <div className="flex flex-wrap gap-2">
            {course.eligibility?.length > 0 ? (
              course.eligibility.map((item, index) => (
                <Badge key={index} variant="secondary">
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-sm text-gray-600">No eligibility criteria provided</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Trainer: <span className="font-semibold">{course.trainerName}</span>
        </div>
       <ApplyForCourse course={course}/>

      </CardFooter>
    </Card>
  )
}

