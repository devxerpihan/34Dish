"use client";

import { Search, ArrowRight, MapPin, Star, Utensils, Brain, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-700/20 to-gray-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-600/20 to-slate-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-slate-800/10 to-gray-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-gray-300 px-6 py-3 rounded-full text-sm font-medium border border-gray-700/50 shadow-lg">
              <Brain className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                AI-Powered Recommendations
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-poppins font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Discover Your Perfect
                </span>
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Dining Experience
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                34Dish uses advanced AI to aggregate recommendations, reviews, and deals from Grab, Google Maps, Instagram, TikTok, and more. 
                Get personalized restaurant suggestions based on your preferences and celebrity visits.
              </p>
            </div>

            {/* How it works preview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="font-semibold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-emerald-400" />
                AI-Powered Process
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-semibold text-sm">1</span>
                  </div>
                  <span className="text-gray-300">AI learns your preferences & favorite celebrities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-semibold text-sm">2</span>
                  </div>
                  <span className="text-gray-300">Intelligent scanning of 5+ platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-semibold text-sm">3</span>
                  </div>
                  <span className="text-gray-300">AI-curated personalized suggestions</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center">
                  <Search className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Start Discovering
                </div>
              </button>
              <button className="group bg-white/10 backdrop-blur-sm border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Content - Live Demo */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50 p-8 max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-gray-800/50 rounded-3xl"></div>
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white text-lg">AI Recommendations</h3>
                  <div className="flex items-center text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>1.2km away</span>
                  </div>
                </div>

                {/* Platform Sources */}
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>AI Sources:</span>
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded flex items-center justify-center">
                      <span className="text-emerald-400 font-bold text-xs">G</span>
                    </div>
                    <div className="w-6 h-6 bg-cyan-500/20 rounded flex items-center justify-center">
                      <span className="text-cyan-400 font-bold text-xs">M</span>
                    </div>
                    <div className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center">
                      <span className="text-purple-400 font-bold text-xs">I</span>
                    </div>
                    <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                      <span className="text-gray-300 font-bold text-xs">T</span>
                    </div>
                  </div>
                </div>

                {/* Restaurant Cards */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-5 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        TR
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-lg mb-1">The Roof</h4>
                        <p className="text-sm text-gray-400 flex items-center mb-1">
                          <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
                          Visited by @gordonramsay
                        </p>
                        <p className="text-xs text-emerald-400 font-medium">4.8★ from 3 sources</p>
                      </div>
                      <div className="text-right">
                        <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                        <p className="text-xs text-gray-500 mt-1">AI Trending</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        LC
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-lg mb-1">Lucky Cat</h4>
                        <p className="text-sm text-gray-400 flex items-center mb-1">
                          <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
                          Featured on TikTok
                        </p>
                        <p className="text-xs text-cyan-400 font-medium">4.6★ from 5 sources</p>
                      </div>
                      <div className="text-right">
                        <Utensils className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                        <p className="text-xs text-gray-500 mt-1">AI Popular</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 