'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';

export function AddTrainerForm() {
  const [formData, setFormData] = useState({
    courseName: '',
    batchName: '',
    studentName: '',
    avatarUrl: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const { toast } = useToast();
//   const router = useRouter();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.courseName) errors.courseName = "Course name is required";
    if (!formData.batchName) errors.batchName = "Batch name is required";
    if (!formData.studentName) errors.studentName = "Student name is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    try {
      const response = await fetch('http://localhost:4000/api/v1/trainer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to post data');
      }

      // Show success toast
      toast({
        title: 'Success!',
        description: 'Trainer added successfully.',
        variant: 'default',
      });

      // Reset form and close the dialog (if applicable)
      setFormData({
        courseName: '',
        batchName: '',
        studentName: '',
        avatarUrl: ''
      });
      setFormErrors({});

      // Optionally, navigate away or close the form dialog
      // router.push('/some-other-page'); // Uncomment if you want to navigate after success
    } catch (error) {
      toast({
        title: 'Error!',
        description: error instanceof Error ? error.message : 'An error occurred',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="w-full  mx-auto">
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 p-4">
          <div className="space-y-2">
            <Label htmlFor="courseName">Course Name</Label>
            <Input
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
              required
            />
            {formErrors.courseName && (
              <p className="text-sm text-destructive">{formErrors.courseName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="batchName">Batch Name</Label>
            <Input
              id="batchName"
              name="batchName"
              value={formData.batchName}
              onChange={handleInputChange}
              required
            />
            {formErrors.batchName && (
              <p className="text-sm text-destructive">{formErrors.batchName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="studentName">Trainer Name</Label>
            <Input
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              required
            />
            {formErrors.studentName && (
              <p className="text-sm text-destructive">{formErrors.studentName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="avatarUrl">Avatar URL</Label>
            <Input
              id="avatarUrl"
              name="avatarUrl"
              value={formData.avatarUrl}
              onChange={handleInputChange}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
}

