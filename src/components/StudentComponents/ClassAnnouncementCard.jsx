import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Calendar } from "lucide-react"

 

export function ClassAnnouncementCard({ title, content, date, category } ) {
  return (
    <Card className="mb-4 transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <Badge variant="secondary">{category}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{content}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        </div>
      </CardContent>
    </Card>
  )
}

