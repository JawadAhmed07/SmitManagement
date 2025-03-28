"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

export function AddResourceForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    url: "",
    courseName: "",
    batch: "",
    section: "",
    dueDate: "",
  });
  const [loading, setLoading] = useState(false);

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

    try {
      // Validate the URL before sending the data
      const urlPattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/gm;
      if (formData.url && !urlPattern.test(formData.url)) {
        throw new Error("The provided URL is not valid");
      }

      const response = await fetch("http://localhost:4000/api/v1/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add resource");
      }

      toast({
        title: "Success",
        description: "Resource added successfully!",
        duration: 3000,
      });

      setFormData({
        title: "",
        description: "",
        type: "",
        url: "",
        courseName: "",
        batch: "",
        section: "",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "An unknown error occurred",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-sm bg-white space-y-4">
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
        <Select onValueChange={(value) => handleSelectChange("type", value)} value={formData.type}>
          <SelectTrigger>
            <SelectValue placeholder="Select a resource type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="document">Document</SelectItem>
            <SelectItem value="link">Link</SelectItem>
            <SelectItem value="github">Github</SelectItem>
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
        />
      </div>
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
      <div>
        <Label htmlFor="courseName">Course Name</Label>
        <Select onValueChange={(value) => handleSelectChange("courseName", value)} value={formData.courseName}>
          <SelectTrigger>
            <SelectValue placeholder="Select a course name" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="course1">Course 1</SelectItem>
            <SelectItem value="course2">Course 2</SelectItem>
            <SelectItem value="course3">Course 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="batch">Batch</Label>
        <Select onValueChange={(value) => handleSelectChange("batch", value)} value={formData.batch}>
          <SelectTrigger>
            <SelectValue placeholder="Select a batch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="batch1">Batch 1</SelectItem>
            <SelectItem value="batch2">Batch 2</SelectItem>
            <SelectItem value="batch3">Batch 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="section">Section</Label>
        <Select onValueChange={(value) => handleSelectChange("section", value)} value={formData.section}>
          <SelectTrigger>
            <SelectValue placeholder="Select a section" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="section1">Section 1</SelectItem>
            <SelectItem value="section2">Section 2</SelectItem>
            <SelectItem value="section3">Section 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Adding..." : "Add Resource"}
      </Button>
    </form>
  );
}
