import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <header className="absolute top-0 left-0 w-full z-10 text-white">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Saylani LMS</h1>
          <nav className="flex space-x-6">
            <a href="#courses" className="hover:underline text-green-400 text-2xl">
              Courses
            </a>
            <a href="#stories" className="hover:underline text-green-400 text-2xl">
              Success Stories
            </a>
            <a href="#subscribe" className="hover:underline text-green-400 text-2xl">
              Subscribe
            </a>
            <a href="/login">
              <Button className="bg-white text-green-600 hover:bg-gray-200 py-2 px-6 rounded-lg">
                Login
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-[115vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/saylani-welfare/image/upload/v1721909453/website-images/dynamic/692fbdfa-20b6-4f0b-9c59-778cca7ba0b5.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white mt-16"> {/* Added margin for spacing */}
            <h1 className="text-5xl font-bold mb-6">Saylani Learning Management System</h1>
            <p className="text-lg leading-relaxed mb-8">
              Empowering students with world-class education resources and career growth.
            </p>
            <a href="/login">
              <Button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p>Learn the latest web technologies and build responsive websites.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
              <p>Create engaging apps for Android and iOS with our expert courses.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Graphic Designing</h3>
              <p>Master the art of design and create stunning visuals for digital media.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="stories" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
          <div className="relative">
            {/* Left Arrow Button */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2"
              onClick={() =>
                document.getElementById("stories-container").scrollBy({ left: -300, behavior: "smooth" })
              }
            >
              ◀
            </button>

            {/* Scrollable Success Stories */}
            <div
              id="stories-container"
              className="flex space-x-6 overflow-x-scroll no-scrollbar px-4 pb-5"
              style={{ scrollBehavior: "smooth" }}
            >
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-700">
                  "The LMS platform helped me switch careers successfully. Highly recommended!"
                </p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-700">
                  "I landed my dream job after completing the mobile app development course!"
                </p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Michael Brown</h3>
                <p className="text-gray-700">
                  "Thanks to Saylani LMS, I built a strong foundation in graphic designing!"
                </p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Emily Davis</h3>
                <p className="text-gray-700">
                  "The hands-on projects and expert guidance made learning so enjoyable."
                </p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Emily Davis</h3>
                <p className="text-gray-700">
                  "The hands-on projects and expert guidance made learning so enjoyable."
                </p>
              </div>
              <div className="bg-white min-w-[300px] p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">Emily Davis</h3>
                <p className="text-gray-700">
                  "The hands-on projects and expert guidance made learning so enjoyable."
                </p>
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2"
              onClick={() =>
                document.getElementById("stories-container").scrollBy({ left: 300, behavior: "smooth" })
              }
            >
              ▶
            </button>
          </div>
        </div>
      </section>


      {/* Subscribe Section */}
      <section id="subscribe" className="py-16 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8">
            Stay updated with the latest courses, news, and updates from Saylani LMS.
          </p>
          <div className="flex justify-center items-center   flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-1/3 rounded-l-lg text-gray-700 focus:outline-none"
            />
            <Button className="bg-green-500 my-3 w-1/3 hover:bg-green-700 px-6 py-3 rounded-r-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Saylani LMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
