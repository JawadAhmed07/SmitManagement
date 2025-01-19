'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, CheckSquare } from 'lucide-react'

async function getOverviewStats() {
  // Simulate an API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    totalStudents: 150,
    totalClasses: 10,
    averageAttendance: 85,
    assignmentCompletionRate: 78
  }
}

export default function OverviewStats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getOverviewStats()
      setStats(data)
    }
    fetchStats()
  }, [])

  if (!stats) {
    return <div> </div>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 pb-5 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalStudents}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalClasses}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.averageAttendance}%</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Assignment Completion</CardTitle>
          <CheckSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.assignmentCompletionRate}%</div>
        </CardContent>
      </Card>
    </div>
  )
}
