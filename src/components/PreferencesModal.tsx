'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, MapPin, DollarSign, Heart, Target, Activity, Instagram, Globe, TrendingUp, Settings, Plus, Trash2, CheckCircle, Sparkles } from 'lucide-react';

interface UserPreferences {
  // Basic Profile Information
  height?: number; // in cm
  weight?: number; // in kg
  birthDate?: string; // ISO date string
  gender?: 'male' | 'female' | 'other' | 'prefer-not-to-say';
  
  dietaryPreferences: string[];
  fitnessGoals: string[];
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  location: {
    address: string;
    latitude: number;
    longitude: number;
    radius: number; // in km
  };
  healthFocus: string[];
  platformPreferences: {
    tiktok: boolean;
    instagram: boolean;
    googleMaps: boolean;
    grab: boolean;
  };
  socialMediaData: {
    tiktok: {
      following: string[];
      hashtags: string[];
      trendingTopics: string[];
    };
    instagram: {
      following: string[];
      hashtags: string[];
      savedPosts: string[];
    };
    googleMaps: {
      savedPlaces: string[];
      reviews: string[];
      visitedPlaces: string[];
    };
  };
}

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: UserPreferences;
  onSave: (preferences: UserPreferences) => void;
}

const DIETARY_OPTIONS = [
  'High-Protein', 'Low-Calorie', 'Vegan', 'Vegetarian', 'Halal', 'Keto', 
  'Paleo', 'Gluten-Free', 'Dairy-Free', 'Low-Carb', 'Mediterranean', 'Clean Eating'
];

const FITNESS_GOALS = [
  'Muscle Building', 'Weight Loss', 'General Fitness', 'Athletic Performance', 
  'Recovery', 'Endurance', 'Strength Training', 'Maintenance'
];

const HEALTH_FOCUS = [
  'Organic', 'Whole Foods', 'Fresh Ingredients', 'Quick Meals', 'Budget-Friendly', 
  'Local Sourcing', 'Seasonal', 'Sustainable'
];

const PRICE_RANGES = [
  { label: 'Budget ($2-5)', min: 2, max: 5 },
  { label: 'Affordable ($5-15)', min: 5, max: 15 },
  { label: 'Moderate ($15-50)', min: 15, max: 50 },
  { label: 'Premium ($50-100)', min: 50, max: 100 },
  { label: 'Luxury ($100+)', min: 100, max: 500 }
];

const LOCATION_RADIUS_OPTIONS = [
  { label: 'Very Close (0.5 km)', value: 0.5 },
  { label: 'Close (1 km)', value: 1 },
  { label: 'Nearby (2 km)', value: 2 },
  { label: 'Walking Distance (3 km)', value: 3 },
  { label: 'Short Trip (5 km)', value: 5 }
];

// Mock social media data
const MOCK_TIKTOK_DATA = {
  following: ['@healthyfoodie', '@fitnesschef', '@veganrecipes', '@proteinbowls'],
  hashtags: ['#healthyfood', '#fitness', '#protein', '#vegan', '#mealprep'],
  trendingTopics: ['High-protein meals', 'Vegan options', 'Fitness food', 'Quick healthy recipes']
};

const MOCK_INSTAGRAM_DATA = {
  following: ['@clean_eats_sg', '@fitness_food', '@healthy_singapore', '@protein_meals'],
  hashtags: ['#cleaneating', '#fitnessfood', '#singaporefood', '#healthymeals'],
  savedPosts: ['Protein bowl at ABC Kitchen', 'Vegan options at XYZ Cafe', 'Fitness meal prep guide']
};

const MOCK_GOOGLE_MAPS_DATA = {
  savedPlaces: ['Protein Bowl Kitchen', 'Green Leaf Vegan', 'Fit Fuel Express'],
  reviews: ['Great healthy options!', 'Perfect for fitness goals', 'Fresh and delicious'],
  visitedPlaces: ['Fresh & Lean', 'Power Plate', 'Clean Eats']
};

