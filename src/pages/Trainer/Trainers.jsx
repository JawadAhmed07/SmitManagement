import AddTrainerForm from "@/components/AddTrainerForm"
import ProfileCard from "@/components/TrainerCard"



const Trainers = [
  {
    courseName: "Web & Mobile App Development",
    batchName: "2023",
    studentName: "Basit Ahmed",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    courseName: "Artificial Intelligence",
    batchName: "2024",
    studentName: "Sarah Khan",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    courseName: "Cloud Computing",
    batchName: "2023",
    studentName: "Muhammad Ali",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    courseName: "Blockchain Development",
    batchName: "2024",
    studentName: "Ayesha Malik",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    courseName: "Data Science",
    batchName: "2023",
    studentName: "Omar Hassan",
    avatarUrl: "https://github.com/shadcn.png"
  },
  {
    courseName: "Internet of Things (IoT)",
    batchName: "2024",
    studentName: "Fatima Zahra",
    avatarUrl: "https://github.com/shadcn.png"
  }
]

export default function Page() {

  const user = "admin"


  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="justify-between flex py-10 ">

          <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-bold text-gray-900">
            Trainers
          </h1>
          {
            user == "admin" ?
              <AddTrainerForm/> :
              ""
          }

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Trainers.map((Trainers, index) => (
            <ProfileCard
              key={index}
              courseName={Trainers.courseName}
              batchName={Trainers.batchName}
              studentName={Trainers.studentName}
              avatarUrl={Trainers.avatarUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

