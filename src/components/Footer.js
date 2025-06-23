import React from 'react';
import { Activity } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-[#ebebeb] py-12 font-inter">
            <div className="container mx-auto px-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    {/* Logo & Brand */}
                    <div className="flex items-center space-x-3">
                        <Activity className="h-6 w-6 text-white" />
                        <span className="text-2xl font-bold tracking-wide text-white">PoseFit</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col sm:flex-row gap-12">
                        <div>
                            <h3 className="font-semibold mb-3 text-white uppercase tracking-wider">Navigation</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/" className="hover:text-white transition">Home</a></li>
                                <li><a href="/practice" className="hover:text-white transition">Practice</a></li>
                                <li><a href="/poses" className="hover:text-white transition">Pose Library</a></li>
                                {/* <li><a href="/profile" className="hover:text-white transition">Profile</a></li> */}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3 text-white uppercase tracking-wider">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li><button className="hover:text-white transition">About Us</button></li>
                                <li><button className="hover:text-white transition">Privacy Policy</button></li>
                                <li><button className="hover:text-white transition">Terms of Service</button></li>
                                <li><button className="hover:text-white transition">Contact</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-10" />

                {/* Footer Note */}
                <div className="text-center text-sm text-[#ebebeb]">
                    <p className="mb-1">&copy; {currentYear} PoseFit. All rights reserved.</p>
                    <p className="text-xs">Crafted with care for yogis worldwide.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;