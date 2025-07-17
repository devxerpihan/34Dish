'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  preferences: {
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
  };
}

interface AuthContextType {
  user: User | null;
  preferences: User['preferences'] | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  updatePreferences: (preferences: User['preferences']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hardcoded credentials for MVP
const HARDCODED_CREDENTIALS = {
  email: 'demo@34dish.com',
  password: 'demo123'
};

const HARDCODED_USER: User = {
  id: '1',
  email: 'demo@34dish.com',
  name: 'Demo User',
  preferences: {
    // Basic Profile Information
    height: 175,
    weight: 70,
    birthDate: '1990-01-01',
    gender: 'male' as const,
    
    dietaryPreferences: ['High-Protein', 'Low-Calorie', 'Fitness'],
    fitnessGoals: ['Muscle Building', 'Weight Loss'],
    priceRange: {
      min: 15,
      max: 50,
      currency: 'SGD'
    },
    location: {
      address: 'Singapore, Central Business District',
      latitude: 1.3521,
      longitude: 103.8198,
      radius: 2
    },
    healthFocus: ['Fresh Ingredients', 'Quick Meals', 'Budget-Friendly'],
    platformPreferences: {
      tiktok: true,
      instagram: true,
      googleMaps: true,
      grab: true
    },
    socialMediaData: {
      tiktok: {
        following: ['@healthyfoodie', '@fitnesschef', '@veganrecipes', '@proteinbowls'],
        hashtags: ['#healthyfood', '#fitness', '#protein', '#vegan', '#mealprep'],
        trendingTopics: ['High-protein meals', 'Vegan options', 'Fitness food', 'Quick healthy recipes']
      },
      instagram: {
        following: ['@clean_eats_sg', '@fitness_food', '@healthy_singapore', '@protein_meals'],
        hashtags: ['#cleaneating', '#fitnessfood', '#singaporefood', '#healthymeals'],
        savedPosts: ['Protein bowl at ABC Kitchen', 'Vegan options at XYZ Cafe', 'Fitness meal prep guide']
      },
      googleMaps: {
        savedPlaces: ['Protein Bowl Kitchen', 'Green Leaf Vegan', 'Fit Fuel Express'],
        reviews: ['Great healthy options!', 'Perfect for fitness goals', 'Fresh and delicious'],
        visitedPlaces: ['Fresh & Lean', 'Power Plate', 'Clean Eats']
      }
    }
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('34dish_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === HARDCODED_CREDENTIALS.email && password === HARDCODED_CREDENTIALS.password) {
      setUser(HARDCODED_USER);
      localStorage.setItem('34dish_user', JSON.stringify(HARDCODED_USER));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('34dish_user');
  };

  const updatePreferences = (newPreferences: User['preferences']) => {
    if (user) {
      const updatedUser = { ...user, preferences: newPreferences };
      setUser(updatedUser);
      localStorage.setItem('34dish_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      preferences: user?.preferences || null,
      login, 
      logout, 
      isLoading,
      updatePreferences 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 