"use client";

import Link from "next/link";
import { Menu, X, User, Brain } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">34</span>
            </div>
            <span className="font-poppins font-bold text-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              34Dish
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <Link href="#features" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium relative group">
              Features
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium relative group">
              How it Works
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium relative group">
              Reviews
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium relative group">
              Pricing
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-emerald-400 transition-colors font-medium flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Brain className="w-4 h-4" />
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-800/50 bg-black/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#features" 
                className="text-gray-300 hover:text-emerald-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-gray-300 hover:text-emerald-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                href="#testimonials" 
                className="text-gray-300 hover:text-emerald-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                href="#pricing" 
                className="text-gray-300 hover:text-emerald-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="pt-4 border-t border-gray-800/50 space-y-3">
                <button className="w-full text-left text-gray-300 hover:text-emerald-400 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-800/50 flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span>Get Started</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 