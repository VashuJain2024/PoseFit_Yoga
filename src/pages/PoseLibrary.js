import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Filter } from 'lucide-react';
import { usePoseStore } from '../store/poseStore';

const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
};

const PoseLibrary = () => {
    const { poses } = usePoseStore();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    const categories = Array.from(new Set(poses.map(pose => pose.category)));
    const difficulties = ['beginner', 'intermediate', 'advanced'];

    const filteredPoses = poses.filter(pose => {
        const matchesSearch =
            pose.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pose.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = selectedCategory ? pose.category === selectedCategory : true;
        const matchesDifficulty = selectedDifficulty ? pose.difficulty === selectedDifficulty : true;

        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <h1 className="text-5xl font-bold text-gray-900 mb-2 inline-block border-b-4 border-black">
                    Pose Finder
                </h1>
                <p className="text-gray-600 mt-3 mb-6">
                    Explore our collection of yoga poses with detailed instructions and benefits.
                </p>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8">
                    <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search poses..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="relative">
                            <select
                                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary bg-white"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <Filter className="h-4 w-4 text-gray-400" />
                            </div>
                        </div>

                        <div className="relative">
                            <select
                                className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                                value={selectedDifficulty}
                                onChange={(e) => setSelectedDifficulty(e.target.value)}
                            >
                                <option value="">All Levels</option>
                                {difficulties.map((difficulty) => (
                                    <option key={difficulty} value={difficulty}>
                                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <Filter className="h-4 w-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Poses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPoses.map((pose) => (
                        <div
                            key={pose.id}
                            className="pose-card bg-white border border-orange-400 rounded-xl overflow-hidden shadow-sm transform transition-all duration-300 hover:scale-105 hover:bg-orange-50 hover:shadow-lg"
                        >
                            <div className="h-45 overflow-hidden">
                                <img
                                    src={pose.imageUrl}
                                    alt={pose.name}
                                    className="w-full object-cover object-center md:h-[190px] sm:h-full lg:h-[280px] transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-semibold text-gray-900">{pose.name}</h3>
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[pose.difficulty]}`}
                                    >
                                        {pose.difficulty.charAt(0).toUpperCase() + pose.difficulty.slice(1)}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-3 line-clamp-2">{pose.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm bg-orange-300 text-black rounded-full px-3 py-0.5">
                                        {pose.category}
                                    </span>
                                    <Link
                                        to={`/practice?pose=${pose.id}`}
                                        className="inline-flex items-center text-orange-900 hover:text-primary-700 font-medium"
                                    >
                                        Practice <ChevronRight className="h-4 w-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredPoses.length === 0 && (
                    <div className="text-center py-12">
                        <div className="mb-4 text-gray-400">
                            <Search className="h-12 w-12 mx-auto" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">No poses found</h3>
                        <p className="text-gray-600">
                            Try adjusting your search or filters to find what you're looking for.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PoseLibrary;
