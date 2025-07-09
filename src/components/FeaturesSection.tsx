import { DollarSign, TrendingUp, Heart, Utensils, MapPin, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Utensils,
    title: "Multi-Platform Aggregation",
    description: "We bring together the best restaurant recommendations from Grab Dine-Out, Google Maps, Instagram, TikTok, and more in one delicious place.",
    gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    iconGradient: "bg-gradient-to-br from-amber-500 to-orange-500"
  },
  {
    icon: Heart,
    title: "Celebrity & Influencer Spots",
    description: "Discover restaurants loved by celebrities and influencers. Find the same spots where your favorite personalities enjoy their meals.",
    gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    iconGradient: "bg-gradient-to-br from-orange-500 to-red-500"
  },
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    description: "Tell us what you love to eat and we'll find the perfect spots for you. Our smart matching learns your preferences over time.",
    gradient: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
    iconGradient: "bg-gradient-to-br from-red-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Trending & Viral Spots",
    description: "Stay ahead of the curve with trending restaurants from Instagram and TikTok. Discover the next big thing before everyone else.",
    gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    iconGradient: "bg-gradient-to-br from-pink-500 to-rose-500"
  },
  {
    icon: MapPin,
    title: "Location-Based Discovery",
    description: "Find amazing restaurants near you or plan your next food adventure. Get recommendations based on your location and travel plans.",
    gradient: "bg-gradient-to-br from-rose-500/20 to-amber-500/20",
    iconGradient: "bg-gradient-to-br from-rose-500 to-amber-500"
  },
  {
    icon: DollarSign,
    title: "Best Deals & Promotions",
    description: "Never miss a great deal! We track promotions and special offers from all platforms to help you save while dining out.",
    gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    iconGradient: "bg-gradient-to-br from-amber-500 to-orange-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Everything You Need
            </span>
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
              For Amazing Dining
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We bring together the best of all platforms to help you discover incredible restaurants, trending spots, and hidden gems loved by celebrities and food enthusiasts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              iconGradient={feature.iconGradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 