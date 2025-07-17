"use client";

import { useState, useEffect } from 'react';
import { Search, ArrowRight, Heart, Zap, MapPin, Star, TrendingUp, Instagram, Globe, Smartphone, Play, X, Clock, Target, Users } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const DEMO_RESTAURANTS = [
  {
    id: 1,
    name: "Protein Bowl Kitchen",
    cuisine: "Healthy & Fitness",
    location: "1-minute walk",
    rating: 4.8,
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    trending: true,
    dietaryTags: ["High-Protein", "Low-Calorie", "Fitness"],
    platforms: ["Grab", "Google Maps"],
    waitTime: "5 min"
  },
  {
    id: 2,
    name: "Green Leaf Vegan",
    cuisine: "Plant-Based",
    location: "3-minute walk",
    rating: 4.7,
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    trending: false,
    dietaryTags: ["Vegan", "Halal", "Low-Calorie"],
    platforms: ["Instagram", "Grab"],
    waitTime: "8 min"
  },
  {
    id: 3,
    name: "Fit Fuel Express",
    cuisine: "Health & Wellness",
    location: "2-minute walk",
    rating: 4.6,
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
    trending: true,
    dietaryTags: ["High-Protein", "Fitness", "Quick"],
    platforms: ["TikTok", "Google Maps"],
    waitTime: "3 min"
  }
];

const DEMO_STEPS = [
  {
    title: "Set Your Goals",
    description: "Tell us your dietary preferences and fitness goals",
    icon: Target,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Get Matched",
    description: "We find restaurants that fit your taste and budget",
    icon: Heart,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Enjoy Your Meal",
    description: "Walk to your recommended restaurant in minutes",
    icon: Clock,
    color: "from-pink-500 to-purple-500"
  }
];

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % DEMO_STEPS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    setShowResults(true);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-full text-sm font-medium border border-orange-200/50 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Clock className="w-4 h-4 mr-2 text-orange-500" />
              </motion.div>
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-semibold">
                Save time deciding what to eat
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-6xl lg:text-7xl font-poppins font-bold leading-tight">
                <motion.span 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
                >
                  Stop Wasting Time
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent"
                >
                  Deciding What to Eat
                </motion.span>
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Get personalized restaurant recommendations based on your dietary preferences, fitness goals, and budget. 
                Walk to your perfect meal in minutes, not hours of searching.
              </motion.p>
            </motion.div>

            {/* Problem Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg"
            >
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-orange-500" />
                The Problem
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>86% of people struggle with deciding what to eat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Most rely on delivery apps and stick to favorites</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>86% would find a personalized service valuable</span>
                </div>
              </div>
            </motion.div>

            {/* Animated Steps */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-4"
            >
              {DEMO_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                    currentStep === index ? 'bg-gradient-to-r ' + step.color + ' text-white shadow-lg scale-105' : 'bg-white/70 backdrop-blur-sm'
                  }`}
                >
                  <motion.div
                    animate={{ 
                      scale: currentStep === index ? 1.1 : 1,
                      rotate: currentStep === index ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-full ${
                      currentStep === index ? 'bg-white/20' : 'bg-orange-100'
                    }`}
                  >
                    <step.icon className={`h-6 w-6 ${
                      currentStep === index ? 'text-white' : 'text-orange-600'
                    }`} />
                  </motion.div>
                  <div>
                    <h3 className={`font-semibold ${
                      currentStep === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm ${
                      currentStep === index ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/app"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <div className="relative flex items-center justify-center">
                  <Target className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Start Your Journey
                </div>
              </motion.a>
              <motion.button
                onClick={() => setIsDemoModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/80 backdrop-blur-sm border-2 border-orange-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-orange-400 hover:bg-white transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                See How It Works
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Interactive Demo */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-orange-200/50">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for healthy meals near you..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white px-4 py-1.5 rounded-md text-sm font-medium"
                  >
                    Find
                  </motion.button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                >
                  High-Protein
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                >
                  Low-Calorie
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  Vegan
                </motion.button>
              </div>

              {/* Results */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    {DEMO_RESTAURANTS.map((restaurant, index) => (
                      <motion.div
                        key={restaurant.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-white rounded-lg p-4 shadow-md cursor-pointer transition-all ${
                          selectedRestaurant === restaurant.id ? 'ring-2 ring-orange-500' : ''
                        }`}
                        onClick={() => setSelectedRestaurant(restaurant.id)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex space-x-4">
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                  {restaurant.location}
                                </span>
                                <motion.button
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFavorite(restaurant.id);
                                  }}
                                  className={`p-1 rounded-full ${
                                    favorites.includes(restaurant.id)
                                      ? 'text-red-500'
                                      : 'text-gray-400 hover:text-red-500'
                                  }`}
                                >
                                  <Heart className="h-4 w-4" />
                                </motion.button>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span className="text-xs font-medium">{restaurant.rating}</span>
                              <span className="text-xs text-gray-500">{restaurant.priceRange}</span>
                              <span className="text-xs text-gray-500">• {restaurant.waitTime}</span>
                            </div>
                            <div className="flex space-x-1 mt-2">
                              {restaurant.dietaryTags.map(tag => (
                                <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Platform Integration */}
              {!showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personalized for You</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                    >
                      <Target className="h-5 w-5 text-orange-600" />
                      <span className="text-sm font-medium">Fitness Goals</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                    >
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="text-sm font-medium">Dietary Needs</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                    >
                      <Clock className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium">Quick Access</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                    >
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <span className="text-sm font-medium">Nearby</span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-red-300/30 rounded-full blur-xl"
            ></motion.div>
            <motion.div 
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsDemoModalOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">How 34Dish Works</h3>
                  <button
                    onClick={() => setIsDemoModalOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-white/90 mt-2">From decision to delicious meal in minutes</p>
              </div>

              {/* Demo Content */}
              <div className="p-6 space-y-4">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">Set Your Preferences</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Tell us your dietary needs, fitness goals, and budget
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Search className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-gray-900">Get Matched</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    We find restaurants that match your preferences perfectly
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-900">Walk & Enjoy</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Walk to your recommended restaurant in 1-3 minutes
                  </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="pt-4"
                >
                  <a
                    href="/app"
                    className="block w-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Try It Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 