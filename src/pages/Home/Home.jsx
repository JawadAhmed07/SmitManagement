"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/CoursesComponents/CourseCard"
import img from '../../../public/image/logo_saylaniwelfare.png'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

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
    <div className="bg-white">
      {/* Header Section */}
      <header className="absolute top-0 left-0 w-full z-10 text-black">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-1xl w-52  "><img src={img} alt="" /></h1>
          <nav className="flex space-x-6  text-white ">
            
            <a href="#courses" className="hover:scale-110 hover:text-[#80d42c] text-zinc-400 text-xl">
              Courses
            </a>
            <a href="#stories" className="hover:scale-110 hover:text-[#80d42c] text-zinc-400 text-xl">
              Success Stories
            </a>
            <a href="#subscribe" className="hover:text-[#80d42c] hover:scale-110 text-zinc-400 text-xl">
              Subscribe
            </a>
            <a href="/login">
              <Button className="bg-white text-[#80d42c]  hover:bg-gray-200 py-2 px-6 rounded-lg">Login</Button>
            </a>
            
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-[90vh]  bg-cover bg-center relative"
        // style={{
        //   backgroundImage:
        //     "url('')",
        // }}
      >
        <div className=" bg-opacity-30 shadow-lg absolute inset-0 flex items-center justify-center">
          <div className="text-center text-[#80d42c] -mt-9 ">
            <h1 className="text-6xl font-bold uppercase mb-6">Saylani Learning Management System</h1>
            <p className="text-xl leading-relaxed text-zinc-400 mb-7">
              Empowering students with world-class education resources and career growth.
            </p>
            <a href="/login">
              <Button className="bg-[#80d42c] hover:tebgxt-[#80d42c] px-8 py-4 rounded-lg">Get Started</Button>
            </a>
            <a target="_blank" href="https://saylaniwelfare.com/sponsor">
              <Button className="bg-white mx-5  text-[#80d42c]  hover:bg-gray-200 py-2 px-6 rounded-lg">Be a Sponser</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-3 bg-white">
        <div className="container mx-auto ">
          <h2 className="text-4xl font-extrabold text-[#80d42c] mb-6 uppercase text-center">Our Courses</h2>
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
                  // eslint-disable-next-line no-undef
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
          <h2 className="text-4xl font-extrabold text-[#80d42c] uppercase mb-12">Success Stories</h2>
          <div className="relative">
            {/* Left Arrow Button */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -mx-9  bg-green-400 text-white shadow-lg rounded-full p-3 hover:bg-green-500 transition duration-300"
              onClick={() =>
                document.getElementById("stories-container")?.scrollBy({
                  left: -300,
                  behavior: "smooth", 
                })
              }
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
              {[
                {
                  name: "John Doe",
                  image: "https://images.unsplash.com/photo-1530241160077-69502379a331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZha2UlMjBwZXJzb258ZW58MHwxfDB8fHww",
                  text: "The LMS platform helped me switch careers successfully. Highly recommended!",
                },
                {
                  name: "Jane Smith",
                  image: "https://images.unsplash.com/photo-1588747189888-b24581873a82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHMlMjBzdWNjZXNzZnVsbHxlbnwwfDF8MHx8fDA%3D",
                  text: "I landed my dream job after completing the mobile app development course!",
                },
                {
                  name: "Michael Brown",
                  image: "https://images.unsplash.com/photo-1588747189888-b24581873a82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHMlMjBzdWNjZXNzZnVsbHxlbnwwfDF8MHx8fDA%3D",
                  text: "Thanks to Saylani LMS, I built a strong foundation in graphic designing!",
                },
                {
                  name: "Emily Davis",
                  image: "https://images.unsplash.com/photo-1588747189888-b24581873a82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHMlMjBzdWNjZXNzZnVsbHxlbnwwfDF8MHx8fDA%3D",
                  text: "The hands-on projects and expert guidance made learning so enjoyable.",
                },
                {
                  name: "Alex Johnson",
                  image: "https://images.unsplash.com/photo-1588747189888-b24581873a82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHMlMjBzdWNjZXNzZnVsbHxlbnwwfDF8MHx8fDA%3D",
                  text: "Saylani LMS courses helped me start my own successful freelance business.",
                },
                {
                  name: "Sarah Lee",
                  image: "https://images.unsplash.com/photo-1588747189888-b24581873a82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHMlMjBzdWNjZXNzZnVsbHxlbnwwfDF8MHx8fDA%3D",
                  text: "The skills I learned through Saylani LMS courses were invaluable for my career growth.",
                },
              ].map((story, index) => (
                <div
                  key={index}
                  className="bg-white min-w-[300px] max-w-sm p-6 shadow-lg rounded-lg transform hover:scale-105 transition duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={story.image}
                      alt={`${story.name}'s profile`}
                      className="w-16 h-16 rounded-full border-4 border-blue-500"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{story.name}</h3>
                      <p className="text-sm text-green-400 font-semibold">Successful Student</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{story.text}"</p>
                </div>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-400 text-white shadow-lg rounded-full p-3 hover:bg-green-500 transition duration-300"
              onClick={() =>
                document.getElementById("stories-container")?.scrollBy({
                  left: 300,
                  behavior: "smooth",
                })
              }
              aria-label="Next story"
            >
              ▶
            </button>
          </div>
        </div>
      </section>


      {/* Subscribe Section */}
      <section id="subscribe" className="py-16 bg-[#80d42c] text-white">
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
            <Button className="bg-white text-black w-full md:w-1/3 hover:bg-green-700 px-6 py-3 rounded-lg">Subscribe</Button>
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

