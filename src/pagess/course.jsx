import { useState, useEffect } from "react";
import { AddCourseForm } from "@/components/CoursesComponents/AddCourseCard";
import { CourseCard } from "@/components/CoursesComponents/CourseCard";
import { CourseCardSkeleton } from "@/components/CoursesComponents/CourseCardSkeleton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/course/available/");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Featured Courses</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Course</Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>Add a New Course</DialogTitle>
            </DialogHeader>
            <AddCourseForm />
          </DialogContent>
        </Dialog>
      </div>

      {error ? (
        <div className="text-center py-10">
          <p className="text-red-500 text-xl">Error: {error}</p>
          <Button onClick={() => window.location.reload()} className="mt-4">
            Try Again
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array(6).fill(0).map((_, index) => (
                <CourseCardSkeleton key={index} />
              ))
            : courses.length > 0
            ? courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))
            : <p className="col-span-full text-center text-xl text-gray-500 py-10">No courses available.</p>
          }
        </div>
      )}
    </div>
  );
}

