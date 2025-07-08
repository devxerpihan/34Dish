import { Search, Star, Target, Zap, Smartphone, DollarSign, Filter, TrendingUp, Users, MapPin, Brain, Cpu } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Aggregation",
    description: "Our advanced AI continuously monitors Grab Dine-Out, Google Maps, Instagram, TikTok, and more to bring you the most comprehensive restaurant recommendations.",
    gradient: "bg-gradient-to-br from-emerald-500/20 to-cyan-500/20",
    iconGradient: "bg-gradient-to-br from-emerald-500 to-cyan-500"
  },
  {
    icon: Star,
    title: "Intelligent Celebrity Matching",
    description: "AI algorithms identify and filter restaurants by celebrities and influencers who have visited or recommended them. Find spots loved by your favorite personalities.",
    gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    iconGradient: "bg-gradient-to-br from-cyan-500 to-blue-500"
  },
  {
    icon: Cpu,
    title: "Smart Personalization Engine",
    description: "Machine learning adapts to your cuisine preferences, price range, distance, and favorite celebrities. Get increasingly accurate recommendations over time.",
    gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
    iconGradient: "bg-gradient-to-br from-blue-500 to-indigo-500"
  },
  {
    icon: Zap,
    title: "Real-time AI Updates",
    description: "Stay updated with the latest reviews, deals, and recommendations as they happen across all platforms with intelligent content prioritization.",
    gradient: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    iconGradient: "bg-gradient-to-br from-indigo-500 to-purple-500"
  },
  {
    icon: TrendingUp,
    title: "AI Trend Detection",
    description: "Discover viral restaurants and trending spots from Instagram and TikTok using advanced sentiment analysis and engagement metrics.",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    iconGradient: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    icon: DollarSign,
    title: "Intelligent Deal Matching",
    description: "AI-powered deal detection ensures you never miss a promotion with smart matching based on your preferences and dining history.",
    gradient: "bg-gradient-to-br from-pink-500/20 to-emerald-500/20",
    iconGradient: "bg-gradient-to-br from-pink-500 to-emerald-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              AI-Powered Features
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              That Learn & Adapt
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our advanced AI technology aggregates data from multiple platforms to give you the most intelligent dining recommendations with personalized filters and celebrity insights.
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