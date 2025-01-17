import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AddCourseForm } from "@/components/CoursesComponents/AddCourseCard"
import { AddTrainerForm } from "@/components/TrainerComponents/AddTrainerForm"

export default function AdminPage() {
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold mb-6">Admin Management System</h1>
      <Tabs defaultValue="course" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="course">Add Course</TabsTrigger>
          <TabsTrigger value="trainer">Add Trainer</TabsTrigger>
          <TabsTrigger value="student">Add Student</TabsTrigger>
        </TabsList>
        <TabsContent value="course">
          <Card>
            <CardHeader>
              <CardTitle>Add New Course</CardTitle>
              <CardDescription>Create a new course in the system.</CardDescription>
            </CardHeader>
            <CardContent>
              <AddCourseForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trainer">
          <Card>
            <CardHeader>
              <CardTitle>Add New Trainer</CardTitle>
              <CardDescription>Register a new trainer in the system.</CardDescription>
            </CardHeader>
            <CardContent>
              <AddTrainerForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Add New Student</CardTitle>
              <CardDescription>Enroll a new student in the system.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <AddStudentForm /> */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
