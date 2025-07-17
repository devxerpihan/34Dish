'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, AlertTriangle, CheckCircle, Lightbulb, Clock, Heart, TrendingUp, Scale } from 'lucide-react';
import { mockInsights, mockRecommendations, getNutritionScore } from '../data/mockMeals';

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'protein': return Target;
    case 'fiber': return AlertTriangle;
    case 'omega3': return Heart;
    case 'antioxidants': return Lightbulb;
    default: return Target;
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy': return 'bg-green-100 text-green-700';
    case 'Medium': return 'bg-yellow-100 text-yellow-700';
    case 'Hard': return 'bg-red-100 text-red-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export default function NutritionInsights() {
  const nutritionScore = getNutritionScore();
  
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Quick Insights */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-sm sm:text-base">AI Nutrition Insights</h2>
              <p className="text-white/80 text-xs sm:text-sm">Personalized recommendations based on your eating patterns</p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid gap-3 sm:gap-4">
            {mockInsights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${insight.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <insight.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${insight.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{insight.title}</h3>
                    {insight.action && (
                      <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium mt-1 sm:mt-0">
                        {insight.action}
                      </button>
                    )}
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{insight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-sm sm:text-base">Personalized Recommendations</h2>
              <p className="text-white/80 text-xs sm:text-sm">AI-suggested improvements for your nutrition</p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid gap-4 sm:gap-6">
            {mockRecommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      {React.createElement(getCategoryIcon(rec.category), { className: "w-4 h-4 sm:w-5 sm:h-5 text-blue-600" })}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{rec.title}</h3>
                      <p className="text-gray-700 text-xs sm:text-sm">{rec.description}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(rec.difficulty)}`}>
                    {rec.difficulty}
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1">Why this matters:</h4>
                    <p className="text-xs sm:text-sm text-gray-700">{rec.reasoning}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-1">Expected impact:</h4>
                    <p className="text-xs sm:text-sm text-gray-700">{rec.impact}</p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Add to Goals
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Nutrition Score */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold text-sm sm:text-base">Nutrition Score</h2>
              <p className="text-white/80 text-xs sm:text-sm">Your overall nutrition health rating</p>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="text-center">
            <div className="relative inline-block">
              <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  strokeDashoffset={`${2 * Math.PI * 42 * (1 - 0.85)}`}
                  className="text-green-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{nutritionScore.overall}%</div>
                  <div className="text-xs sm:text-sm text-gray-700">Excellent</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center">
                <div className="text-base sm:text-lg font-semibold text-green-600">{nutritionScore.protein}%</div>
                <div className="text-xs text-gray-700">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-semibold text-orange-600">{nutritionScore.fiber}%</div>
                <div className="text-xs text-gray-700">Fiber</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-semibold text-blue-600">{nutritionScore.balance}%</div>
                <div className="text-xs text-gray-700">Balance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 