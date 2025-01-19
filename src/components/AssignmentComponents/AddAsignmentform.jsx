"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, BookOpen, Clock, Users } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function AddAssignmentForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    batch: "",
    section: "",
    points: "",
    courseName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Mock data for batches, courses, and sections
  const batches = ["1", "2", "3", "4"];
  const courses = ["Web Development", "Data Science", "Mobile App Development", "Machine Learning"];
  const sections = ["A", "B", "C", "D"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:4000/api/v1/assignments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add assignment");
      }

      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        batch: "",
        section: "",
        points: "",
        courseName: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Assignment added successfully!</p>}

          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter assignment title"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter assignment description"
              rows={4}
              required
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dueDate" className="text-sm font-medium flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                Due Date
              </Label>
              <Input
                id="dueDate"
                name="dueDate"
                type="datetime-local"
                value={formData.dueDate}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="batch" className="text-sm font-medium flex items-center">
                <Users className="mr-2 h-4 w-4 text-primary" />
                Batch
              </Label>
              <Select
                value={formData.batch}
                onValueChange={(value) => handleSelectChange("batch", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select batch" />
                </SelectTrigger>
                <SelectContent>
                  {batches.map((batch) => (
                    <SelectItem key={batch} value={batch}>
                      {batch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="section" className="text-sm font-medium flex items-center">
                Section
              </Label>
              <Select
                value={formData.section}
                onValueChange={(value) => handleSelectChange("section", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  {sections.map((section) => (
                    <SelectItem key={section} value={section}>
                      {section}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="points" className="text-sm font-medium flex items-center">
                <Award className="mr-2 h-4 w-4 text-primary" />
                Points
              </Label>
              <Input
                id="points"
                name="points"
                type="number"
                value={formData.points}
                onChange={handleChange}
                placeholder="Enter total points"
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="courseName" className="text-sm font-medium flex items-center">
                <BookOpen className="mr-2 h-4 w-4 text-primary" />
                Course Name
              </Label>
              <Select
                value={formData.courseName}
                onValueChange={(value) => handleSelectChange("courseName", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Adding..." : "Add Assignment"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
