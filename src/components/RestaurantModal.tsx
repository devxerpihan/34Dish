'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MapPin, Clock, DollarSign, Heart, Car, Users, Instagram, MessageCircle, ExternalLink, Phone, Globe } from 'lucide-react';

interface RestaurantModalProps {
  restaurant: any;
  onClose: () => void;
}

export default function RestaurantModal({ restaurant, onClose }: RestaurantModalProps) {
  const platformColors = {
    grab: 'bg-green-100 text-green-700',
    google: 'bg-blue-100 text-blue-700',
    instagram: 'bg-pink-100 text-pink-700',
    tiktok: 'bg-black text-white'
  };

  const platformIcons = {
    grab: '🚗',
    google: '🗺️',
    instagram: '📷',
    tiktok: '🎵'
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative h-64 bg-gradient-to-br from-orange-500 to-red-500">
            <img 
              src={restaurant.image} 
              alt={restaurant.name}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Restaurant Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">{restaurant.name}</h2>
                  <p className="text-white/90 text-lg">{restaurant.cuisine}</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-white/80" />
                      <span className="text-white/90">{restaurant.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-white/80" />
                      <span className="text-white/90">{restaurant.price}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {restaurant.healthScore}% Health Score
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed">{restaurant.description}</p>
                </div>

                {/* Platform Integration */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Available on Platforms</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {restaurant.platforms.map((platform: string) => (
                      <div key={platform} className={`flex items-center space-x-3 p-3 rounded-xl ${platformColors[platform as keyof typeof platformColors]}`}>
                        <span className="text-lg">{platformIcons[platform as keyof typeof platformIcons]}</span>
                        <span className="font-medium capitalize">{platform}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Proof */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Proof</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {restaurant.socialProof.instagram && (
                      <div className="bg-pink-50 rounded-xl p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Instagram className="w-5 h-5 text-pink-600" />
                          <span className="font-semibold text-gray-900">Instagram</span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">{restaurant.socialProof.instagram.followers} followers</p>
                          <p className="text-sm text-gray-600">{restaurant.socialProof.instagram.posts} food posts</p>
                        </div>
                      </div>
                    )}
                    {restaurant.socialProof.tiktok && (
                      <div className="bg-gray-900 text-white rounded-xl p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-lg">🎵</span>
                          <span className="font-semibold">TikTok</span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-300">{restaurant.socialProof.tiktok.views} views</p>
                          <p className="text-sm text-gray-300">{restaurant.socialProof.tiktok.likes} likes</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Health & Nutrition */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Health & Nutrition</h3>
                  <div className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Heart className="w-6 h-6 text-green-600" />
                      <span className="text-lg font-semibold text-gray-900">Health Score: {restaurant.healthScore}%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Fresh Ingredients</p>
                        <p className="font-medium text-gray-900">✓ Organic & Local</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Nutritional Balance</p>
                        <p className="font-medium text-gray-900">✓ Well-balanced</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Dietary Options</p>
                        <p className="font-medium text-gray-900">✓ Multiple choices</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Portion Control</p>
                        <p className="font-medium text-gray-900">✓ Healthy portions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2"
                    >
                      <Heart className="w-5 h-5" />
                      <span>Save to Favorites</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2"
                    >
                      <Car className="w-5 h-5" />
                      <span>Book Ride</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Restaurant</span>
                    </motion.button>
                  </div>
                </div>

                {/* Grab Integration */}
                {restaurant.grabIntegration && (
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Grab Integration</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Ride Available</span>
                        <span className="text-sm font-medium text-green-600">✓ Yes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Estimated Time</span>
                        <span className="text-sm font-medium text-gray-900">{restaurant.grabIntegration.estimatedRideTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Ride Price</span>
                        <span className="text-sm font-medium text-gray-900">{restaurant.grabIntegration.ridePrice}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Restaurant Details */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Restaurant Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Open until 10:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Usually busy 6-8 PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Free WiFi available</span>
                    </div>
                  </div>
                </div>

                {/* Popular Dishes */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Dishes</h3>
                  <div className="space-y-3">
                    {['Buddha Bowl', 'Protein Power Plate', 'Green Goddess Salad'].map((dish, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-900">{dish}</span>
                        <span className="text-sm text-gray-500">SGD 12-18</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 