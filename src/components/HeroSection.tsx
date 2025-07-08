"use client";

import { Search, ArrowRight, MapPin, Star, Utensils, Heart, Zap } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full text-sm font-medium border border-orange-200/50 shadow-lg">
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-semibold">
                Loved by food enthusiasts
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-poppins font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Discover Your Perfect
                </span>
                <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                  Dining Experience
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                34Dish brings together the best restaurant recommendations from Grab, Google Maps, Instagram, TikTok, and more. 
                Find amazing places loved by celebrities and food lovers just like you.
              </p>
            </div>

            {/* How it works preview */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-orange-500" />
                How it works
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Tell us what you love to eat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">We find the best spots for you</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Enjoy amazing food experiences</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center">
                  <Search className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Start Discovering
                </div>
              </button>
              <button className="group bg-white/80 backdrop-blur-sm border-2 border-orange-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-orange-400 hover:bg-white transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Content - Food Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              {/* Top Left - Pasta */}
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=400&fit=crop&crop=center"
                    alt="Delicious pasta dish"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">Fresh Pasta</p>
                  <p className="text-xs opacity-90">Italian Kitchen</p>
                </div>
              </div>

              {/* Top Right - Sushi */}
              <div className="relative group mt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop&crop=center"
                    alt="Beautiful sushi platter"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">Premium Sushi</p>
                  <p className="text-xs opacity-90">Sakura House</p>
                </div>
              </div>

              {/* Bottom Left - Burger */}
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop&crop=center"
                    alt="Juicy burger"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">Gourmet Burger</p>
                  <p className="text-xs opacity-90">The Burger Joint</p>
                </div>
              </div>

              {/* Bottom Right - Pizza */}
              <div className="relative group mt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&crop=center"
                    alt="Fresh pizza"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">Artisan Pizza</p>
                  <p className="text-xs opacity-90">Pizza Palace</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-red-300/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 