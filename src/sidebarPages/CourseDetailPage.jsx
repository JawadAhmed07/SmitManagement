// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import axios from "axios";

// const CourseDetail = () => {
//   const { id } = useParams(); // Extract course ID from URL
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch course details
//     axios
//       .get(`/api/v1/course/${id}`)
//       .then((response) => {
//         setCourse(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching course details:", error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p>Loading...</p>;

//   if (!course) return <p>Course not found.</p>;

//   return (
//     <div className="course-detail">
//       <h1>{course.title}</h1>
//       <p><strong>Description:</strong> {course.description}</p>
//       <p><strong>Duration:</strong> {course.duration}</p>
//       <p><strong>Eligibility:</strong> {course.eligibility}</p>
//       <p><strong>Trainer:</strong> {course.trainerId?.name}</p>
//       <img src={course.thumbnail || "default-thumbnail.jpg"} alt={course.title} />
//     </div>
//   );
// };

// export default CourseDetail;
