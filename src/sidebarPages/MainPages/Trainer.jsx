import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AddAssignmentForm } from "@/components/AssignmentComponents/AddAsignmentform";

export default function Trainer() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Trainer Management System</h1>
      <Tabs defaultValue="add-trainer" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {/* <TabsTrigger value="add-trainer">Add Trainer</TabsTrigger> */}
          <TabsTrigger value="add-assignment">Add Assignment</TabsTrigger>
          {/* <TabsTrigger value="manage-trainers">Manage Trainers</TabsTrigger> */}
        </TabsList>
        <TabsContent value="add-trainer">
          <Card>
            <CardHeader>
              <CardTitle>Add New Trainer</CardTitle>
              <CardDescription>Register a new trainer in the system.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <AddTrainerForm /> */}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add-assignment">
          <Card>
            <CardHeader>
              <CardTitle>Add New Assignment</CardTitle>
              <CardDescription>Create and assign tasks for trainers.</CardDescription>
            </CardHeader>
            <CardContent>
              <AddAssignmentForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="manage-trainers">
          <Card>
            <CardHeader>
              <CardTitle>Manage Trainers</CardTitle>
              <CardDescription>View and manage trainer details and activities.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <ManageTrainers /> */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
