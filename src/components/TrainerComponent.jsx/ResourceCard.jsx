import { CalendarIcon, BookOpenIcon, UsersIcon, LayersIcon, ClockIcon, LinkIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ResourceCard({ resource }) {
  const typeColors = {
    video: "bg-red-100 text-red-800",
    document: "bg-blue-100 text-blue-800",
    link: "bg-green-100 text-green-800",
    github: "bg-purple-100 text-purple-800",
    other: "bg-gray-100 text-gray-800",
  }

  // Check if the dueDate is a valid date
  const dueDate = new Date(resource.dueDate);
  const isValidDate = !isNaN(dueDate.getTime()); // checks for valid date

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg p-2">
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">{resource.title}</CardTitle>
          <Badge className={`${typeColors[resource.type]} capitalize px-2 py-1`}>{resource.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-2">
        <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
          <div className="flex items-center">
            <BookOpenIcon className="w-4 h-4 mr-2 text-primary" />
            <span>{resource.courseName}</span>
          </div>
          <div className="flex items-center">
            <UsersIcon className="w-4 h-4 mr-2 text-primary" />
            <span>{resource.batch}</span>
          </div>
          <div className="flex items-center">
            <LayersIcon className="w-4 h-4 mr-2 text-primary" />
            <span>{resource.section}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2 text-primary" />
            <span>{isValidDate ? dueDate.toLocaleDateString() : "Invalid Date"}</span>
          </div>
          <div className="flex items-center col-span-2">
            <ClockIcon className="w-4 h-4 mr-2 text-primary" />
            <span>{isValidDate ? dueDate.toLocaleTimeString() : "Invalid Time"}</span>
          </div>
        </div>
      </CardContent>
      {resource.url && (
        <CardFooter className="px-4 pt-2 pb-4">
          <Button variant="outline" className="w-full" asChild>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <LinkIcon className="w-4 h-4 mr-2" />
              Open Resource
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
