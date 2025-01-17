import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EnrollmentDialog } from "@/components/CoursesComponents/CourseEnrollDialog";

const CourseDetail = () => {
  const { courseId } = useParams(); // Fetch courseId from route params
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/course/available/${courseId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]); // Dependency is now courseId

  if (loading) {
    return <p className="text-center mt-10">Loading course details...</p>;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 text-xl">Error: {error}</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-500 text-xl">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="p-0">
          <div className="relative h-64 w-full bg-gray-200">
            {course.thumbnail ? (
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <BookOpen className="h-12 w-12" />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl font-bold mb-4">{course.title}</CardTitle>
          <p className="text-base text-gray-600 mb-6">{course.description}</p>
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">{course.duration || "N/A"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">
                {course.enrolledStudents?.length || 0} students enrolled
              </span>
            </div>
          </div>
          <div>
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
        <CardFooter className="bg-gray-50 p-6 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Trainer: <span className="font-semibold">{course.trainerName || "Unknown"}</span>
          </div>
          <EnrollmentDialog courseName={course.title} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default CourseDetail;
