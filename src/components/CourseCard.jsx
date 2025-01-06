import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { EnrollmentDialog } from "./CourseEnrollDialog"

export function CourseCard({ course }) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img
            src="https://img.freepik.com/free-psd/e-learning-banner-design-template_23-2149113592.jpg?ga=GA1.1.518592586.1717923796&semt=ais"
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold my-4 mb-2">{course.title}</CardTitle>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">{course.duration}</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Users className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">{course.enrolledStudents.length} students enrolled</span>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Eligibility:</h4>
          <div className="flex flex-wrap gap-2">
            {course.eligibility.map((item, index) => (
              <Badge key={index} variant="secondary">{item}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Trainer: <span className="font-semibold">{course.trainer.name}</span>
        </div>
        <EnrollmentDialog courseName={course.title} />
      </CardFooter>
    </Card>
  )
}

