import { useState, useEffect } from "react";
import TeacherCard from "@/components/TeacherComponents/TeacherCard";
import { TeacherCardSkeleton } from "@/components/TeacherComponents/TeacherCardSkeleton";

function TeacherPage() {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch trainers from API
    useEffect(() => {
        const fetchTrainers = async () => {
            setLoading(true);
            try {
                const response = await fetch("http://localhost:4000/api/v1/trainer/available");
                const data = await response.json();
                setTrainers(data);
            } catch (error) {
                console.error("Error fetching trainers:", error);
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

                {/* <Dialog>
                    <DialogTrigger asChild>
                        <Button>Add Trainer</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl">
                        <DialogHeader>
                            <DialogTitle>Add a New Trainer</DialogTitle>
                        </DialogHeader>
                        <AddTrainerForm />
                    </DialogContent>
                </Dialog> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading
                    ? Array(3)
                        .fill(0)
                        .map((_, index) => <TeacherCardSkeleton key={index} />)
                    : trainers.map((trainer, index) => (
                        <TeacherCard
                            key={index}
                            trainerName={trainer.trainerName}
                            email={trainer.email}
                            age={trainer.age}
                            avatarUrl={trainer.avatarUrl}
                        />
                    ))}
            </div>
        </div>
    );
}

export default TeacherPage;
