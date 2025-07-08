import { Heart, Search, Utensils, MapPin, Star, Users } from "lucide-react";

const steps = [
  {
    icon: Heart,
    title: "Tell Us What You Love",
    description: "Share your favorite cuisines, price preferences, and which celebrities you follow. We'll use this to find restaurants that match your taste.",
    bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
    details: ["Cuisine preferences", "Price range", "Celebrity favorites", "Location preferences"]
  },
  {
    icon: Search,
    title: "We Find the Best Spots",
    description: "Our platform searches through Grab Dine-Out, Google Maps, Instagram, TikTok, and more to find restaurants that match your preferences.",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    details: ["Multi-platform search", "Celebrity recommendations", "Trending spots", "Hidden gems"]
  },
  {
    icon: Utensils,
    title: "Enjoy Amazing Food",
    description: "Get personalized recommendations with insights from celebrities, trending social media content, and real user reviews all in one place.",
    bgColor: "bg-gradient-to-br from-red-500 to-pink-500",
    details: ["Personalized results", "Celebrity insights", "Social proof", "Easy booking"]
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              How 34Dish
            </span>
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
              Works for You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            It's simple! Tell us what you love, we find the best spots, and you enjoy amazing food experiences. No complicated algorithms, just great recommendations.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm font-bold text-orange-600">
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
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-10 w-20 h-0.5 bg-gradient-to-r from-orange-300 to-red-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Platform Sources */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">We Search These Platforms</h3>
          <div className="flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xl">G</span>
              </div>
              <span className="text-sm text-gray-600">Grab Dine-Out</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">M</span>
              </div>
              <span className="text-sm text-gray-600">Google Maps</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
                <span className="text-pink-600 font-bold text-xl">I</span>
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