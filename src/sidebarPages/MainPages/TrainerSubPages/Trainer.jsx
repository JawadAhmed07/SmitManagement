import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import  { AddResourceForm } from "@/components/TrainerComponent.jsx/AddResources";
import { AddAssignmentForm } from "@/components/AssignmentComponents/AddAsignmentform";
import { ClassAnnouncementForm } from "@/components/TrainerComponent.jsx/TrainerAnnouncement";

export default function Trainer() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Trainer Management</h1>
      <Tabs defaultValue="add-resources" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="add-resources">Add Resources</TabsTrigger>
          <TabsTrigger value="add-assignment">Add Assignment</TabsTrigger>
          <TabsTrigger value="announcement">Add Announcement</TabsTrigger>
        </TabsList>
        <TabsContent value="add-resources">
          <Card>
            <CardHeader>
              <CardTitle>Add resources</CardTitle>
              <CardDescription>Make a new Assignment For Students.</CardDescription>
            </CardHeader>
            <CardContent>
              <AddResourceForm/>
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
        <TabsContent value="announcement">
          <Card>
            <CardHeader>
              <CardTitle>Add Announcement</CardTitle>
              <CardDescription>View and manage trainer details and activities.</CardDescription>
            </CardHeader>
            <CardContent>
              <ClassAnnouncementForm/>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
