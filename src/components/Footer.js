import React from 'react';
import { Activity } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Activity className="h-6 w-6 text-primary-600" />
                        <span className="text-lg font-semibold text-primary-900">PoseFit</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 mb-4 md:mb-0">
                        <div>
                            <h3 className="font-medium text-gray-800 mb-2">Navigation</h3>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-600 hover:text-primary-500 transition-colors">Home</a></li>
                                <li><a href="/practice" className="text-gray-600 hover:text-primary-500 transition-colors">Practice</a></li>
                                <li><a href="/poses" className="text-gray-600 hover:text-primary-500 transition-colors">Pose Library</a></li>
                                <li><a href="/profile" className="text-gray-600 hover:text-primary-500 transition-colors">Profile</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium text-gray-800 mb-2">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center md:text-right text-gray-500 text-sm">
                        <p>&copy; {currentYear} PoseFit. All rights reserved.</p>
                        <p className="mt-1">Crafted with care for yogis worldwide.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
