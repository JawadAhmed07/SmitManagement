"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/CoursesComponents/CourseCard"


const Home = () => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState (null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/course/available/")
        if (!response.ok) {
          throw new Error("Failed to fetch courses")
        }
        const data = await response.json()
        setCourses(data)
      } catch (err) {
        setError("Failed to load courses. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="absolute top-0 left-0 w-full z-10 text-white">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-bold uppercase shadow-lg">Saylani System</h1>
          <nav className="flex space-x-6">
            <a href="#courses" className="hover:underline text-green-400 text-2xl">
              Courses
            </a>
            <a href="#stories" className="hover:underline text-green-400 text-2xl">
              Success Stories
            </a>
            <a href="#subscribe" className="hover:underline text-green-400 text-2xl">
              Subscribe
            </a>
            <a href="/login">
              <Button className="bg-white text-green-600 hover:bg-gray-200 py-2 px-6 rounded-lg">Login</Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-[115vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/saylani-welfare/image/upload/v1721909453/website-images/dynamic/692fbdfa-20b6-4f0b-9c59-778cca7ba0b5.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-70 absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white mt-16">
            <h1 className="text-6xl font-bold uppercase mb-6">Saylani Learning Management System</h1>
            <p className="text-lg leading-relaxed mb-8">
              Empowering students with world-class education resources and career growth.
            </p>
            <a href="/login">
              <Button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg">Get Started</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-3 bg-white">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold mb-6 uppercase text-center">Our Courses</h2>
          {isLoading ? (
            <p>Loading courses...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="text-left grid grid-cols-1 md:grid-cols-4 gap-4  ">
              {courses.map((course) => (
                <CourseCard 
                  key={course._id}
                  course={course}
                  onClick={() => handleCourseClick(course.name)} // Add click handler
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase mb-6">Success Stories</h2>
          <div className="relative">
            {/* Left Arrow Button */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2"
              onClick={() => document.getElementById("stories-container")?.scrollBy({ left: -300, behavior: "smooth" })}
              aria-label="Previous story"
            >
              ◀
            </button>

            {/* Scrollable Success Stories */}
            <div
              id="stories-container"
              className="flex space-x-6 overflow-x-scroll no-scrollbar px-4 pb-5"
              style={{ scrollBehavior: "smooth" }}
            >
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-700">
                  "The LMS platform helped me switch careers successfully. Highly recommended!"
                </p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-700">
                  "I landed my dream job after completing the mobile app development course!"
                </p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Michael Brown</h3>
                <p className="text-gray-700">
                  "Thanks to Saylani LMS, I built a strong foundation in graphic designing!"
                </p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Emily Davis</h3>
                <p className="text-gray-700">"The hands-on projects and expert guidance made learning so enjoyable."</p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Alex Johnson</h3>
                <p className="text-gray-700">
                  "Saylani LMS courses helped me start my own successful freelance business."
                </p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Sarah Lee</h3>
                <p className="text-gray-700">
                  "The skills I learned through Saylani LMS courses were invaluable for my career growth."
                </p>
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2"
              onClick={() => document.getElementById("stories-container")?.scrollBy({ left: 300, behavior: "smooth" })}
              aria-label="Next story"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-16 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8">Stay updated with the latest courses, news, and updates from Saylani LMS.</p>
          <div className="flex justify-center items-center flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full md:w-1/3 rounded-lg text-gray-700 focus:outline-none mb-3"
              aria-label="Email for newsletter"
            />
            <Button className="bg-green-500 w-full md:w-1/3 hover:bg-green-700 px-6 py-3 rounded-lg">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Saylani LMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home

