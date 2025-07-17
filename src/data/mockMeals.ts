import { Target, AlertTriangle, CheckCircle, Lightbulb, Clock, Heart } from 'lucide-react';

export interface MealEntry {
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
  restaurant?: string;
  price?: string;
  location?: string;
}

export interface DailySummary {
  date: string;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  meals: MealEntry[];
  healthScore: number;
}

export interface NutritionInsight {
  id: string;
  type: 'positive' | 'warning' | 'recommendation' | 'achievement';
  title: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  action?: string;
}

export interface NutritionRecommendation {
  id: string;
  title: string;
  description: string;
  reasoning: string;
  impact: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'protein' | 'carbs' | 'fats' | 'fiber' | 'vitamins' | 'general';
}

// Mock past meals data
export const mockMeals: MealEntry[] = [
  {
    id: '1',
    date: new Date(2024, 0, 15, 12, 30),
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    name: 'Protein Bowl with Quinoa & Avocado',
    calories: 450,
    protein: 35,
    carbs: 45,
    fat: 18,
    fiber: 12,
    healthScore: 92,
    restaurant: 'Healthy Bowl Co.',
    price: 'SGD 18',
    location: 'Raffles Place',
    aiAnalysis: 'Excellent choice! This meal provides a perfect balance of protein, complex carbs, and healthy fats. The quinoa offers complete protein and the avocado adds heart-healthy monounsaturated fats. The fiber content will keep you full longer.',
    tags: ['High-Protein', 'Balanced', 'Fiber-Rich', 'Plant-Based']
  },
  {
    id: '2',
    date: new Date(2024, 0, 15, 18, 0),
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
    name: 'Grilled Salmon with Roasted Vegetables',
    calories: 380,
    protein: 42,
    carbs: 15,
    fat: 18,
    fiber: 8,
    healthScore: 88,
    restaurant: 'Green Leaf Bistro',
    price: 'SGD 28',
    location: 'Marina Bay',
    aiAnalysis: 'Great omega-3 content from the salmon! The protein-to-calorie ratio is excellent for muscle building. Consider adding more colorful vegetables for additional antioxidants.',
    tags: ['Omega-3', 'High-Protein', 'Low-Carb', 'Anti-Inflammatory']
  },
  {
    id: '3',
    date: new Date(2024, 0, 14, 12, 0),
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    name: 'Mediterranean Chicken Salad',
    calories: 320,
    protein: 28,
    carbs: 12,
    fat: 16,
    fiber: 6,
    healthScore: 85,
    restaurant: 'Fresh & Lean',
    price: 'SGD 16',
    location: 'Orchard Road',
    aiAnalysis: 'Good protein content with lean chicken. The Mediterranean ingredients provide healthy fats and antioxidants. Could benefit from more fiber-rich vegetables.',
    tags: ['Lean Protein', 'Mediterranean', 'Low-Calorie', 'Antioxidants']
  },
  {
    id: '4',
    date: new Date(2024, 0, 14, 19, 30),
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    name: 'Vegetarian Buddha Bowl',
    calories: 420,
    protein: 18,
    carbs: 52,
    fat: 14,
    fiber: 15,
    healthScore: 90,
    restaurant: 'Plant Power Kitchen',
    price: 'SGD 14',
    location: 'Tanjong Pagar',
    aiAnalysis: 'Excellent fiber content! This plant-based meal is rich in vitamins and minerals. The combination of grains and legumes provides complete protein.',
    tags: ['Plant-Based', 'High-Fiber', 'Complete Protein', 'Vitamins']
  },
  {
    id: '5',
    date: new Date(2024, 0, 13, 13, 15),
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400',
    name: 'Tuna Poke Bowl',
    calories: 480,
    protein: 38,
    carbs: 48,
    fat: 16,
    fiber: 8,
    healthScore: 87,
    restaurant: 'Ocean Fresh',
    price: 'SGD 22',
    location: 'Clarke Quay',
    aiAnalysis: 'Great source of lean protein and omega-3s from tuna. The brown rice provides complex carbs and fiber. Watch the sodium content from soy sauce.',
    tags: ['Lean Protein', 'Omega-3', 'Complex Carbs', 'Asian Fusion']
  },
  {
    id: '6',
    date: new Date(2024, 0, 13, 20, 0),
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400',
    name: 'Greek Yogurt with Berries & Nuts',
    calories: 280,
    protein: 24,
    carbs: 22,
    fat: 12,
    fiber: 4,
    healthScore: 82,
    restaurant: 'Protein Power Kitchen',
    price: 'SGD 12',
    location: 'Bugis',
    aiAnalysis: 'Excellent protein content from Greek yogurt. The berries provide antioxidants and the nuts add healthy fats. Great post-workout snack choice.',
    tags: ['High-Protein', 'Antioxidants', 'Post-Workout', 'Probiotics']
  },
  {
    id: '7',
    date: new Date(2024, 0, 12, 12, 45),
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    name: 'Superfood Green Smoothie Bowl',
    calories: 320,
    protein: 16,
    carbs: 38,
    fat: 14,
    fiber: 10,
    healthScore: 89,
    restaurant: 'Vitality Bar',
    price: 'SGD 15',
    location: 'Raffles Place',
    aiAnalysis: 'Packed with superfoods and antioxidants! The spinach provides iron and the chia seeds add omega-3s. Great way to start the day with nutrients.',
    tags: ['Superfoods', 'Antioxidants', 'Iron-Rich', 'Omega-3']
  },
  {
    id: '8',
    date: new Date(2024, 0, 12, 18, 30),
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
    name: 'Lean Beef Stir-Fry with Vegetables',
    calories: 420,
    protein: 36,
    carbs: 28,
    fat: 20,
    fiber: 6,
    healthScore: 84,
    restaurant: 'Wok & Health',
    price: 'SGD 20',
    location: 'Chinatown',
    aiAnalysis: 'Good protein content from lean beef. The stir-fried vegetables retain their nutrients. Consider using less oil for a lower calorie option.',
    tags: ['High-Protein', 'Iron-Rich', 'Stir-Fry', 'Lean Meat']
  },
  {
    id: '9',
    date: new Date(2024, 0, 11, 12, 0),
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    name: 'Chickpea & Kale Power Bowl',
    calories: 380,
    protein: 22,
    carbs: 42,
    fat: 12,
    fiber: 14,
    healthScore: 91,
    restaurant: 'Plant Power Kitchen',
    price: 'SGD 13',
    location: 'Tanjong Pagar',
    aiAnalysis: 'Excellent fiber and protein from chickpeas! Kale is a superfood rich in vitamins K, A, and C. This meal supports gut health and immunity.',
    tags: ['Plant-Based', 'High-Fiber', 'Superfoods', 'Immunity']
  },
  {
    id: '10',
    date: new Date(2024, 0, 11, 19, 0),
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400',
    name: 'Baked Cod with Sweet Potato',
    calories: 360,
    protein: 34,
    carbs: 32,
    fat: 10,
    fiber: 6,
    healthScore: 86,
    restaurant: 'Ocean Fresh',
    price: 'SGD 24',
    location: 'Clarke Quay',
    aiAnalysis: 'Lean protein from cod with complex carbs from sweet potato. The beta-carotene in sweet potato supports eye health. Great balanced meal.',
    tags: ['Lean Protein', 'Complex Carbs', 'Beta-Carotene', 'Low-Fat']
  }
];

