'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Smartphone, Heart, Star } from 'lucide-react';

export default function FloatingDemoButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Demo Modal */}
      <AnimatePresence>
        {isOpen && (
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
              onClick={() => setIsOpen(false)}
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
                  <h3 className="text-xl font-bold">34Dish Demo</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-white/90 mt-2">Experience the app in action</p>
              </div>

              {/* Demo Content */}
              <div className="p-6 space-y-4">
                {/* Search Demo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Smartphone className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">Multi-Platform Search</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Search across Grab, Google Maps, Instagram, and TikTok simultaneously
                  </p>
                </motion.div>

                {/* Celebrity Demo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium text-gray-900">Celebrity Insights</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Discover restaurants visited by Gordon Ramsay, David Chang, and more
                  </p>
                </motion.div>

                {/* Personalization Demo */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-gray-900">Personalized Matches</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Get recommendations based on your cuisine preferences and budget
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
                    Try Full Demo
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 