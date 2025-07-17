'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Settings, Heart, MapPin, Star, Car, Sparkles, CheckCircle, Search, TrendingUp, LogOut, Apple, Brain, LucideIcon, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PreferencesModal from './PreferencesModal';
import RestaurantModal from './RestaurantModal';
import PastMealsSection from './PastMealsSection';
import NutritionInsights from './NutritionInsights';
import Image from 'next/image';

// Import the hardcoded user for fallback
const HARDCODED_USER = {
  preferences: {
    dietaryPreferences: ['High-Protein', 'Low-Calorie', 'Fitness'],
    fitnessGoals: ['Muscle Building', 'Weight Loss'],
    priceRange: { min: 15, max: 50, currency: 'SGD' },
    location: { address: 'Singapore, Central Business District', latitude: 1.3521, longitude: 103.8198, radius: 2 },
    healthFocus: ['Fresh Ingredients', 'Quick Meals', 'Budget-Friendly'],
    platformPreferences: { tiktok: true, instagram: true, googleMaps: true, grab: true },
    socialMediaData: {
      tiktok: { following: [], hashtags: [], trendingTopics: [] },
      instagram: { following: [], hashtags: [], savedPosts: [] },
      googleMaps: { savedPlaces: [], reviews: [], visitedPlaces: [] }
    }
  }
};

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isLoading?: boolean;
}

interface SearchStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'completed' | 'error';
  icon: LucideIcon;
}

interface RestaurantRecommendation {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  distance: string;
  price: string;
  healthScore: number;
  image: string;
  description: string;
  platforms: string[];
  socialProof: {
    instagram: { followers: string; posts: string };
    tiktok: { views: string; likes: string };
  };
  grabIntegration: {
    rideAvailable: boolean;
    estimatedRideTime: string;
    ridePrice: string;
  };
}

