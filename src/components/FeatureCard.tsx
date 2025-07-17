import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconGradient: string;
}

export default function FeatureCard({ icon: Icon, title, description, gradient, iconGradient }: FeatureCardProps) {
  return (
    <motion.div 
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 hover:border-orange-400/50 transition-all duration-300 hover:shadow-2xl"
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute inset-0 ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      <div className="relative z-10 space-y-6">
        {/* Icon */}
        <motion.div 
          className={`w-16 h-16 ${iconGradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ 
            rotate: 360,
            scale: 1.2
          }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
            {description}
          </p>
        </div>

        {/* Hover Effect */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    </motion.div>
  );
} 