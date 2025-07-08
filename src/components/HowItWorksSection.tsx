import { Users, Search, Utensils, Filter, Star, MapPin, TrendingUp, Brain, Cpu, Zap } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "AI Learns Your Preferences",
    description: "Our intelligent system analyzes your cuisine preferences, price range, distance, and favorite celebrities to build a personalized profile.",
    bgColor: "bg-gradient-to-br from-emerald-500 to-cyan-500",
    details: ["Machine learning analysis", "Preference profiling", "Celebrity matching", "Location optimization"]
  },
  {
    icon: Cpu,
    title: "Intelligent Platform Scanning",
    description: "Advanced AI continuously monitors Grab Dine-Out, Google Maps, Instagram, TikTok, and other sources for new recommendations and reviews.",
    bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
    details: ["Real-time monitoring", "Content analysis", "Sentiment detection", "Trend identification"]
  },
  {
    icon: Zap,
    title: "AI-Curated Results",
    description: "Receive intelligently curated restaurant suggestions that match your preferences, with insights from celebrities and trending social media content.",
    bgColor: "bg-gradient-to-br from-blue-500 to-indigo-500",
    details: ["Smart filtering", "Relevance scoring", "Personalization", "Continuous learning"]
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              How AI Powers
            </span>
            <span className="block bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Your Dining Discovery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intelligent preference learning to AI-curated recommendations, we make finding your next meal effortless and personalized through advanced machine learning.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-sm font-bold text-emerald-600">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`mx-auto w-32 h-32 ${step.bgColor} rounded-full flex items-center justify-center mb-8 shadow-xl`}>
                <step.icon className="w-12 h-12 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold text-gray-900 leading-tight">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Details */}
                <div className="mt-6 space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-10 w-20 h-0.5 bg-gradient-to-r from-emerald-300 to-cyan-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Platform Sources */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">AI Monitors These Platforms</h3>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-xl">G</span>
              </div>
              <span className="text-sm text-gray-600">Grab Dine-Out</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center">
                <span className="text-cyan-600 font-bold text-xl">M</span>
              </div>
              <span className="text-sm text-gray-600">Google Maps</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">I</span>
              </div>
              <span className="text-sm text-gray-600">Instagram</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-sm text-gray-600">TikTok</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 