import { Search, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Target,
    title: "Set Your Preferences",
    description: "Tell us your dietary needs, fitness goals, and budget. We'll use this to find restaurants that match your lifestyle and health objectives.",
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
    details: ["Dietary preferences", "Fitness goals", "Budget range", "Health focus"]
  },
  {
    icon: Search,
    title: "Get Instant Matches",
    description: "Our platform finds restaurants that align with your preferences and are within walking distance. No more hours of searching and deciding.",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    details: ["Quick matching", "Walking distance", "Health-focused", "Budget-friendly"]
  },
  {
    icon: Clock,
    title: "Walk & Enjoy",
    description: "Get your personalized recommendation and walk to the restaurant in 1-3 minutes. Enjoy fresh, healthy meals without delivery fees or long waits.",
    bgColor: "bg-gradient-to-br from-red-500 to-pink-500",
    details: ["1-3 minute walks", "Fresh meals", "No delivery fees", "Healthy choices"]
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              How 34Dish
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent"
            >
              Works for You
            </motion.span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            It&apos;s simple! Tell us what you love, we find the best spots, and you enjoy amazing food experiences. No complicated algorithms, just great recommendations.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Step Number */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm font-bold text-orange-600"
              >
                {index + 1}
              </motion.div>

              {/* Icon */}
              <motion.div 
                className={`mx-auto w-32 h-32 ${step.bgColor} rounded-full flex items-center justify-center mb-8 shadow-xl`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
              >
                <step.icon className="w-12 h-12 text-white" />
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold text-gray-900 leading-tight">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Details */}
                <div className="mt-6 space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div 
                      key={detailIndex} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + detailIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center space-x-2 text-sm text-gray-500"
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-orange-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: detailIndex * 0.2 }}
                      ></motion.div>
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                  className="hidden lg:block absolute top-16 -right-10 w-20 h-0.5 bg-gradient-to-r from-orange-300 to-red-300 origin-left"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Platform Sources */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-gray-900 mb-8"
          >
            We Search These Platforms
          </motion.h3>
          <div className="flex justify-center items-center space-x-8">
            {[
              { letter: "G", color: "orange", name: "Grab Dine-Out" },
              { letter: "M", color: "red", name: "Google Maps" },
              { letter: "I", color: "pink", name: "Instagram" },
              { letter: "T", color: "gray", name: "TikTok" }
            ].map((platform, index) => (
              <motion.div 
                key={platform.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center space-y-2"
              >
                <motion.div 
                  className={`w-16 h-16 bg-${platform.color}-100 rounded-2xl flex items-center justify-center`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className={`text-${platform.color}-600 font-bold text-xl`}>{platform.letter}</span>
                </motion.div>
                <span className="text-sm text-gray-600">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 