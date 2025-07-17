"use client";

import { useState } from 'react';
import { Target, Clock, MapPin } from "lucide-react";
import LoginModal from './LoginModal';

export default function CTASection() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/30 mb-8">
          <Clock className="w-4 h-4 mr-2" />
          <span>Save time deciding what to eat</span>
        </div>

        {/* Main Content */}
        <div className="space-y-8 mb-12">
          <h2 className="text-5xl lg:text-7xl font-poppins font-bold text-white leading-tight">
            Ready to Stop
            <span className="block">Wasting Time?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get personalized restaurant recommendations based on your dietary preferences, fitness goals, and budget. Walk to your perfect meal in minutes.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Target className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Personalized Goals</h3>
            <p className="text-white/80 text-sm">Match your dietary and fitness needs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Clock className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Quick Decisions</h3>
            <p className="text-white/80 text-sm">Get recommendations in seconds</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Walkable Locations</h3>
            <p className="text-white/80 text-sm">Fresh meals within 1-3 minutes</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setShowLogin(true)}
            className="group bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <div className="flex items-center justify-center">
              <Target className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              <span>Start Your Journey</span>
            </div>
          </button>
          <a href="#how-it-works" className="group bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center">
            <span>See How It Works</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <span>Free to get started</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <span>Instant access</span>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </section>
  );
} 