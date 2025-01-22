import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { ResourceCard } from "../../../components/TrainerComponent.jsx/ResourceCard";

export default function ClassResourcesPage() {
  const { toast } = useToast();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/resources/available");
        if (!response.ok) throw new Error("Failed to fetch resources");
        const data = await response.json();
        setResources(data);
      } catch (err) {
        toast({
          title: "Error",
          description: err.message,
          variant: "destructive",
        });
      }
    };

    fetchResources();
  }, [toast]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Class Resources</h1>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.length > 0 ? (
          resources.map((resource) => <ResourceCard key={resource._id} resource={resource} />)
        ) : (
          <p className="text-gray-600">No resources available at the moment.</p>
        )}
      </div>
    </div>
  );
}
