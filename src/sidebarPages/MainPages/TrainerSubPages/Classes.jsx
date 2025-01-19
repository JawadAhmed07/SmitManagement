'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users } from 'lucide-react'
import ClassesSkeleton from '@/components/TrainerComponent.jsx/ClassesSkeleton'
import Selects from '@/components/TrainerComponent.jsx/Selects'
import OverviewStats from '@/components/TrainerComponent.jsx/OverviewState'
import { CourseCard } from '@/components/CoursesComponents/CourseCard'

export default function Classes() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for courses
    const mockCourses = [
      // ... (your existing mock data)
    ]

    const fetchCourses = async () => {
      try {
        setLoading(true)
        // Simulate an API call
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve({ ok: true, json: () => mockCourses }), 2000)
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
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">My Courses</h1>
      <Selects />
      
      <OverviewStats />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          // Show skeleton loaders while loading
          Array.from({ length: 6 }).map((_, index) => (
            <ClassesSkeleton key={index} />
          ))
        ) : (
          // Show actual course data when loaded
          courses.map((course) => (
            <Card
              key={course._id}
              className="w-full max-w-sm overflow-hidden cursor-pointer hover:shadow-lg transition"
            >
           
            </Card>
          ))
        )}
        
      </div>
    </div>
  )
}

