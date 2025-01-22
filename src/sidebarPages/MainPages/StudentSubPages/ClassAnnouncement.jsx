import { ClassAnnouncementCard } from "@/components/StudentComponents/ClassAnnouncementCard"
import { Megaphone } from "lucide-react"

// This would typically come from an API or database
const announcements = [
  {
    id: 1,
    title: "End of Semester Exams",
    content:
      "The end of semester exams will begin on June 15th. Please check the exam schedule for your specific exam times and locations.",
    date: "2023-05-30",
    category: "Exams",
  },
  {
    id: 2,
    title: "Summer Break",
    content: "Summer break will start from July 1st. Classes will resume on September 1st. Enjoy your holidays!",
    date: "2023-06-01",
    category: "Holidays",
  },
  {
    id: 3,
    title: "New Course Offerings",
    content:
      "We are excited to announce new course offerings for the upcoming semester. Registration will open on July 15th.",
    date: "2023-06-05",
    category: "Courses",
  },
]

export default function AnnouncementPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Megaphone className="mr-2 h-6 w-6" />
        Class Announcements
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {announcements.map((announcement) => (
          <ClassAnnouncementCard
            key={announcement.id}
            title={announcement.title}
            content={announcement.content}
            date={announcement.date}
            category={announcement.category}
          />
        ))}
      </div>
    </div>
  )
}

