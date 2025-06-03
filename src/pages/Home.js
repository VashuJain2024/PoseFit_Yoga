import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, BookOpen, Award, Shield } from 'lucide-react';
import howItsWork01 from '../utils/images/how-it-work01.jpg';
import howItsWork02 from '../utils/images/how-it-work02.jpg';
import howItsWork03 from '../utils/images/how-it-work03.jpg';
import backgroundImg from '../utils/images/yoga_with_camera2.jpg';
import ctaImage from '../utils/images/yoga_pose.png';
import main from '../utils/images/main.jpg';

const Home = () => {
  return (
    <div className="space-y-16 w-full">

      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden">
        <img src={main} alt="Yoga Background" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gray-500 bg-opacity-40"></div> {/* Subtle overlay for text readability */}

        <div className="relative px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 leading-tight drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
            Perfect Your Yoga <span className="text-[#ebebeb]">Posture</span> with AI
          </h1>
          <p className="text-xl md:text-2xl text-black max-w-3xl mb-10 font-light drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get real-time feedback on your yoga poses with our advanced AI-powered pose detection technology.
            Practice yoga with confidence from anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/practice"
              className="inline-flex items-center px-8 py-4 text-xl font-semibold rounded-lg bg-white text-black shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <Play size={24} className="mr-3" />
              Start Practicing
            </Link>
            <Link
              to="/poses"
              className="inline-flex items-center px-8 py-4 text-xl font-semibold rounded-lg border-2 border-[#ebebeb] bg-transparent text-white hover:bg-[#ebebeb] hover:text-black shadow-md transition transform hover:scale-105"
            >
              <BookOpen size={24} className="mr-3" />
              Explore Poses
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-[#F7F7F7] font-playfair">
        <div className="text-center mb-20 px-4">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How PoseFit Works
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-full mx-auto leading-relaxed font-light">
            Our advanced AI technology analyzes your posture in real-time to provide instant feedback and help you perfect your yoga practice.
          </p>
        </div>

        {/* Step 1 */}
        <div className="grid md:grid-cols-2 items-center gap-10 mb-20 px-4">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={howItsWork01} alt="Position Camera" className="w-full h-auto object-cover" />
          </div>
          <div>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3
              className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Position Your Camera
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              Set up your device so your full body is visible. Our AI needs to see your complete form to provide accurate feedback.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 items-center gap-10 mb-20 px-4 md:flex-row-reverse">
          <div>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3
              className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Select a Pose
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              Choose from our library of yoga poses. Each pose comes with clear instructions and a visual guide to help you get started.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={howItsWork02} alt="Select Pose" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 items-center gap-10 px-4">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img src={howItsWork03} alt="Real-Time Feedback" className="w-full h-auto object-cover" />
          </div>
          <div>
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3
              className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get Real-Time Feedback
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              Our AI will analyze your pose in real-time and provide instant feedback on your alignment, helping you make adjustments.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className="py-24 bg-cover bg-center rounded-2xl px-4 md:px-8"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          minHeight: '100vh',
        }}
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Benefits of PoseFit
          </h2>
          <p className="text-2xl text-gray-200 max-w-full mx-auto">
            Take your yoga practice to the next level with personalized guidance and feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="rounded-3xl bg-white/10 border border-white/30 backdrop-blur-lg p-8 text-white shadow-2xl hover:scale-[1.02] transition min-h-[220px]">
            <div className="flex items-start gap-6">
              <Shield className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-2xl font-semibold mb-3">Prevent Injuries</h3>
                <p className="text-gray-200">
                  Proper alignment is crucial for avoiding injuries. Our AI helps ensure you're practicing safely with real-time corrections.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-white/10 border border-white/30 backdrop-blur-lg p-8 text-white shadow-2xl hover:scale-[1.02] transition min-h-[220px]">
            <div className="flex items-start gap-6">
              <Award className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-2xl font-semibold mb-3">Perfect Your Technique</h3>
                <p className="text-gray-200">
                  Get detailed feedback on your form and technique, helping you achieve the correct alignment for maximum benefit.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-white/10 border border-white/30 backdrop-blur-lg p-8 text-white shadow-2xl hover:scale-[1.02] transition min-h-[220px]">
            <div className="flex items-start gap-6">
              <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Practice Anytime, Anywhere</h3>
                <p className="text-gray-200">
                  No need for in-person classes. Practice at your convenience with personalized guidance wherever you are.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl bg-white/10 border border-white/30 backdrop-blur-lg p-8 text-white shadow-2xl hover:scale-[1.02] transition min-h-[220px]">
            <div className="flex items-start gap-6">
              <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Track Your Progress</h3>
                <p className="text-gray-200">
                  Monitor your improvement over time with our progress tracking features. See how your form and flexibility evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ebebeb] rounded-xl p-12 shadow-lg max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Transform Your Yoga Practice?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-lg leading-relaxed font-light">
            Join thousands of yogis who have elevated their practice with PoseFit's AI-powered guidance, crafted for transformative results.
          </p>
          <Link
            to="/practice"
            className="group inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg 
             border border-black bg-white text-black 
             transition-all duration-300 ease-in-out 
             hover:bg-black hover:text-white"
            aria-label="Start Your Practice Now"
          >
            Start Your Practice Now
            <ChevronRight size={24} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-md md:max-w-lg rounded-lg overflow-hidden shadow-xl">
          <img
            src={ctaImage}
            alt="Yoga practice pose"
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;