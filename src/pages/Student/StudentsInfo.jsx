'use client'

import { useState } from "react"

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
import AddStudentForm from "@/components/AddStudentForm"



const mockStudents = [
    { id: "1", avatar: "/placeholder.svg?height=32&width=32", name: "Alice Johnson", email: "alice@example.com", batch: "2023", section: "A" },
    { id: "2", avatar: "/placeholder.svg?height=32&width=32", name: "Bob Smith", email: "bob@example.com", batch: "2023", section: "B" },
    { id: "3", avatar: "/placeholder.svg?height=32&width=32", name: "Charlie Brown", email: "charlie@example.com", batch: "2022", section: "A" },
    { id: "4", avatar: "/placeholder.svg?height=32&width=32", name: "Diana Ross", email: "diana@example.com", batch: "2022", section: "C" },
    { id: "5", avatar: "/placeholder.svg?height=32&width=32", name: "Ethan Hunt", email: "ethan@example.com", batch: "2024", section: "B" },
]

export default function StudentsInfo() {
    const [students, setStudents] = useState(mockStudents)
    const [filters, setFilters] = useState({
        name: "",
        email: "",
        batch: "",
        section: "",
    })
    

    const user = "admin"

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        student.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        student.batch.includes(filters.batch) &&
        student.section.includes(filters.section)
    )

    return (
        <div className="container max-w-screen-xl px-5 py-10 mx-auto">
            <div className="justify-between flex py-10 ">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                    Students
                </h1>
                {user === "admin" && (
                   <AddStudentForm/>
                )}
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
                    {/* <div className="space-y-2">
                        <Label htmlFor="batchFilter">Batch</Label>
                        <Select
                            value={filters.batch}
                            onValueChange={(value) => handleFilterChange("batch", value)}
                        >
                            <SelectTrigger id="batchFilter">
                                <SelectValue placeholder="Select batch" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">All</SelectItem>
                                <SelectItem value="2022">2022</SelectItem>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2024">2024</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="sectionFilter">Section</Label>
                        <Select
                            value={filters.section}
                            onValueChange={(value) => handleFilterChange("section", value)}
                        >
                            <SelectTrigger id="sectionFilter">
                                <SelectValue placeholder="Select section" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">All</SelectItem>
                                <SelectItem value="A">A</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                                <SelectItem value="C">C</SelectItem>
                            </SelectContent>
                        </Select>
                    </div> */}
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
                        {filteredStudents.map((student) => (
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
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

