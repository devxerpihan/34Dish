import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Food Blogger",
    avatar: "SC",
    content: "34Dish has completely changed how I discover restaurants! I found this amazing sushi place that Gordon Ramsay visited, and it was absolutely incredible. The celebrity recommendations are spot-on!",
    rating: 5,
    highlight: "Celebrity recommendations"
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Professional",
    avatar: "MR",
    content: "As someone who's always looking for the next great meal, 34Dish saves me so much time. I love how it brings together recommendations from all my favorite platforms in one place.",
    rating: 5,
    highlight: "Saves so much time"
  },
  {
    name: "Emma Thompson",
    role: "Marketing Director",
    avatar: "ET",
    content: "The celebrity filter is brilliant! I discovered amazing restaurants that my favorite influencers have visited. It's like having insider knowledge about where the cool people eat.",
    rating: 5,
    highlight: "Insider knowledge"
  },
  {
    name: "David Kim",
    role: "Restaurant Owner",
    avatar: "DK",
    content: "I use 34Dish to research what's trending in the food scene. It helps me understand what customers are looking for and which restaurants are getting buzz on social media.",
    rating: 5,
    highlight: "Trending insights"
  },
  {
    name: "Lisa Wang",
    role: "Food Enthusiast",
    avatar: "LW",
    content: "Finally, a platform that combines all my favorite food sources! I love how it shows me trending spots from TikTok and Instagram alongside traditional reviews.",
    rating: 5,
    highlight: "All sources combined"
  },
  {
    name: "Alex Johnson",
    role: "Travel Blogger",
    avatar: "AJ",
    content: "When I'm in a new city, 34Dish helps me find the best local spots quickly. The recommendations are always on point, and I love discovering hidden gems loved by celebrities.",
    rating: 5,
    highlight: "Perfect travel companion"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Loved by Food Lovers
            </span>
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
              Everywhere
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our users say about discovering amazing restaurants through 34Dish&apos;s multi-platform aggregation and personalized recommendations.
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
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              50K+
            </div>
            <div className="text-gray-700">Happy Food Lovers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-gray-700">Platforms Combined</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              10K+
            </div>
            <div className="text-gray-700">Amazing Restaurants</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              4.9★
            </div>
            <div className="text-gray-700">User Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
} 