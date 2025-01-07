'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from 'react-router';
import { useToast } from '@/hooks/use-toast';

export function AddCourseForm() {
  const [state, setState] = useState({ message: null, errors: {} });
  const [eligibilityList, setEligibilityList] = useState([]);
  const [eligibility, setEligibility] = useState('');
  const { toast } = useToast(); // Initialize Toast
  const router = useNavigate(); // Initialize Router

  const handleAddEligibility = () => {
    if (eligibility.trim() !== '') {
      setEligibilityList([...eligibilityList, eligibility.trim()]);
      setEligibility('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const courseData = {
      title: formData.get('title'),
      description: formData.get('description'),
      duration: formData.get('duration'),
      eligibility: eligibilityList,
      trainerName: formData.get('trainerName'),
      thumbnail: formData.get('thumbnail'),
    };

    try {
      const response = await fetch('http://localhost:4000/api/v1/course/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      });

      const result = await response.json();
      console.log(result); // Log the response to the console

      if (response.ok) {
        setState({ message: 'Course added successfully!', errors: {} });

        // Show success toast
        toast({
          title: "Success",
          description: "Course added successfully!",
         variant: "success"
        });

        // Navigate to courses page
        router('/admin/courses');
      } else {
        setState({ message: result.message, errors: result.errors || {} });

        // Show error toast
        toast({
          title: "Error",
          description: result.message || "Failed to add the course.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error:', error);

      // Show error toast
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      });

      setState({ message: 'An error occurred. Please try again later.', errors: {} });
    }
  };

  return (
    <Card className="w-full mx-auto flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="flex-grow overflow-y-auto py-4">
          <CardContent className="space-y-2">
            <Label htmlFor="title">Course Title</Label>
            <Input id="title" name="title" required />
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" required />
            <Label htmlFor="duration">Duration</Label>
            <Input id="duration" name="duration" required />
            <Label htmlFor="eligibility">Eligibility</Label>
            <div className="flex space-x-2">
              <Input
                id="eligibility"
                value={eligibility}
                onChange={(e) => setEligibility(e.target.value)}
                placeholder="Add eligibility criterion"
              />
              <Button type="button" onClick={handleAddEligibility}>Add</Button>
            </div>
            <ul className="list-disc list-inside">
              {eligibilityList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Label htmlFor="trainerName">Trainer Name</Label>
            <Input id="trainerName" name="trainerName" required />
            {/* <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input id="thumbnail" name="thumbnail" type="url" /> */}
          </CardContent>
        </div>
        <CardFooter>
          <Button type="submit" className="w-full">Add Course</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