// Mock nutrition insights
export const mockInsights: NutritionInsight[] = [
  {
    id: '1',
    type: 'positive',
    title: 'Excellent Protein Intake',
    description: 'You\'re consistently hitting your protein goals with an average of 32g per meal. This supports muscle building, recovery, and satiety.',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: '2',
    type: 'warning',
    title: 'Fiber Intake Below Target',
    description: 'Your daily fiber intake averages 9g, which is below the recommended 25-30g. This affects gut health and blood sugar control.',
    icon: AlertTriangle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    action: 'Add fiber-rich foods'
  },
  {
    id: '3',
    type: 'achievement',
    title: '5-Day Healthy Streak',
    description: 'Congratulations! You\'ve maintained a health score above 85% for 5 consecutive days. Keep up the great work!',
    icon: CheckCircle,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: '4',
    type: 'recommendation',
    title: 'Omega-3 Boost Needed',
    description: 'Your meals could benefit from more omega-3 fatty acids. Consider adding fatty fish, chia seeds, or walnuts 2-3 times per week.',
    icon: Lightbulb,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    action: 'Add omega-3 foods'
  },
  {
    id: '5',
    type: 'positive',
    title: 'Great Meal Timing',
    description: 'Your meal spacing is optimal for metabolism and energy levels. You\'re eating every 4-5 hours which helps maintain stable blood sugar.',
    icon: Clock,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    id: '6',
    type: 'recommendation',
    title: 'Increase Antioxidant Intake',
    description: 'Add more colorful fruits and vegetables to boost your antioxidant intake. This supports immunity and reduces inflammation.',
    icon: Heart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    action: 'Add colorful produce'
  }
];

