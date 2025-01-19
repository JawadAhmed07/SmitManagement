import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Award, BookOpen, Clock } from "lucide-react";
import { Badge } from "../ui/badge";

export function AssignmentRow({ assignment }) {
  const dueDate = new Date(assignment.dueDate);
  const status = assignment.status || "Pending"; // Default to "Pending" if status is undefined

  return (
    <Card className="mb-4 transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div className="flex-grow space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-primary">{assignment.title}</h3>
              <Badge variant="secondary" className="text-xs">
                {status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{assignment.description}</p>
            <div className="flex items-center text-sm text-muted-foreground space-x-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                <span>
                  Due:{" "}
                  {dueDate.toLocaleDateString(undefined, {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              {assignment.batch && (
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    Batch {assignment.batch}
                  </Badge>
                </div>
              )}
              {assignment.section && (
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    Section {assignment.section}
                  </Badge>
                </div>
              )}
              <div className="flex items-center">
                <Award className="mr-2 h-4 w-4 text-primary" />
                <span>{assignment.points} points</span>
              </div>
              {assignment.courseName && (
                <div className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4 text-primary" />
                  <span>{assignment.courseName}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
