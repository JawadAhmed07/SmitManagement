import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function AddAssignmentForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    batch: "",
    points: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
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
        points: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-4 border rounded-lg shadow-sm bg-white space-y-4"
    >
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Assignment added successfully!</p>}

      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter assignment title"
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
          placeholder="Enter assignment description"
          rows={4}
          required
        />
      </div>
      <div>
        <Label htmlFor="dueDate">Due Date</Label>
        <Input
          id="dueDate"
          name="dueDate"
          type="datetime-local"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="batch">Batch</Label>
        <Input
          id="batch"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          placeholder="Enter batch name"
          required
        />
      </div>
      <div>
        <Label htmlFor="points">Points</Label>
        <Input
          id="points"
          name="points"
          type="number"
          value={formData.points}
          onChange={handleChange}
          placeholder="Enter total points"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Adding..." : "Add Assignment"}
      </Button>
    </form>
  );
}
