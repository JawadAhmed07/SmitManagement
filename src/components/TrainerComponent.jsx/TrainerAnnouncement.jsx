"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
 

export function ClassAnnouncementForm({ onSubmit } ) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")
  const [batch, setBatch] = useState("")
  const [section, setSection] = useState("")
  const [course, setCourse] = useState("")

  const handleSubmit = (e ) => {
    e.preventDefault()
    onSubmit({ title, content, date, category, batch, section, course })
    setTitle("")
    setContent("")
    setDate("")
    setCategory("")
    setBatch("")
    setSection("")
    setCourse("")
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Create New Announcement</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Exams">Exams</SelectItem>
                <SelectItem value="Holidays">Holidays</SelectItem>
                <SelectItem value="Courses">Courses</SelectItem>
                <SelectItem value="Events">Events</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="batch">Batch</Label>
            <Select value={batch} onValueChange={setBatch} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023A">2023A</SelectItem>
                <SelectItem value="2023B">2023B</SelectItem>
                <SelectItem value="2024A">2024A</SelectItem>
                <SelectItem value="2024B">2024B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="section">Section</Label>
            <Select value={section} onValueChange={setSection} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
                <SelectItem value="C">C</SelectItem>
                <SelectItem value="D">D</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Select value={course} onValueChange={setCourse} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Biology">Biology</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Create Announcement</Button>
        </form>
      </CardContent>
    </Card>
  )
}

