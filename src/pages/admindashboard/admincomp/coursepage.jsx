import { CourseCard } from "@/components/CourseCard"


const sampleCourse = {
  title: "Introduction to Web Development",
  description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
  duration: "8 weeks",
  eligibility: ["Basic computer skills", "English proficiency"],
  thumbnail: "/placeholder.svg?height=192&width=384",
  trainer: {
    name: "John Doe"
  },
  enrolledStudents: new Array(15)
}

export default function CoursePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Featured Course</h1>
      <CourseCard course={sampleCourse} />
    </div>
  )
}
