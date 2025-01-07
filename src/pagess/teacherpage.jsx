import { useState, useEffect } from "react";
import { AddCourseForm } from "@/components/CoursesComponents/AddCourseCard";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import TrainerCard from "@/components/TrainerComponents/TrainerCard";
import { TrainerCardSkeleton } from "@/components/TrainerComponents/TrainerCardSkeleton";

// This is mock data. In a real application, you'd fetch this from an API.
const mockTrainers = [
  {
    courseName: "Blockchain Development",
    batchName: "2024",
    studentName: "Ayesha Malik",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    courseName: "Data Science",
    batchName: "2023",
    studentName: "Omar Hassan",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    courseName: "Internet of Things (IoT)",
    batchName: "2024",
    studentName: "Fatima Zahra",
    avatarUrl: "https://github.com/shadcn.png"
  }
];

function TeacherPage() {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const fetchTrainers = async () => {
            setLoading(true);
            try {
                // In a real application, replace this with an actual API call
                await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
                setTrainers(mockTrainers);
            } catch (error) {
                console.error("Error fetching trainers:", error);
                // Handle error state here
            } finally {
                setLoading(false);
            }
        };

        fetchTrainers();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Teachers</h1>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Add Teacher</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl">
                        <DialogHeader>
                            <DialogTitle>Add a New Teacher</DialogTitle>
                        </DialogHeader>
                        <AddCourseForm />
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading
                    ? Array(3).fill(0).map((_, index) => (
                        <TrainerCardSkeleton key={index} />
                      ))
                    : trainers.map((trainer, index) => (
                        <TrainerCard
                            key={index}
                            courseName={trainer.courseName}
                            batchName={trainer.batchName}
                            studentName={trainer.studentName}
                            avatarUrl={trainer.avatarUrl}
                        />
                      ))
                }
            </div>
        </div>
    )
}

export default TeacherPage;

