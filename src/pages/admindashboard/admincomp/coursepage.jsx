// import { useState, useEffect } from "react";
// import { AddCourseForm } from "@/components/AddCourseCard";
// import { CourseCard } from "@/components/CourseCard";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// export default function CoursePage() {
//   const [courses, setCourses] = useState([]); // State to store fetched courses
//   const [loading, setLoading] = useState(true); // State for loading status
//   const [error, setError] = useState(null); // State for error handling

//   // Fetch courses from the API
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/api/v1/course/available/");
//         if (!response.ok) {
//           throw new Error("Failed to fetch courses");
//         }
//         const data = await response.json();
//         setCourses(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between">
//         <h1 className="text-2xl font-bold mb-4">Featured Courses</h1>

//         {/* Shadcn Dialog */}
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button>Add Course</Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-xl">
//             <DialogHeader>
//               <DialogTitle>Add a New Course</DialogTitle>
//             </DialogHeader>
//             <AddCourseForm />
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* Display loading, error, or courses */}
//       {loading ? (
//         <p>Loading courses...</p>
//       ) : error ? (
//         <p className="text-red-500">Error: {error} </p>
//       ) : courses.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {courses.map((course) => (
//             <CourseCard key={course._id} course={course} />
//           ))}
//         </div>
//       ) : (
//         <p>No courses available.</p>
//       )}
//     </div>
//   );
// }
