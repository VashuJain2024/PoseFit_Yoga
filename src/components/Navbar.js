import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, BookOpen } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const isActive = (path) => location.pathname === path;

    const navigationItems = [
        { name: 'Home', path: '/', icon: null },
        { name: 'Practice', path: '/practice', icon: <Activity size={18} /> },
        { name: 'Pose Library', path: '/poses', icon: <BookOpen size={18} /> },
        // { name: 'Profile', path: '/profile', icon: <User size={18} /> },
    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-[#ebebeb] shadow-sm font-playfair">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <Activity className="h-6 w-6 text-black" />
                        <span className="text-2xl font-semibold text-black tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                            PoseFit
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md text-[15px] transition-all duration-300 ease-in-out font-medium ${isActive(item.path)
                                    ? 'bg-transparent text-black border border-black'
                                    : 'text-black hover:bg-transparent hover:text-black hover:border border-black'
                                    }`}
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-black hover:text-[#808c99] transition"
                        >
                            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-[#ebebeb] bg-white/95 backdrop-blur-md px-4 py-4 space-y-2">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md text-[15px] transition-all duration-300 ease-in-out font-medium ${isActive(item.path)
                                ? 'bg-transparent text-black border border-black'
                                : 'text-black hover:bg-transparent hover:text-black hover:border border-black'
                                }`}
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;