import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EnrollmentDialog } from "./CourseEnrollDialog";
import { Button } from "../ui/button";

export function CourseCard({ course, onClick }) {

  return (
    <Card
      className="w-full max-w-sm overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      {/* <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-gray-200">
          {course.thumbnail ? (
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <BookOpen className="h-10 w-10" />
            </div>
          )}
        </div>
      </CardHeader> */}
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold my-4">{course.title}</CardTitle>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{course.description}</p>
        <div className="flex items-center space-x-2 mb-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">{course.duration || "N/A"}</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Users className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            {course.enrolledStudents?.length || 0} students enrolled
          </span>
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
          Trainer: <span className="font-semibold">{course?.trainerName || "Unknown"}</span>
        </div>

        <Button>

          Apply Now
        </Button>

      </CardFooter>
    </Card>
  );
}
