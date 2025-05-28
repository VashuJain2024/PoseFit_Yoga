import React, { useState } from 'react';
import { Activity, Calendar, Award, Clock, ChevronRight } from 'lucide-react';

// Mock data for practice history
const practiceHistory = [
    { date: '2025-06-10', duration: 25, poses: ['Warrior II', 'Tree Pose', 'Cobra Pose'], accuracy: 85 },
    { date: '2025-06-08', duration: 15, poses: ['Tree Pose', 'Cow Face Arms'], accuracy: 78 },
    { date: '2025-06-05', duration: 30, poses: ['Warrior II', 'Bow Pose', 'Cobra Pose', "Adept's Pose"], accuracy: 82 },
    { date: '2025-06-03', duration: 20, poses: ['Cobra Pose', 'Tree Pose'], accuracy: 75 },
    { date: '2025-06-01', duration: 40, poses: ['Warrior II', 'Bow Pose', 'Tree Pose', 'Cobra Pose'], accuracy: 88 }
];

// Achievements data
const achievements = [
    { id: 1, name: 'First Practice', description: 'Completed your first yoga session', unlocked: true, icon: <Activity className="h-6 w-6" /> },
    { id: 2, name: '5 Days Streak', description: 'Practiced for 5 consecutive days', unlocked: true, icon: <Calendar className="h-6 w-6" /> },
    { id: 3, name: 'Perfect Pose', description: 'Achieved 100% accuracy on a pose', unlocked: true, icon: <Award className="h-6 w-6" /> },
    { id: 4, name: 'Yoga Explorer', description: 'Tried 10 different yoga poses', unlocked: false, icon: <Award className="h-6 w-6" /> },
    { id: 5, name: '30-Minute Session', description: 'Completed a 30-minute session', unlocked: true, icon: <Clock className="h-6 w-6" /> },
    { id: 6, name: 'Advanced Yogi', description: 'Mastered an advanced pose', unlocked: false, icon: <Award className="h-6 w-6" /> }
];

// Stats
const totalPracticeTime = practiceHistory.reduce((total, session) => total + session.duration, 0);
const totalSessions = practiceHistory.length;
const averageAccuracy = Math.round(practiceHistory.reduce((sum, session) => sum + session.accuracy, 0) / totalSessions);
const uniquePoses = new Set(practiceHistory.flatMap(session => session.poses)).size;

const Profile = () => {
    const [selectedTab, setSelectedTab] = useState('history');

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    return (
        <div className="space-y-8">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6">
                        <div className="bg-white rounded-full p-2">
                            <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center">
                                <span className="text-2xl font-bold text-primary-700">YP</span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Your Profile</h1>
                            <p className="text-primary-100">Track your yoga journey</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                        <div className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold">{totalSessions}</p>
                            <p className="text-sm text-primary-100">Sessions</p>
                        </div>
                        <div className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold">{totalPracticeTime}</p>
                            <p className="text-sm text-primary-100">Minutes</p>
                        </div>
                        <div className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold">{uniquePoses}</p>
                            <p className="text-sm text-primary-100">Poses</p>
                        </div>
                        <div className="bg-white bg-opacity-10 rounded-xl p-4 text-center">
                            <p className="text-2xl font-bold">{averageAccuracy}%</p>
                            <p className="text-sm text-primary-100">Accuracy</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="flex border-b border-gray-200">
                    <button
                        className={`flex-1 py-4 text-center font-medium ${selectedTab === 'history'
                            ? 'text-primary-600 border-b-2 border-primary-500'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setSelectedTab('history')}
                    >
                        Practice History
                    </button>
                    <button
                        className={`flex-1 py-4 text-center font-medium ${selectedTab === 'achievements'
                            ? 'text-primary-600 border-b-2 border-primary-500'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setSelectedTab('achievements')}
                    >
                        Achievements
                    </button>
                </div>

                <div className="p-6">
                    {selectedTab === 'history' ? (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Practice Sessions</h2>
                            {practiceHistory.map((session, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-lg font-medium text-gray-900">{formatDate(session.date)}</p>
                                            <p className="text-sm text-gray-500">
                                                {session.duration} minutes • {session.poses.length} poses
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-white py-1 px-3 rounded-full border border-gray-200 mr-3">
                                                <span className="text-sm font-medium text-gray-900">{session.accuracy}%</span>
                                            </div>
                                            <ChevronRight className="h-5 w-5 text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {session.poses.map((pose, poseIndex) => (
                                            <span
                                                key={poseIndex}
                                                className="bg-primary-50 text-primary-700 text-xs font-medium px-2 py-1 rounded-full"
                                            >
                                                {pose}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="text-center mt-6">
                                <button className="text-primary-600 font-medium hover:text-primary-700">
                                    View All History
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Achievements</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {achievements.map((achievement) => (
                                    <div
                                        key={achievement.id}
                                        className={`flex items-center p-4 rounded-lg border ${achievement.unlocked
                                            ? 'bg-white border-primary-200'
                                            : 'bg-gray-100 border-gray-200 opacity-70'
                                            }`}
                                    >
                                        <div
                                            className={`p-3 rounded-full mr-4 ${achievement.unlocked
                                                ? 'bg-primary-100 text-primary-600'
                                                : 'bg-gray-200 text-gray-500'
                                                }`}
                                        >
                                            {achievement.icon}
                                        </div>
                                        <div>
                                            <h3
                                                className={`font-medium ${achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                                                    }`}
                                            >
                                                {achievement.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">{achievement.description}</p>
                                        </div>
                                        {achievement.unlocked && (
                                            <div className="ml-auto">
                                                <div className="bg-primary-50 text-primary-700 text-xs font-bold px-2 py-1 rounded-full">
                                                    Unlocked
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
