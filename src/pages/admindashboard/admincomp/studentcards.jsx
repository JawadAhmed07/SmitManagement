const StudentCards = () => {
  const students = [
    { name: "Emily Johnson", email: "emily.johnson@example.com" },
    { name: "Michael Brown", email: "michael.brown@example.com" },
    { name: "Sophia Davis", email: "sophia.davis@example.com" },
    { name: "Liam Miller", email: "liam.miller@example.com" },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">Students</h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition duration-200"
          >
            <h3 className="font-medium text-lg text-gray-800">{student.name}</h3>
            <p className="text-gray-600">{student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCards;