// Mock nutrition recommendations
export const mockRecommendations: NutritionRecommendation[] = [
  {
    id: '1',
    title: 'Add Leafy Greens Daily',
    description: 'Include spinach, kale, or arugula in at least one meal per day',
    reasoning: 'Your fiber intake is below target, and leafy greens are excellent sources of fiber, vitamins K, A, and C, plus minerals like iron and calcium.',
    impact: 'Increase fiber by 5-8g per meal, boost vitamin K by 400%, improve iron absorption',
    difficulty: 'easy',
    category: 'fiber'
  },
  {
    id: '2',
    title: 'Include Fatty Fish 3x Weekly',
    description: 'Add salmon, mackerel, or sardines to your meals 3 times per week',
    reasoning: 'Your omega-3 intake is low, which is crucial for heart health, brain function, and reducing inflammation.',
    impact: 'Improve heart health by 15%, boost brain function, reduce inflammation markers',
    difficulty: 'medium',
    category: 'fats'
  },
  {
    id: '3',
    title: 'Switch to Whole Grains',
    description: 'Replace refined grains with quinoa, brown rice, or whole wheat options',
    reasoning: 'You\'re consuming mostly refined carbs. Whole grains provide more fiber, B vitamins, and minerals.',
    impact: 'Increase fiber intake by 3-5g per meal, improve blood sugar control, sustained energy',
    difficulty: 'easy',
    category: 'carbs'
  },
  {
    id: '4',
    title: 'Add Greek Yogurt Snacks',
    description: 'Include Greek yogurt as a protein-rich snack between meals',
    reasoning: 'While your protein intake is good, Greek yogurt provides additional calcium, probiotics, and helps with satiety.',
    impact: 'Boost calcium intake by 200mg, improve gut health, additional 15g protein',
    difficulty: 'easy',
    category: 'protein'
  },
  {
    id: '5',
    title: 'Increase Colorful Vegetables',
    description: 'Add 2-3 different colored vegetables to each meal',
    reasoning: 'Your antioxidant intake is low. Different colored vegetables provide various phytonutrients that support immunity and reduce disease risk.',
    impact: 'Boost antioxidant levels by 40%, improve immunity, reduce inflammation',
    difficulty: 'easy',
    category: 'vitamins'
  },
  {
    id: '6',
    title: 'Add Nuts and Seeds',
    description: 'Include a small handful of nuts or seeds as a snack or meal topping',
    reasoning: 'Nuts and seeds provide healthy fats, protein, fiber, and essential minerals like magnesium and zinc.',
    impact: 'Increase healthy fat intake, boost magnesium by 50%, improve satiety',
    difficulty: 'easy',
    category: 'general'
  }
];

// Helper function to get meals for a specific date
export const getMealsForDate = (date: Date): MealEntry[] => {
  return mockMeals.filter(meal => 
    meal.date.toDateString() === date.toDateString()
  );
};

// Helper function to get monthly summary
export const getMonthlySummary = (date: Date) => {
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  
  const monthlyMeals = mockMeals.filter(meal => 
    meal.date.getMonth() === currentMonth && 
    meal.date.getFullYear() === currentYear
  );
  
  const totalCalories = monthlyMeals.reduce((sum, meal) => sum + meal.calories, 0);
  const totalProtein = monthlyMeals.reduce((sum, meal) => sum + meal.protein, 0);
  const totalCarbs = monthlyMeals.reduce((sum, meal) => sum + meal.carbs, 0);
  const totalFat = monthlyMeals.reduce((sum, meal) => sum + meal.fat, 0);
  const avgHealthScore = monthlyMeals.length > 0 
    ? monthlyMeals.reduce((sum, meal) => sum + meal.healthScore, 0) / monthlyMeals.length 
    : 0;
  
  return {
    totalMeals: monthlyMeals.length,
    totalCalories,
    totalProtein,
    totalCarbs,
    totalFat,
    avgHealthScore: Math.round(avgHealthScore),
    meals: monthlyMeals
  };
};

// Helper function to get nutrition score
export const getNutritionScore = () => {
  const recentMeals = mockMeals.slice(0, 7); // Last 7 meals
  const avgHealthScore = recentMeals.reduce((sum, meal) => sum + meal.healthScore, 0) / recentMeals.length;
  
  return {
    overall: Math.round(avgHealthScore),
    protein: 92, // Based on protein intake consistency
    fiber: 78, // Based on fiber intake
    balance: 88 // Based on macro balance
  };
}; 