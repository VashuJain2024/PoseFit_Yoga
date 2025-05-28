import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, BookOpen, User } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navigationItems = [
        { name: 'Home', path: '/', icon: null },
        { name: 'Practice', path: '/practice', icon: <Activity size={18} /> },
        { name: 'Pose Library', path: '/poses', icon: <BookOpen size={18} /> },
        { name: 'Profile', path: '/profile', icon: <User size={18} /> },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <Activity className="h-8 w-8 text-primary-600" />
                        <span className="text-xl font-semibold text-primary-900">PoseFit</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors ${isActive(item.path)
                                    ? 'text-primary-600 font-medium'
                                    : 'text-gray-600 hover:text-primary-500'
                                    }`}
                            >
                                {item.icon && <span>{item.icon}</span>}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-primary-500 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-3 pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-2">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${isActive(item.path)
                                        ? 'bg-primary-50 text-primary-600 font-medium'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-500'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.icon && <span>{item.icon}</span>}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
