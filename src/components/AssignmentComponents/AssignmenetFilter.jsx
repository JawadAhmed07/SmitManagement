"use client"

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function AssignmentFilters() {
  const [batch, setBatch] = useState('')
  const [courseName, setCourseName] = useState('')
  const [status, setStatus] = useState('')
  const [section, setSection] = useState('')

  const handleFilter = () => {
    // Implement filtering logic here
    console.log('Filtering with:', { batch, courseName, status, option })
  }

  return (
    <div className="flex flex-col space-y-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select value={batch} onValueChange={setBatch}>
          <SelectTrigger>
            <SelectValue placeholder="Select Batch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="batch1">Batch 1</SelectItem>
            <SelectItem value="batch2">Batch 2</SelectItem>
            <SelectItem value="batch3">Batch 3</SelectItem>
          </SelectContent>
        </Select>

        <Select value={courseName} onValueChange={setCourseName}>
          <SelectTrigger>
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="webdev">Web Development</SelectItem>
            <SelectItem value="datascience">Data Science</SelectItem>
            <SelectItem value="mobiledev">Mobile Development</SelectItem>
          </SelectContent>
        </Select>

        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>

        <Select value={section} onValueChange={setSection}>
          <SelectTrigger>
            <SelectValue placeholder="Select Section" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">A</SelectItem>
            <SelectItem value="b">B</SelectItem>
            <SelectItem value="c">C</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <Button onClick={handleFilter}>Apply Filters</Button> */}
    </div>
  )
}

