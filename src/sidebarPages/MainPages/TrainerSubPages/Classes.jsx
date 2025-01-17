'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users } from 'lucide-react'

export default function Classes() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    // Mock data for courses
    const mockCourses = [
      {
        _id: '1',
        title: 'Introduction to JavaScript',
        description: 'Learn the fundamentals of JavaScript, the most popular programming language for web development.',
        duration: '6 weeks',
        enrolledStudents: 35,
        eligibility: ['Basic HTML', 'Basic CSS'],
        trainerName: 'John Doe',
      },
      {
        _id: '2',
        title: 'Advanced React',
        description: 'Deep dive into React and learn how to build highly performant, scalable web applications.',
        duration: '8 weeks',
        enrolledStudents: 20,
        eligibility: ['JavaScript', 'Basic React'],
        trainerName: 'Jane Smith',
      },
      {
        _id: '3',
        title: 'Python for Data Science',
        description: 'Explore the world of data science with Python, covering libraries like NumPy, Pandas, and Matplotlib.',
        duration: '10 weeks',
        enrolledStudents: 40,
        eligibility: ['Basic Python'],
        trainerName: 'Alex Brown',
      },
    ]

    const fetchCourses = async () => {
      try {
        // Simulate an API call
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve({ ok: true, json: () => mockCourses }), 1000)
        )

        if (!response.ok) {
          throw new Error('Failed to fetch courses')
        }
        const data = await response.json()
        setCourses(data)
      } catch (error) {
        console.error('Error fetching courses:', error)
        // Fallback to mock data if API call fails
        setCourses(mockCourses)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card 
            key={course._id}
            className="w-full max-w-sm overflow-hidden cursor-pointer hover:shadow-lg transition"
          >
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
                  {course.enrolledStudents || 0} students enrolled
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
                Trainer: <span className="font-semibold">{course.trainerName || "Unknown"}</span>
              </div>
              <Button asChild>
                <a href={`/dashboard/courses/${course._id}`}>Course Detail</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
