
const CourseCards = () => {
  const courses = [
    { title: "React for Beginners", description: "Learn React basics." },
    { title: "Node.js Essentials", description: "Master server-side programming." },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 border border-gray-200"
          >
            <h3 className="font-medium text-lg">{course.title}</h3>
            <p className="text-gray-500">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