export default function Dashboard() {
  const { /* user, */ preferences, updatePreferences, logout } = useAuth();
  const [showPreferences, setShowPreferences] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantRecommendation | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'chat' | 'meals' | 'insights'>('chat');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm your 34Dish AI assistant. I can help you find the perfect dining spots, track your meals, and provide nutrition insights. What would you like to do today?",
      timestamp: new Date()
    }
  ]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchSteps, setSearchSteps] = useState<SearchStep[]>([]);
  const [recommendations, setRecommendations] = useState<RestaurantRecommendation[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsSearching(true);

    // Initialize search steps
    const steps: SearchStep[] = [
      {
        id: '1',
        title: 'Analyzing Preferences',
        description: 'Processing your dietary needs and preferences',
        status: 'active',
        icon: Settings
      },
      {
        id: '2',
        title: 'Searching Platforms',
        description: 'Scanning Grab Dine-Out, Google Maps, Instagram, and TikTok',
        status: 'pending',
        icon: Search
      },
      {
        id: '3',
        title: 'Filtering by Distance',
        description: 'Finding restaurants within walking distance',
        status: 'pending',
        icon: MapPin
      },
      {
        id: '4',
        title: 'Analyzing Reviews',
        description: 'Checking ratings and social proof',
        status: 'pending',
        icon: Star
      },
      {
        id: '5',
        title: 'Generating Recommendations',
        description: 'Creating personalized suggestions',
        status: 'pending',
        icon: Sparkles
      }
    ];

    setSearchSteps(steps);

    // Simulate AI processing
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSearchSteps(prev => prev.map((step, index) => ({
        ...step,
        status: index < i + 1 ? 'completed' : index === i + 1 ? 'active' : 'pending'
      })));
    }

    // Generate recommendations
    const mockRecommendations = [
      {
        id: 1,
        name: "Healthy Bowl Co.",
        cuisine: "Asian Fusion",
        rating: 4.8,
        distance: "2 min walk",
        price: "$$",
        healthScore: 95,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
        description: "Fresh grain bowls with organic ingredients",
        platforms: ["grab", "google", "instagram"],
        socialProof: {
          instagram: { followers: "12.5K", posts: "156" },
          tiktok: { views: "2.1M", likes: "89K" }
        },
        grabIntegration: {
          rideAvailable: true,
          estimatedRideTime: "3 min",
          ridePrice: "$8-12"
        }
      },
      {
        id: 2,
        name: "Green Leaf Bistro",
        cuisine: "Mediterranean",
        rating: 4.6,
        distance: "1 min walk",
        price: "$$$",
        healthScore: 92,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
        description: "Fresh Mediterranean cuisine with local ingredients",
        platforms: ["grab", "google", "tiktok"],
        socialProof: {
          instagram: { followers: "8.9K", posts: "89" },
          tiktok: { views: "1.2M", likes: "45K" }
        },
        grabIntegration: {
          rideAvailable: true,
          estimatedRideTime: "2 min",
          ridePrice: "$6-10"
        }
      },
      {
        id: 3,
        name: "Protein Power Kitchen",
        cuisine: "Fitness Food",
        rating: 4.7,
        distance: "3 min walk",
        price: "$$",
        healthScore: 98,
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
        description: "High-protein meals for fitness enthusiasts",
        platforms: ["grab", "instagram"],
        socialProof: {
          instagram: { followers: "15.2K", posts: "234" },
          tiktok: { views: "3.4M", likes: "120K" }
        },
        grabIntegration: {
          rideAvailable: true,
          estimatedRideTime: "4 min",
          ridePrice: "$10-15"
        }
      }
    ];

    setRecommendations(mockRecommendations);
    setIsSearching(false);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      content: `I found ${mockRecommendations.length} perfect matches for you! Here are my top recommendations based on your preferences.`,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">34</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">34Dish AI</h1>
                <p className="text-xs sm:text-sm text-gray-700">Your Personal Dining Assistant</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-semibold text-gray-900">34Dish AI</h1>
              </div>
            </div>
            
            {/* Desktop Header Actions */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPreferences(true)}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span className="text-sm font-medium">Preferences</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-600">Logout</span>
              </motion.button>
              
              <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700 font-medium">AI Online</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-200"
              >
                <div className="flex flex-col space-y-3 pt-4">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowPreferences(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">Preferences</span>
                  </motion.button>
                  
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 px-4 py-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-red-600">Logout</span>
                  </motion.button>
                  
                  <div className="flex items-center space-x-3 px-4 py-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-700 font-medium">AI Online</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Tab Navigation */}
        <div className="flex items-center space-x-1 bg-gray-100 rounded-xl p-1 mb-6 sm:mb-8 overflow-x-auto scrollbar-hide">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('chat')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'chat' 
                ? 'bg-white text-orange-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm sm:text-base">AI Assistant</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('meals')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'meals' 
                ? 'bg-white text-orange-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Apple className="w-4 h-4" />
            <span className="text-sm sm:text-base">Past Meals</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('insights')}
            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              activeTab === 'insights' 
                ? 'bg-white text-orange-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span className="text-sm sm:text-base">Nutrition Insights</span>
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'chat' && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {/* Chat Interface */}
              <div className="lg:col-span-2 order-1 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-white font-semibold text-sm sm:text-base">AI Assistant</h2>
                        <p className="text-white/80 text-xs sm:text-sm">Ready to help you find the perfect meal</p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="h-64 sm:h-80 lg:h-96 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <AnimatePresence>
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ${
                            message.type === 'user' 
                              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            <p className="text-xs sm:text-sm leading-relaxed">{message.content}</p>
                            <p className={`text-xs mt-1 sm:mt-2 ${
                              message.type === 'user' ? 'text-white/80' : 'text-gray-700'
                            }`}>
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Search Steps */}
                    {isSearching && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-blue-50 rounded-2xl p-4 sm:p-6"
                      >
                        <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <Search className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Searching for your perfect match...</h3>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                          {searchSteps.map((step) => (
                            <motion.div
                              key={step.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-center space-x-3"
                            >
                              <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                                step.status === 'completed' ? 'bg-green-500' :
                                step.status === 'active' ? 'bg-blue-500 animate-pulse' :
                                'bg-gray-300'
                              }`}>
                                {step.status === 'completed' ? (
                                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                ) : (
                                  <step.icon className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{step.title}</p>
                                <p className="text-xs text-gray-700 truncate">{step.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Input */}
                  <div className="border-t border-gray-200 p-3 sm:p-4">
                    <div className="flex space-x-2 sm:space-x-3">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Tell me what you're craving..."
                        className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                        disabled={isSearching}
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim() || isSearching}
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations Panel */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
                {/* User Preferences Summary */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Your Preferences</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-700">Dietary Focus</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-900">{preferences?.dietaryPreferences[0] || 'Not set'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-700">Budget Range</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-900">SGD {preferences?.priceRange.min}-{preferences?.priceRange.max}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-700">Walking Distance</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-900">{preferences?.location.radius} km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-700">Health Priority</span>
                      <span className="text-xs sm:text-sm font-medium text-gray-900">{preferences?.healthFocus[0] || 'Not set'}</span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                {recommendations.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">AI Recommendations</h3>
                    <div className="space-y-3 sm:space-y-4">
                      {recommendations.map((restaurant) => (
                        <motion.div
                          key={restaurant.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedRestaurant(restaurant)}
                          className="bg-gray-50 rounded-xl p-3 sm:p-4 cursor-pointer transition-all hover:shadow-md"
                        >
                          <div className="flex items-start space-x-3">
                            <Image 
                              src={restaurant.image} 
                              alt={restaurant.name}
                              width={48}
                              height={48}
                              className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 truncate text-sm sm:text-base">{restaurant.name}</h4>
                              <p className="text-xs sm:text-sm text-gray-600">{restaurant.cuisine}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="flex items-center space-x-1">
                                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                  <span className="text-xs text-gray-700">{restaurant.rating}</span>
                                </div>
                                <span className="text-xs text-gray-500">•</span>
                                <span className="text-xs text-gray-700">{restaurant.distance}</span>
                                <span className="text-xs text-gray-500">•</span>
                                <span className="text-xs text-gray-700">{restaurant.price}</span>
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                {restaurant.healthScore}% Health
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Quick Actions</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setInputMessage("Show me healthy options")}
                      className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">Find Healthy Options</span>
                      </div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setInputMessage("What's popular nearby?")}
                      className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">Popular Nearby</span>
                      </div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setInputMessage("I need a ride")}
                      className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Car className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">Book a Ride</span>
                      </div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab('meals')}
                      className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-xl transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Apple className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">Track My Meal</span>
                      </div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab('insights')}
                      className="w-full text-left p-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">View Insights</span>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'meals' && (
            <motion.div
              key="meals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <PastMealsSection />
            </motion.div>
          )}

          {activeTab === 'insights' && (
            <motion.div
              key="insights"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <NutritionInsights />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <PreferencesModal 
        isOpen={showPreferences} 
        onClose={() => setShowPreferences(false)}
        preferences={preferences || HARDCODED_USER.preferences}
        onSave={updatePreferences}
      />
      
      {selectedRestaurant && (
        <RestaurantModal 
          restaurant={selectedRestaurant} 
          onClose={() => setSelectedRestaurant(null)} 
        />
      )}
    </div>
  );
} 