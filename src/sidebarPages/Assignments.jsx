import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AssignmentRow } from "@/components/AssignmentComponents/AssignmentCard";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog" 
import { AddAssignmentForm } from "@/components/AssignmentComponents/AddAsignmentform";


// Component to fetch and display assignments
export function AssignmentsList() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch assignments from the backend
  useEffect(() => {
    const fetchAssignments = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:4000/api/v1/assignments/available"); // Adjust the API endpoint as needed
        if (!response.ok) {
          throw new Error("Failed to fetch assignments");
        }
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  if (loading) {
    return <p>Loading assignments...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="max-w-6xl p-4">
            <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Assignments</h1>

      </div>

      {assignments.length > 0 ? (
        assignments.map((assignment) => (
          <AssignmentRow key={assignment._id} assignment={assignment} />
        ))
      ) : (
        <p>No assignments found.</p>
      )}
    </div>
  );
}
