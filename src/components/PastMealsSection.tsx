'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Upload, Calendar, Apple } from 'lucide-react';
import { mockMeals, getMealsForDate, getMonthlySummary } from '../data/mockMeals';
import NutritionTrendsChart from './NutritionTrendsChart';

interface MealEntry {
  id: string;
  date: Date;
  image: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  healthScore: number;
  aiAnalysis: string;
  tags: string[];
}

interface DailySummary {
  date: string;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  meals: MealEntry[];
  healthScore: number;
}

export default function PastMealsSection() {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 0, 15)); // January 15, 2024
  const [viewMode, setViewMode] = useState<'daily' | 'monthly'>('daily');
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Use mock data
  const [meals, setMeals] = useState<MealEntry[]>(mockMeals);

  const handlePhotoUpload = async (file: File) => {
    setIsUploading(true);
    
    // Simulate file upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      analyzeMeal(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  const analyzeMeal = async (imageUrl: string) => {
    setIsUploading(false);
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const newMeal: MealEntry = {
      id: Date.now().toString(),
      date: new Date(),
      image: imageUrl,
      name: 'AI Analyzed Meal',
      calories: Math.floor(Math.random() * 400) + 200,
      protein: Math.floor(Math.random() * 30) + 15,
      carbs: Math.floor(Math.random() * 50) + 20,
      fat: Math.floor(Math.random() * 20) + 8,
      fiber: Math.floor(Math.random() * 10) + 3,
      healthScore: Math.floor(Math.random() * 30) + 70,
      aiAnalysis: 'AI analysis complete! This meal appears to be well-balanced with good nutritional content.',
      tags: ['AI-Analyzed', 'Balanced']
    };
    
    setMeals(prev => [newMeal, ...prev]);
    setIsAnalyzing(false);
  };

  const dailyMeals = getMealsForDate(selectedDate);
  const monthlySummary = getMonthlySummary(selectedDate);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Apple className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold">Past Meals</h2>
              <p className="text-white/80 text-sm">Track your nutrition with AI analysis</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('daily')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'daily' 
                  ? 'bg-white text-green-600' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Daily
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('monthly')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                viewMode === 'monthly' 
                  ? 'bg-white text-green-600' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Monthly
            </motion.button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Upload Section */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Your Meal</h3>
              <p className="text-gray-600 mb-4">Take a photo of your meal for AI nutrition analysis</p>
              
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading || isAnalyzing}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium disabled:opacity-50"
                >
                  {isUploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Uploading...</span>
                    </>
                  ) : isAnalyzing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      <span>Upload Photo</span>
                    </>
                  )}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-xl font-medium"
                >
                  <Camera className="w-4 h-4" />
                  <span>Take Photo</span>
                </motion.button>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handlePhotoUpload(file);
                }}
                className="hidden"
              />
            </div>
          </div>
        </div>

        {/* Date Selector */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <Calendar className="w-5 h-5 text-gray-600" />
            <input
              type="date"
              value={selectedDate.toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {viewMode === 'daily' ? (
            <motion.div
              key="daily"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Daily Summary */}
              {dailyMeals.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Summary</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{dailyMeals.reduce((sum, meal) => sum + meal.calories, 0)}</div>
                      <div className="text-sm text-gray-600">Calories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{dailyMeals.reduce((sum, meal) => sum + meal.protein, 0)}g</div>
                      <div className="text-sm text-gray-600">Protein</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{dailyMeals.reduce((sum, meal) => sum + meal.carbs, 0)}g</div>
                      <div className="text-sm text-gray-600">Carbs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{dailyMeals.reduce((sum, meal) => sum + meal.fat, 0)}g</div>
                      <div className="text-sm text-gray-600">Fat</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Daily Meals */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Today's Meals</h3>
                {dailyMeals.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Apple className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>No meals recorded for this date</p>
                    <p className="text-sm">Upload a photo to get started!</p>
                  </div>
                ) : (
                  dailyMeals.map((meal) => (
                    <motion.div
                      key={meal.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-50 rounded-xl p-4"
                    >
                      <div className="flex items-start space-x-4">
                        <img 
                          src={meal.image} 
                          alt={meal.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{meal.name}</h4>
                            <div className="flex items-center space-x-2">
                              <div className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                                {meal.healthScore}% Health
                              </div>
                              <span className="text-sm text-gray-500">
                                {meal.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-4 gap-2 mb-3">
                            <div className="text-center">
                              <div className="text-sm font-medium text-orange-600">{meal.calories}</div>
                              <div className="text-xs text-gray-500">Cal</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-medium text-blue-600">{meal.protein}g</div>
                              <div className="text-xs text-gray-500">Protein</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-medium text-green-600">{meal.carbs}g</div>
                              <div className="text-xs text-gray-500">Carbs</div>
                            </div>
                            <div className="text-center">
                              <div className="text-sm font-medium text-purple-600">{meal.fat}g</div>
                              <div className="text-xs text-gray-500">Fat</div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-2">
                            {meal.tags.map((tag, index) => (
                              <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <p className="text-sm text-gray-600">{meal.aiAnalysis}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="monthly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Monthly Summary */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Overview</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{monthlySummary.totalMeals}</div>
                    <div className="text-sm text-gray-600">Total Meals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{monthlySummary.totalCalories}</div>
                    <div className="text-sm text-gray-600">Total Calories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{monthlySummary.totalProtein}g</div>
                    <div className="text-sm text-gray-600">Total Protein</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{monthlySummary.avgHealthScore}%</div>
                    <div className="text-sm text-gray-600">Avg Health Score</div>
                  </div>
                </div>
                
                {/* Nutrition Trends Chart */}
                <NutritionTrendsChart />
              </div>

              {/* Monthly Meals Grid */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">All Meals This Month</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {monthlySummary.meals.map((meal) => (
                    <motion.div
                      key={meal.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow"
                    >
                      <img 
                        src={meal.image} 
                        alt={meal.name}
                        className="w-full h-32 rounded-lg object-cover mb-3"
                      />
                      <h4 className="font-semibold text-gray-900 mb-2">{meal.name}</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">{meal.date.toLocaleDateString()}</span>
                        <div className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {meal.healthScore}%
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        {meal.calories} cal • {meal.protein}g protein
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 