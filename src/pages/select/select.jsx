import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RoleCards = () => {
  const roles = [
    {
      title: "Admin",
      description: "Manage users, monitor progress, and configure the system.",
      buttonText: "Dashbord As Admin",
    },
    {
      title: "Student",
      description: "View assignments, grades, and learning materials.",
      buttonText: "Dashbord As Student",
    },
    {
      title: "Trainer",
      description: "Access general features and information tailored for users.",
      buttonText: "Dashbord As Trainer",
    },
  ];

  return (
    
    <div className="flex flex-wrap justify-center gap-6">
      {roles.map((role, index) => (
        <Card key={index} className="w-72 shadow-md border rounded-lg">
          {/* Large Name Section */}
          <div className="bg-green-600 text-white text-center py-4 text-2xl font-bold uppercase rounded-t-lg">
            {role.title}
          </div>
          <CardHeader>
            <CardDescription className="text-gray-500">{role.description}</CardDescription>
          </CardHeader>
          {/* <CardContent>
            <p className="text-sm text-gray-700">
              Role-specific content can be displayed here. Customize this section for detailed information.
            </p>
          </CardContent> */}
          <CardFooter className="flex justify-center">
            <Button variant="primary" className="w-full">
              {role.buttonText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default RoleCards;
