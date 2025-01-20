import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

export function ApplyForCourse({ course }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    batch: course.batch,
    section: course.section,
    eligibility: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => {
      const eligibility = prev.eligibility.includes(value)
        ? prev.eligibility.filter((item) => item !== value)
        : [...prev.eligibility, value];
      return { ...prev, eligibility };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call to submit the application)
    console.log("Course application submitted:", formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-black text-white">Apply for Course</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply for {course.title}</DialogTitle>
          <DialogDescription>Fill in your details to apply for the course.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full"
            required
          />
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="w-full"
            required
          />
          
          <div className="mb-4">
            <h4 className="font-semibold">Batch: {course.batch}</h4>
            <h4 className="font-semibold">Section: {course.section}</h4>
          </div>

          {/* <div className="mb-4">
            <h4 className="font-semibold">Eligibility Criteria:</h4>
            {course.eligibility?.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`eligibility-${index}`}
                  value={item}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4"
                />
                <label htmlFor={`eligibility-${index}`} className="text-sm">{item}</label>
              </div>
            ))}
          </div> */}

          <Button type="submit" className="w-full bg-green-500 text-white">
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
