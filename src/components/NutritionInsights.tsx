'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp, Lightbulb, Zap, Heart, Scale } from 'lucide-react';
import { mockInsights, mockRecommendations, getNutritionScore } from '../data/mockMeals';

export default function NutritionInsights() {
  // Use mock data
  const insights = mockInsights;
  const recommendations = mockRecommendations;
  const nutritionScore = getNutritionScore();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'protein': return Target;
      case 'carbs': return Zap;
      case 'fats': return Heart;
      case 'fiber': return Scale;
      case 'vitamins': return Brain;
      default: return Lightbulb;
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Insights */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold">AI Nutrition Insights</h2>
              <p className="text-white/80 text-sm">Personalized analysis of your eating patterns</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid gap-4">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${insight.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <insight.icon className={`w-6 h-6 ${insight.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                    {insight.action && (
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        {insight.action}
                      </button>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{insight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold">Personalized Recommendations</h2>
              <p className="text-white/80 text-sm">AI-suggested improvements for your nutrition</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      {React.createElement(getCategoryIcon(rec.category), { className: "w-5 h-5 text-blue-600" })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                      <p className="text-gray-600 text-sm">{rec.description}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(rec.difficulty)}`}>
                    {rec.difficulty}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Why this matters:</h4>
                    <p className="text-sm text-gray-600">{rec.reasoning}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Expected impact:</h4>
                    <p className="text-sm text-gray-600">{rec.impact}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Add to Goals
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
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
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold">Nutrition Score</h2>
              <p className="text-white/80 text-sm">Your overall nutrition health rating</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="text-center">
            <div className="relative inline-block">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.85)}`}
                  className="text-green-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">{nutritionScore.overall}%</div>
              <div className="text-sm text-gray-600">Excellent</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-green-600">{nutritionScore.protein}%</div>
                <div className="text-xs text-gray-600">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-orange-600">{nutritionScore.fiber}%</div>
                <div className="text-xs text-gray-600">Fiber</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-600">{nutritionScore.balance}%</div>
                <div className="text-xs text-gray-600">Balance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 