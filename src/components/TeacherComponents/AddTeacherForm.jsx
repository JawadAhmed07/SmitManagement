'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';

export function AddTeacherForm() {
  const [formData, setFormData] = useState({
    trainerName: '',
    email: '',
    password: '',
    age: '',
    avatarUrl: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const { toast } = useToast();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.trainerName) errors.trainerName = "Trainer name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.age) errors.age = "Age is required";
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
        trainerName: '',
        email: '',
        password: '',
        age: '',
        avatarUrl: ''
      });
      setFormErrors({});

    } catch (error) {
      toast({
        title: 'Error!',
        description: error instanceof Error ? error.message : 'An error occurred',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 p-4">
          <div className="space-y-2">
            <Label htmlFor="trainerName">Trainer Name</Label>
            <Input
              id="trainerName"
              name="trainerName"
              value={formData.trainerName}
              onChange={handleInputChange}
              required
            />
            {formErrors.trainerName && (
              <p className="text-sm text-destructive">{formErrors.trainerName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {formErrors.email && (
              <p className="text-sm text-destructive">{formErrors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {formErrors.password && (
              <p className="text-sm text-destructive">{formErrors.password}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            {formErrors.age && (
              <p className="text-sm text-destructive">{formErrors.age}</p>
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


