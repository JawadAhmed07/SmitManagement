'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AddResourceForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    url: "",
    courseId: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (e ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value ) => {
    setFormData((prev) => ({ ...prev, type: value }))
  }

  const handleSubmit = async (e ) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch("/api/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to add resource")
      }

      setSuccess(true)
      setFormData({
        title: "",
        description: "",
        type: "",
        url: "",
        courseId: "",
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
      {success && <p className="text-green-500">Resource added successfully!</p>}

      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter resource title"
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter resource description"
          rows={4}
          required
        />
      </div>
      <div>
        <Label htmlFor="type">Resource Type</Label>
        <Select onValueChange={handleSelectChange} value={formData.type}>
          <SelectTrigger>
            <SelectValue placeholder="Select a resource type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="document">Document</SelectItem>
            <SelectItem value="link">Link</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          name="url"
          type="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Enter resource URL"
          required
        />
      </div>
      <div>
        <Label htmlFor="courseId">Course ID (Optional)</Label>
        <Input
          id="courseId"
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
          placeholder="Enter associated course ID"
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Adding..." : "Add Resource"}
      </Button>
    </form>
  )
}