export default function PreferencesModal({ isOpen, onClose, preferences, onSave }: PreferencesModalProps) {
  const [localPreferences, setLocalPreferences] = useState<UserPreferences>(preferences);
  const [newDietary, setNewDietary] = useState('');
  const [newFitnessGoal, setNewFitnessGoal] = useState('');
  const [newHealthFocus, setNewHealthFocus] = useState('');
  const [activeTab, setActiveTab] = useState<'basic' | 'platforms' | 'social'>('basic');
  const [isSaving, setIsSaving] = useState(false);

  // Helper functions for basic profile information
  const updateHeight = (height: number) => {
    setLocalPreferences(prev => ({ ...prev, height }));
  };

  const updateWeight = (weight: number) => {
    setLocalPreferences(prev => ({ ...prev, weight }));
  };

  const updateBirthDate = (birthDate: string) => {
    setLocalPreferences(prev => ({ ...prev, birthDate }));
  };

  const updateGender = (gender: UserPreferences['gender']) => {
    setLocalPreferences(prev => ({ ...prev, gender }));
  };

  if (!isOpen) return null;

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    onSave(localPreferences);
    setIsSaving(false);
    onClose();
  };

  const addDietary = () => {
    if (newDietary && !localPreferences.dietaryPreferences.includes(newDietary)) {
      setLocalPreferences(prev => ({
        ...prev,
        dietaryPreferences: [...prev.dietaryPreferences, newDietary]
      }));
      setNewDietary('');
    }
  };

  const removeDietary = (dietary: string) => {
    setLocalPreferences(prev => ({
      ...prev,
      dietaryPreferences: prev.dietaryPreferences.filter(d => d !== dietary)
    }));
  };

  const addFitnessGoal = () => {
    if (newFitnessGoal && !localPreferences.fitnessGoals.includes(newFitnessGoal)) {
      setLocalPreferences(prev => ({
        ...prev,
        fitnessGoals: [...prev.fitnessGoals, newFitnessGoal]
      }));
      setNewFitnessGoal('');
    }
  };

  const removeFitnessGoal = (goal: string) => {
    setLocalPreferences(prev => ({
      ...prev,
      fitnessGoals: prev.fitnessGoals.filter(g => g !== goal)
    }));
  };

  const addHealthFocus = () => {
    if (newHealthFocus && !localPreferences.healthFocus.includes(newHealthFocus)) {
      setLocalPreferences(prev => ({
        ...prev,
        healthFocus: [...prev.healthFocus, newHealthFocus]
      }));
      setNewHealthFocus('');
    }
  };

  const removeHealthFocus = (focus: string) => {
    setLocalPreferences(prev => ({
      ...prev,
      healthFocus: prev.healthFocus.filter(f => f !== focus)
    }));
  };

  const updatePriceRange = (min: number, max: number) => {
    setLocalPreferences(prev => ({
      ...prev,
      priceRange: { ...prev.priceRange, min, max }
    }));
  };

  const updateLocationRadius = (radius: number) => {
    setLocalPreferences(prev => ({
      ...prev,
      location: { ...prev.location, radius }
    }));
  };

  const togglePlatform = (platform: keyof UserPreferences['platformPreferences']) => {
    setLocalPreferences(prev => ({
      ...prev,
      platformPreferences: {
        ...prev.platformPreferences,
        [platform]: !prev.platformPreferences[platform]
      }
    }));
  };

  const tabs = [
    { id: 'basic', label: 'Basic Settings', icon: Settings },
    { id: 'platforms', label: 'Platform Integration', icon: Globe },
    { id: 'social', label: 'Social Data', icon: TrendingUp }
  ] as const;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm"
      >
        <div className="flex items-center justify-center min-h-screen p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 sm:px-8 py-4 sm:py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Settings className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-white">Preferences</h2>
                    <p className="text-white/80 text-xs sm:text-sm">Customize your dining experience</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex space-x-1 px-4 sm:px-8 py-3 sm:py-4 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all whitespace-nowrap text-xs sm:text-sm ${
                      activeTab === tab.id
                        ? 'bg-white text-orange-600 shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                    }`}
                  >
                    <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-8 overflow-y-auto max-h-[calc(95vh-8rem)] sm:max-h-[calc(90vh-12rem)]">
              <AnimatePresence mode="wait">
                {activeTab === 'basic' && (
                  <motion.div
                    key="basic"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 sm:space-y-8"
                  >
                    {/* Basic Profile Information */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 sm:p-6">
                      <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Basic Profile</h3>
                          <p className="text-gray-700 text-xs sm:text-sm">Essential information for personalized recommendations</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {/* Height */}
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2">Height (cm)</label>
                          <input
                            type="number"
                            value={localPreferences.height || ''}
                            onChange={(e) => updateHeight(Number(e.target.value))}
                            placeholder="170"
                            min="100"
                            max="250"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                          />
                        </div>

                        {/* Weight */}
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2">Weight (kg)</label>
                          <input
                            type="number"
                            value={localPreferences.weight || ''}
                            onChange={(e) => updateWeight(Number(e.target.value))}
                            placeholder="70"
                            min="30"
                            max="300"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                          />
                        </div>

                        {/* Birth Date */}
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2">Birth Date</label>
                          <input
                            type="date"
                            value={localPreferences.birthDate || ''}
                            onChange={(e) => updateBirthDate(e.target.value)}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                          />
                        </div>

                        {/* Gender */}
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2">Gender</label>
                          <select
                            value={localPreferences.gender || ''}
                            onChange={(e) => updateGender(e.target.value as UserPreferences['gender'])}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                          >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                          </select>
                        </div>
                      </div>

                      {/* BMI Display */}
                      {localPreferences.height && localPreferences.weight && (
                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-xl border border-gray-200">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-800">BMI:</span>
                            <span className="text-sm font-semibold text-gray-900">
                              {((localPreferences.weight / Math.pow(localPreferences.height / 100, 2))).toFixed(1)}
                            </span>
                            <span className="text-xs text-gray-600">
                              {(() => {
                                const bmi = localPreferences.weight / Math.pow(localPreferences.height / 100, 2);
                                if (bmi < 18.5) return 'Underweight';
                                if (bmi < 25) return 'Normal';
                                if (bmi < 30) return 'Overweight';
                                return 'Obese';
                              })()}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Dietary Preferences */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6">
                      <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-xl flex items-center justify-center">
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Dietary Preferences</h3>
                          <p className="text-gray-700 text-xs sm:text-sm">Tell us about your dietary needs and restrictions</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2 sm:mb-3">Current Preferences</label>
                          <div className="space-y-2">
                            {localPreferences.dietaryPreferences.map((dietary) => (
                              <motion.div
                                key={dietary}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-between bg-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-sm"
                              >
                                <span className="text-xs sm:text-sm font-medium text-gray-900 truncate">{dietary}</span>
                                <button
                                  onClick={() => removeDietary(dietary)}
                                  className="text-red-500 hover:text-red-700 transition-colors ml-2"
                                >
                                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2 sm:mb-3">Add New Preference</label>
                          <div className="flex space-x-2">
                            <input
                              type="text"
                              value={newDietary}
                              onChange={(e) => setNewDietary(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && addDietary()}
                              placeholder="e.g., Keto, Paleo..."
                              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                            />
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={addDietary}
                              className="px-3 sm:px-4 py-2 sm:py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                            >
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.button>
                          </div>
                          <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
                            {DIETARY_OPTIONS.slice(0, 6).map((option) => (
                              <motion.button
                                key={option}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setNewDietary(option)}
                                className="px-2 sm:px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                {option}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Fitness Goals */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6">
                      <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                          <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Fitness Goals</h3>
                          <p className="text-gray-700 text-xs sm:text-sm">What are your fitness and health objectives?</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2 sm:mb-3">Current Goals</label>
                          <div className="space-y-2">
                            {localPreferences.fitnessGoals.map((goal) => (
                              <motion.div
                                key={goal}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-between bg-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-sm"
                              >
                                <span className="text-xs sm:text-sm font-medium text-gray-900 truncate">{goal}</span>
                                <button
                                  onClick={() => removeFitnessGoal(goal)}
                                  className="text-red-500 hover:text-red-700 transition-colors ml-2"
                                >
                                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-800 mb-2 sm:mb-3">Add New Goal</label>
                          <div className="flex space-x-2">
                            <input
                              type="text"
                              value={newFitnessGoal}
                              onChange={(e) => setNewFitnessGoal(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && addFitnessGoal()}
                              placeholder="e.g., Muscle Building..."
                              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={addFitnessGoal}
                              className="px-3 sm:px-4 py-2 sm:py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                            >
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                            </motion.button>
                          </div>
                          <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
                            {FITNESS_GOALS.slice(0, 6).map((goal) => (
                              <motion.button
                                key={goal}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setNewFitnessGoal(goal)}
                                className="px-2 sm:px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                {goal}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Budget & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {/* Budget Range */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Budget Range</h3>
                            <p className="text-gray-700 text-xs sm:text-sm">Set your preferred spending range</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-4">
                          {PRICE_RANGES.map((range) => (
                            <motion.button
                              key={range.label}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => updatePriceRange(range.min, range.max)}
                              className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all ${
                                localPreferences.priceRange.min === range.min && localPreferences.priceRange.max === range.max
                                  ? 'border-purple-500 bg-purple-50'
                                  : 'border-gray-200 bg-white hover:border-purple-300'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-900 text-sm sm:text-base">{range.label}</span>
                                {localPreferences.priceRange.min === range.min && localPreferences.priceRange.max === range.max && (
                                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                                )}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Location Radius */}
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 sm:p-6">
                        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Walking Distance</h3>
                            <p className="text-gray-700 text-xs sm:text-sm">How far are you willing to walk?</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-4">
                          {LOCATION_RADIUS_OPTIONS.map((option) => (
                            <motion.button
                              key={option.label}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => updateLocationRadius(option.value)}
                              className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all ${
                                localPreferences.location.radius === option.value
                                  ? 'border-orange-500 bg-orange-50'
                                  : 'border-gray-200 bg-white hover:border-orange-300'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-900 text-sm sm:text-base">{option.label}</span>
                                {localPreferences.location.radius === option.value && (
                                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                                )}
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Health Focus */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                          <Activity className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">Health Focus</h3>
                          <p className="text-gray-600">What health aspects are most important to you?</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Current Focus Areas</label>
                          <div className="space-y-2">
                            {localPreferences.healthFocus.map((focus) => (
                              <motion.div
                                key={focus}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm"
                              >
                                <span className="text-sm font-medium text-gray-900">{focus}</span>
                                <button
                                  onClick={() => removeHealthFocus(focus)}
                                  className="text-red-500 hover:text-red-700 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Add New Focus</label>
                          <div className="flex space-x-2">
                            <input
                              type="text"
                              value={newHealthFocus}
                              onChange={(e) => setNewHealthFocus(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && addHealthFocus()}
                              placeholder="e.g., Organic, Fresh..."
                              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            />
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={addHealthFocus}
                              className="px-4 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors"
                            >
                              <Plus className="w-5 h-5" />
                            </motion.button>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {HEALTH_FOCUS.slice(0, 6).map((focus) => (
                              <motion.button
                                key={focus}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setNewHealthFocus(focus)}
                                className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                {focus}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'platforms' && (
                  <motion.div
                    key="platforms"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Integration</h3>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        Connect your social media accounts to get personalized recommendations based on your interests and preferences.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* TikTok */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                          localPreferences.platformPreferences.tiktok
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                        onClick={() => togglePlatform('tiktok')}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                            <span className="text-2xl">🎵</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold">TikTok</h4>
                            <p className="text-sm opacity-80">Food trends and viral recipes</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            localPreferences.platformPreferences.tiktok
                              ? 'border-white bg-white'
                              : 'border-gray-300'
                          }`}>
                            {localPreferences.platformPreferences.tiktok && (
                              <div className="w-3 h-3 bg-black rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </motion.div>

                      {/* Instagram */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                          localPreferences.platformPreferences.instagram
                            ? 'border-pink-500 bg-pink-50'
                            : 'border-gray-200 bg-white hover:border-pink-300'
                        }`}
                        onClick={() => togglePlatform('instagram')}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <Instagram className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900">Instagram</h4>
                            <p className="text-sm text-gray-600">Food photos and restaurant reviews</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            localPreferences.platformPreferences.instagram
                              ? 'border-pink-500 bg-pink-500'
                              : 'border-gray-300'
                          }`}>
                            {localPreferences.platformPreferences.instagram && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </div>
                      </motion.div>

                      {/* Google Maps */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                          localPreferences.platformPreferences.googleMaps
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 bg-white hover:border-blue-300'
                        }`}
                        onClick={() => togglePlatform('googleMaps')}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900">Google Maps</h4>
                            <p className="text-sm text-gray-600">Location and restaurant data</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            localPreferences.platformPreferences.googleMaps
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {localPreferences.platformPreferences.googleMaps && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </div>
                      </motion.div>

                      {/* Grab */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                          localPreferences.platformPreferences.grab
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 bg-white hover:border-green-300'
                        }`}
                        onClick={() => togglePlatform('grab')}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">G</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900">Grab</h4>
                            <p className="text-sm text-gray-600">Ride booking and restaurant info</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            localPreferences.platformPreferences.grab
                              ? 'border-green-500 bg-green-500'
                              : 'border-gray-300'
                          }`}>
                            {localPreferences.platformPreferences.grab && (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'social' && (
                  <motion.div
                    key="social"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Social Data Preview</h3>
                      <p className="text-gray-600 max-w-2xl mx-auto">
                        See how your social media data will be used to provide personalized recommendations.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {/* TikTok Data */}
                      <div className="bg-gray-900 text-white rounded-2xl p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-2xl">🎵</span>
                          <h4 className="text-lg font-semibold">TikTok</h4>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-300 mb-2">Following</p>
                            <div className="space-y-1">
                              {MOCK_TIKTOK_DATA.following.slice(0, 3).map((account) => (
                                <p key={account} className="text-sm">{account}</p>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-300 mb-2">Trending Topics</p>
                            <div className="flex flex-wrap gap-1">
                              {MOCK_TIKTOK_DATA.trendingTopics.slice(0, 2).map((topic) => (
                                <span key={topic} className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Instagram Data */}
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <Instagram className="w-5 h-5" />
                          <h4 className="text-lg font-semibold">Instagram</h4>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-white/80 mb-2">Following</p>
                            <div className="space-y-1">
                              {MOCK_INSTAGRAM_DATA.following.slice(0, 3).map((account) => (
                                <p key={account} className="text-sm">{account}</p>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-white/80 mb-2">Saved Posts</p>
                            <div className="space-y-1">
                              {MOCK_INSTAGRAM_DATA.savedPosts.slice(0, 2).map((post) => (
                                <p key={post} className="text-sm">{post}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Google Maps Data */}
                      <div className="bg-blue-500 text-white rounded-2xl p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <MapPin className="w-5 h-5" />
                          <h4 className="text-lg font-semibold">Google Maps</h4>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-white/80 mb-2">Saved Places</p>
                            <div className="space-y-1">
                              {MOCK_GOOGLE_MAPS_DATA.savedPlaces.slice(0, 3).map((place) => (
                                <p key={place} className="text-sm">{place}</p>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-white/80 mb-2">Recent Reviews</p>
                            <div className="space-y-1">
                              {MOCK_GOOGLE_MAPS_DATA.reviews.slice(0, 2).map((review) => (
                                <p key={review} className="text-sm">{review}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 bg-gray-50 px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Sparkles className="w-4 h-4" />
                  <span>Your preferences help our AI provide better recommendations</span>
                </div>
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSave}
                    disabled={isSaving}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isSaving ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Save Preferences</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 