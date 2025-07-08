import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Food Blogger",
    avatar: "SC",
    content: "34Dish's AI has completely transformed how I discover restaurants. The intelligent celebrity matching and real-time trend detection from TikTok is incredible. It's like having a personal AI food concierge!",
    rating: 5,
    highlight: "AI food concierge"
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Professional",
    avatar: "MR",
    content: "As someone who's always looking for the next great meal, 34Dish's machine learning saves me so much time. The AI gets smarter with every interaction, providing increasingly accurate recommendations.",
    rating: 5,
    highlight: "Gets smarter over time"
  },
  {
    name: "Emma Thompson",
    role: "Marketing Director",
    avatar: "ET",
    content: "The AI-powered celebrity filter is brilliant! I discovered amazing restaurants that Gordon Ramsay visited in my area. The intelligent platform aggregation gives me confidence I'm not missing any hidden gems.",
    rating: 5,
    highlight: "AI celebrity filter"
  },
  {
    name: "David Kim",
    role: "Restaurant Owner",
    avatar: "DK",
    content: "I use 34Dish's AI to research what's trending in the food scene. The intelligent sentiment analysis helps me understand what customers are looking for and which restaurants are getting buzz.",
    rating: 5,
    highlight: "AI sentiment analysis"
  },
  {
    name: "Lisa Wang",
    role: "Food Enthusiast",
    avatar: "LW",
    content: "Finally, an AI platform that intelligently combines all my favorite food sources! The machine learning personalization is spot-on, and the real-time updates are incredibly accurate.",
    rating: 5,
    highlight: "Intelligent personalization"
  },
  {
    name: "Alex Johnson",
    role: "Travel Blogger",
    avatar: "AJ",
    content: "When I'm in a new city, 34Dish's AI helps me find the best local spots quickly. The intelligent recommendations and trend detection ensure I'm eating at places that are actually worth visiting.",
    rating: 5,
    highlight: "AI travel recommendations"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Loved by Food Lovers
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            See what our users say about discovering amazing restaurants through 34Dish&apos;s AI-powered multi-platform aggregation and intelligent personalized recommendations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
              content={testimonial.content}
              rating={testimonial.rating}
              highlight={testimonial.highlight}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              50K+
            </div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-gray-400">AI-Monitored Platforms</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              10K+
            </div>
            <div className="text-gray-400">AI-Discovered Restaurants</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              4.9★
            </div>
            <div className="text-gray-400">AI Accuracy Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
} 