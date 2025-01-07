import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { Menu, X, ChevronRight, Users, BookOpen, Dumbbell, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


const menuItems = [
    { icon: Users, name: 'Teachers', path: '/admin/teachers' },
    { icon: BookOpen, name: 'Courses', path: '/admin/courses' },
    { icon: Dumbbell, name: 'Students', path: '/admin/Students' }
];

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();


    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "/avatars/john-doe.png" // Replace with actual avatar path
    };

    return (
        <div className={` top-0 left-0 bg-gray-800 text-white h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out `}>
            <div className=''>
                <div>
                    <div className="flex justify-between items-center p-4">
                        {isOpen && <h1 className="text-2xl font-bold">Admin</h1>}
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-gray-700">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                    <nav>
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center text-zinc-300 p-4 hover:bg-gray-700 ${location.pathname === item.path ? 'bg-gray-700' : ''
                                    }`}
                            >
                                <item.icon size={24} />
                                {isOpen && <span className="ml-4 ">{item.name}</span>}
                                {!isOpen && (
                                    <ChevronRight
                                        size={16}
                                        className="ml-auto  "
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className={`mt-80 p-4 ${isOpen ? 'border-t border-gray-700' : ''}`}>
                    <div className="flex items-center">
                        <Avatar>
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                        </Avatar>
                        {isOpen && (
                            <div className="ml-3">
                                <p className="text-sm font-medium">{user.name}</p>
                                <p className="text-xs text-zinc-400">{user.email}</p>
                            </div>
                        )}
                    </div>
                    {isOpen && (
                        <Button
                            variant="ghost"
                            className="w-full mt-4 text-zinc-300 bg-gray-700  justify-start"
                        >
                            <LogOut size={20} className="mr-2" />
                            Logout
                        </Button>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Sidebar;

