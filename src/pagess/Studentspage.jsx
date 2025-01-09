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
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { StudentsSkeleton } from "@/components/StudentComponents/StudentSkeleton";

const mockStudents = [
    { id: "1", avatar: "/placeholder.svg?height=32&width=32", name: "Alicee Johnson", email: "alice@example.com", batch: "2023", section: "A" },
    { id: "2", avatar: "/placeholder.svg?height=32&width=32", name: "Bob Smith", email: "bob@example.com", batch: "2023", section: "B" },
    { id: "3", avatar: "/placeholder.svg?height=32&width=32", name: "Charlie Brown", email: "charlie@example.com", batch: "2022", section: "A" },
    { id: "4", avatar: "/placeholder.svg?height=32&width=32", name: "Diana Ross", email: "diana@example.com", batch: "2022", section: "C" },
    { id: "5", avatar: "/placeholder.svg?height=32&width=32", name: "Ethan Hunt", email: "ethan@example.com", batch: "2024", section: "B" },
]

function StudentPage() {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        name: "",
        email: "",
        batch: "",
        section: "",
    })

    useEffect(() => {
        const fetchStudents = async () => {
            setLoading(true)
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500))
                setStudents(mockStudents)
            } catch (error) {
                console.error("Error fetching students:", error)
                // Handle error state here
            } finally {
                setLoading(false)
            }
        }

        fetchStudents()
    }, [])

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        student.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        student.batch.includes(filters.batch) &&
        student.section.includes(filters.section)
    )

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Students</h1>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Add Students</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl">
                        <DialogHeader>
                            <DialogTitle>Add a New Student</DialogTitle>
                        </DialogHeader>
                        <AddCourseForm />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="nameFilter">Name</Label>
                        <Input
                            id="nameFilter"
                            placeholder="Filter by name"
                            value={filters.name}
                            onChange={(e) => handleFilterChange("name", e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="emailFilter">Email</Label>
                        <Input
                            id="emailFilter"
                            placeholder="Filter by email"
                            value={filters.email}
                            onChange={(e) => handleFilterChange("email", e.target.value)}
                        />
                    </div>
                </div>

                <Table>
                    <TableCaption>A list of students.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Avatar</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Batch</TableHead>
                            <TableHead>Section</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            Array(5).fill(0).map((_, index) => (
                                <StudentsSkeleton key={index} />
                            ))
                        ) : (
                            filteredStudents.map((student) => (
                                <TableRow key={student.id}>
                                    <TableCell>
                                        <Avatar>
                                            <AvatarImage
                                                src="https://img.freepik.com/free-photo/caucasian-young-man-s-half-length-portrait-yellow-space-beautiful-male-model-blue-shirt_155003-26990.jpg?ga=GA1.1.518592586.1717923796&semt=ais_hybrid"
                                                alt={`${student.name}'s avatar`}
                                            />
                                            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    </TableCell>
                                    <TableCell className="font-medium">{student.name}</TableCell>
                                    <TableCell>{student.email}</TableCell>
                                    <TableCell>{student.batch}</TableCell>
                                    <TableCell>{student.section}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default StudentPage

