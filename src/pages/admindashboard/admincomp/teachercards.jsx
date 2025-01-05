
const TeacherCards = () => {
  const teachers = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
    { name: "Jawad Ahmed", email: "Jawadahmed@example.com" },
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
    { name: "Jawad Ahmed", email: "Jawadahmed@example.com" },
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
  ];

  return (
    <div className="container h-screen  mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Teachers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 border border-gray-200"
          >
            <h3 className="font-medium text-lg">{teacher.name}</h3>
            <p className="text-gray-500">{teacher.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherCards;
