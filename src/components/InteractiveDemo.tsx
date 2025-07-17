'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Star, 
  Heart,
  User,
  TrendingUp,
  Instagram,
  Globe,
  Smartphone
} from 'lucide-react';

const DEMO_RESTAURANTS = [
  {
    id: 1,
    name: "Burnt Ends",
    cuisine: "Modern Australian BBQ",
    location: "Dempsey Hill, Singapore",
    rating: 4.8,
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
    trending: true,
    celebrityVisits: ["Gordon Ramsay", "David Chang"],
    platforms: ["Instagram", "TikTok", "Google Maps"]
  },
  {
    id: 2,
    name: "Odette",
    cuisine: "French Fine Dining",
    location: "National Gallery Singapore",
    rating: 4.9,
    priceRange: "$$$$",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    trending: true,
    celebrityVisits: ["Wolfgang Puck", "Gordon Ramsay"],
    platforms: ["Instagram", "Grab Dine-Out"]
  },
  {
    id: 3,
    name: "Labyrinth",
    cuisine: "Modern Singaporean",
    location: "Esplanade Mall",
    rating: 4.7,
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    trending: false,
    celebrityVisits: ["David Chang"],
    platforms: ["TikTok", "Instagram", "Google Maps"]
  }
];

const DEMO_STEPS = [
  {
    title: "Search & Discover",
    description: "Find restaurants across multiple platforms",
    icon: Search,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Celebrity Insights",
    description: "See where your favorite chefs dine",
    icon: User,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Book & Enjoy",
    description: "Reserve your table with one click",
    icon: Heart,
    color: "from-pink-500 to-purple-500"
  }
];

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              See 34Dish
            </span>
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              in Action
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience how 34Dish brings together the best restaurants from multiple platforms with celebrity insights
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Interface */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-6 shadow-xl"
          >
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search restaurants, cuisines, or locations..."
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
                  Search
                </motion.button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
              >
                All Cuisines
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                All Prices
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium flex items-center space-x-1"
              >
                <Heart className="h-3 w-3" />
                <span>Favorites</span>
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
                              {restaurant.trending && (
                                <TrendingUp className="h-4 w-4 text-red-500" />
                              )}
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
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-500">{restaurant.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs font-medium">{restaurant.rating}</span>
                            <span className="text-xs text-gray-500">{restaurant.priceRange}</span>
                          </div>
                          <div className="flex space-x-1 mt-2">
                            {restaurant.platforms.map(platform => (
                              <span key={platform} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {platform}
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
          </motion.div>

          {/* Features Showcase */}
          <div className="space-y-8">
            {/* Animated Steps */}
            <div className="space-y-6">
              {DEMO_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center space-x-4 p-4 rounded-lg ${
                    currentStep === index ? 'bg-gradient-to-r ' + step.color + ' text-white' : 'bg-gray-50'
                  } transition-all duration-500`}
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
            </div>

            {/* Platform Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Integration</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                >
                  <Instagram className="h-5 w-5 text-pink-500" />
                  <span className="text-sm font-medium">Instagram</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                >
                  <Globe className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">Google Maps</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                >
                  <Smartphone className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Grab Dine-Out</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                >
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium">TikTok</span>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <motion.a
                href="/app"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Try 34Dish Now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 