'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

 

export function AdminAnnouncementForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    priority: "",
    targetAudience: "",
    expirationDate: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name ) => (value ) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e ) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch("/api/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to add announcement")
      }

      setSuccess(true)
      setFormData({
        title: "",
        content: "",
        priority: "",
        targetAudience: "",
        expirationDate: "",
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded-lg shadow-sm bg-white space-y-4"
    >
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Announcement added successfully!</p>}

      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter announcement title"
          required
        />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Enter announcement content"
          rows={4}
          required
        />
      </div>
      <div>
        <Label htmlFor="priority">Priority</Label>
        <Select onValueChange={handleSelectChange("priority")} value={formData.priority}>
          <SelectTrigger>
            <SelectValue placeholder="Select priority level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="targetAudience">Target Audience</Label>
        <Select onValueChange={handleSelectChange("targetAudience")} value={formData.targetAudience}>
          <SelectTrigger>
            <SelectValue placeholder="Select target audience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Users</SelectItem>
            <SelectItem value="students">Students</SelectItem>
            <SelectItem value="trainers">Trainers</SelectItem>
            <SelectItem value="admins">Administrators</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="expirationDate">Expiration Date (Optional)</Label>
        <Input
          id="expirationDate"
          name="expirationDate"
          type="date"
          value={formData.expirationDate}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Adding..." : "Add Announcement"}
      </Button>
    </form>
  )
}

