"use client";

import { Sparkles, Star, Brain } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-cyan-600 to-emerald-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/30 mb-8">
          <Brain className="w-4 h-4 mr-2" />
          <span>Join 50,000+ AI-powered food lovers</span>
        </div>

        {/* Main Content */}
        <div className="space-y-8 mb-12">
          <h2 className="text-5xl lg:text-7xl font-poppins font-bold text-white leading-tight">
            Ready to Experience
            <span className="block">AI-Powered Dining?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stop switching between apps. Get intelligent restaurant recommendations from Grab, Google Maps, Instagram, TikTok, and more - all powered by advanced AI.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Brain className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">AI Personalization</h3>
            <p className="text-white/80 text-sm">Machine learning adapts to your preferences</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Star className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Intelligent Matching</h3>
            <p className="text-white/80 text-sm">AI-powered celebrity and trend detection</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Sparkles className="w-8 h-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Smart Aggregation</h3>
            <p className="text-white/80 text-sm">AI monitors 5+ platforms intelligently</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-white text-emerald-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            <div className="flex items-center justify-center">
              <Brain className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              <span>Start AI Discovery</span>
            </div>
          </button>
          <button className="group bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center">
            <span>Watch AI Demo</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <span>AI-powered free plan</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <span>Instant AI access</span>
          </div>
        </div>
      </div>
    </section>
  );
} 