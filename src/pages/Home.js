import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, BookOpen, Award, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4498515/pexels-photo-4498515.jpeg')] bg-cover opacity-20 mix-blend-overlay"
          aria-hidden="true"
        ></div>
        <div className="relative px-6 py-20 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Perfect Your Yoga <span className="text-secondary-300">Posture</span> with AI
          </h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl">
            Get real-time feedback on your yoga poses with our advanced AI-powered pose detection technology.
            Practice yoga with confidence from anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/practice"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition"
            >
              <Play size={20} className="mr-2" />
              Start Practicing
            </Link>
            <Link
              to="/poses"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-lg border border-white text-white hover:bg-white hover:text-accent-600 transition"
            >
              <BookOpen size={20} className="mr-2" />
              Explore Poses
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How PoseFit Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our advanced AI technology analyzes your posture in real-time to provide instant feedback and help you perfect your yoga practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary-600 font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Position Your Camera</h3>
            <p className="text-gray-600">
              Set up your device so your full body is visible. Our AI needs to see your complete form to provide accurate feedback.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-secondary-600 font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Select a Pose</h3>
            <p className="text-gray-600">
              Choose from our library of yoga poses. Each pose comes with clear instructions and a visual guide to help you get started.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-accent-600 font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Get Real-Time Feedback</h3>
            <p className="text-gray-600">
              Our AI will analyze your pose in real-time and provide instant feedback on your alignment, helping you make adjustments.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50 rounded-2xl p-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of PoseFit</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take your yoga practice to the next level with personalized guidance and feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <Shield className="flex-shrink-0 w-8 h-8 text-primary-500" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Prevent Injuries</h3>
              <p className="text-gray-600">
                Proper alignment is crucial for avoiding injuries. Our AI helps ensure you're practicing safely with real-time corrections.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Award className="flex-shrink-0 w-8 h-8 text-primary-500" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Perfect Your Technique</h3>
              <p className="text-gray-600">
                Get detailed feedback on your form and technique, helping you achieve the correct alignment for maximum benefit.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <svg className="flex-shrink-0 w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Practice Anytime, Anywhere</h3>
              <p className="text-gray-600">
                No need for in-person classes. Practice at your convenience with personalized guidance wherever you are.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <svg className="flex-shrink-0 w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Track Your Progress</h3>
              <p className="text-gray-600">
                Monitor your improvement over time with our progress tracking features. See how your form and flexibility evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-500 rounded-xl p-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Yoga Practice?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of yogis who have improved their practice with PoseFit's AI-powered guidance.
        </p>
        <Link
          to="/practice"
          className="inline-flex items-center px-8 py-3 text-lg font-semibold bg-white text-accent-600 rounded-lg hover:bg-gray-100 transition"
        >
          Start Your Practice Now
          <ChevronRight size={20} className="ml-2" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
