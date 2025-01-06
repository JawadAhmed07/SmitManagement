import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronRight, Users, BookOpen, Dumbbell } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
    { icon: Users, name: 'Teachers', path: '/admin/teachers' },
    { icon: BookOpen, name: 'Courses', path: '/admin/courses' },
    { icon: Dumbbell, name: 'Trainers', path: '/admin/trainers' }
];

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    return (
        <div className={`bg-gray-800 text-white h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out`}>
            <div className="flex justify-between items-center p-4">
                {isOpen && <h1 className="text-2xl font-bold">Admin</h1>}
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-black">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <nav>
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center p-4 hover:bg-gray-700 ${location.pathname === item.path ? 'bg-gray-700' : ''
                            }`}
                    >
                        <item.icon size={24} />
                        {isOpen && <span className="ml-4">{item.name}</span>}
                        {!isOpen && (
                            <ChevronRight
                                size={16}
                                className="ml-auto"
                            />
                        )}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;

