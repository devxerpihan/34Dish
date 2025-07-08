import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                34Dish
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-md">
                The ultimate platform for discovering amazing restaurants. We bring together the best recommendations from Grab, Google Maps, Instagram, TikTok, and more to help you find incredible dining experiences.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>hello@34dish.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>Singapore</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-orange-600 transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2025 34Dish. Amazing dining discovery. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 