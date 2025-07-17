'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface ChartDataPoint {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  healthScore: number;
}

const mockChartData: ChartDataPoint[] = [
  { date: 'Jan 8', calories: 1850, protein: 95, carbs: 180, fat: 65, healthScore: 82 },
  { date: 'Jan 9', calories: 1920, protein: 102, carbs: 175, fat: 68, healthScore: 85 },
  { date: 'Jan 10', calories: 1780, protein: 88, carbs: 165, fat: 62, healthScore: 87 },
  { date: 'Jan 11', calories: 1950, protein: 105, carbs: 185, fat: 70, healthScore: 84 },
  { date: 'Jan 12', calories: 1880, protein: 98, carbs: 170, fat: 66, healthScore: 86 },
  { date: 'Jan 13', calories: 1820, protein: 92, carbs: 168, fat: 64, healthScore: 89 },
  { date: 'Jan 14', calories: 1900, protein: 100, carbs: 175, fat: 67, healthScore: 87 },
  { date: 'Jan 15', calories: 1860, protein: 96, carbs: 172, fat: 65, healthScore: 88 }
];

const getTrendIcon = (current: number, previous: number) => {
  if (current > previous) return <TrendingUp className="w-3 h-3 text-green-500" />;
  if (current < previous) return <TrendingDown className="w-3 h-3 text-red-500" />;
  return <Minus className="w-3 h-3 text-gray-500" />;
};

const getTrendColor = (current: number, previous: number) => {
  if (current > previous) return 'text-green-600';
  if (current < previous) return 'text-red-600';
  return 'text-gray-600';
};

export default function NutritionTrendsChart() {
  const latestData = mockChartData[mockChartData.length - 1];
  const previousData = mockChartData[mockChartData.length - 2];
  
  const maxCalories = Math.max(...mockChartData.map(d => d.calories));
  const maxHealthScore = Math.max(...mockChartData.map(d => d.healthScore));

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Avg Calories</span>
            {getTrendIcon(latestData.calories, previousData.calories)}
          </div>
          <div className={`text-xl font-bold ${getTrendColor(latestData.calories, previousData.calories)}`}>
            {Math.round(latestData.calories)}
          </div>
          <div className="text-xs text-gray-500">per day</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Avg Protein</span>
            {getTrendIcon(latestData.protein, previousData.protein)}
          </div>
          <div className={`text-xl font-bold ${getTrendColor(latestData.protein, previousData.protein)}`}>
            {latestData.protein}g
          </div>
          <div className="text-xs text-gray-500">per day</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Avg Carbs</span>
            {getTrendIcon(latestData.carbs, previousData.carbs)}
          </div>
          <div className={`text-xl font-bold ${getTrendColor(latestData.carbs, previousData.carbs)}`}>
            {latestData.carbs}g
          </div>
          <div className="text-xs text-gray-500">per day</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Health Score</span>
            {getTrendIcon(latestData.healthScore, previousData.healthScore)}
          </div>
          <div className={`text-xl font-bold ${getTrendColor(latestData.healthScore, previousData.healthScore)}`}>
            {latestData.healthScore}%
          </div>
          <div className="text-xs text-gray-500">average</div>
        </div>
      </div>

      {/* Calories Chart */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Calorie Intake</h3>
        <div className="flex items-end space-x-2 h-32">
          {mockChartData.map((data, index) => (
            <motion.div
              key={data.date}
              initial={{ height: 0 }}
              animate={{ height: `${(data.calories / maxCalories) * 100}%` }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 bg-gradient-to-t from-orange-500 to-red-500 rounded-t-lg relative group"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {data.calories} cal
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          {mockChartData.map(data => (
            <span key={data.date}>{data.date}</span>
          ))}
        </div>
      </div>

      {/* Health Score Chart */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Score Trend</h3>
        <div className="flex items-end space-x-2 h-32">
          {mockChartData.map((data, index) => (
            <motion.div
              key={data.date}
              initial={{ height: 0 }}
              animate={{ height: `${(data.healthScore / maxHealthScore) * 100}%` }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 bg-gradient-to-t from-green-500 to-emerald-500 rounded-t-lg relative group"
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {data.healthScore}%
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          {mockChartData.map(data => (
            <span key={data.date}>{data.date}</span>
          ))}
        </div>
      </div>

      {/* Macro Distribution */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Macro Distribution (Latest Day)</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-2 relative">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - latestData.protein / 150)}`}
                  className="text-blue-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold">{Math.round((latestData.protein / 150) * 100)}%</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Protein</div>
            <div className="text-xs text-gray-500">{latestData.protein}g</div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-2 relative">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - latestData.carbs / 250)}`}
                  className="text-green-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold">{Math.round((latestData.carbs / 250) * 100)}%</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Carbs</div>
            <div className="text-xs text-gray-500">{latestData.carbs}g</div>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-2 relative">
              <svg className="w-20 h-20 transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-gray-200"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - latestData.fat / 80)}`}
                  className="text-purple-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold">{Math.round((latestData.fat / 80) * 100)}%</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">Fat</div>
            <div className="text-xs text-gray-500">{latestData.fat}g</div>
          </div>
        </div>
      </div>
    </div>
  );
} 