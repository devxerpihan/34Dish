import { DollarSign, Heart, MapPin, Sparkles, Target, Clock } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: Target,
    title: "Personalized for Your Goals",
    description: "Set your dietary preferences, fitness goals, and budget. We match you with restaurants that align with your health and lifestyle choices.",
    gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    iconGradient: "bg-gradient-to-br from-amber-500 to-orange-500"
  },
  {
    icon: Clock,
    title: "Quick Decision Making",
    description: "Stop spending hours deciding what to eat. Get instant recommendations based on your preferences and walk to your meal in minutes.",
    gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    iconGradient: "bg-gradient-to-br from-orange-500 to-red-500"
  },
  {
    icon: Heart,
    title: "Health-Focused Options",
    description: "Find restaurants that cater to your dietary needs - high-protein, low-calorie, vegan, halal, and more. Eat well without compromise.",
    gradient: "bg-gradient-to-br from-red-500/20 to-pink-500/20",
    iconGradient: "bg-gradient-to-br from-red-500 to-pink-500"
  },
  {
    icon: MapPin,
    title: "Walkable Locations",
    description: "All recommendations are within walking distance. No more delivery fees or long waits - just fresh, healthy meals nearby.",
    gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    iconGradient: "bg-gradient-to-br from-pink-500 to-rose-500"
  },
  {
    icon: DollarSign,
    title: "Budget-Friendly Choices",
    description: "Price is the top factor for 86% of people. We show you options that fit your budget while meeting your health goals.",
    gradient: "bg-gradient-to-br from-rose-500/20 to-amber-500/20",
    iconGradient: "bg-gradient-to-br from-rose-500 to-amber-500"
  },
  {
    icon: Sparkles,
    title: "Clean & Simple Experience",
    description: "No overwhelming choices or complicated interfaces. Just clean, focused recommendations that help you make better food decisions.",
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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-poppins font-bold mb-6">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            >
              Everything You Need
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent"
            >
              For Amazing Dining
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We bring together the best of all platforms to help you discover incredible restaurants, trending spots, and hidden gems loved by celebrities and food enthusiasts.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                iconGradient={feature.iconGradient}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 