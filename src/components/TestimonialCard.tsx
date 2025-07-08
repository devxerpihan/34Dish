import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  highlight: string;
}

export default function TestimonialCard({ name, role, avatar, content, rating, highlight }: TestimonialCardProps) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 hover:border-orange-400/50 transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10 space-y-6">
        {/* Quote Icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
          <Quote className="w-6 h-6 text-white" />
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed text-lg">
          {content}
        </p>

        {/* Highlight */}
        <div className="inline-block bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-600 px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30">
          &ldquo;{highlight}&rdquo;
        </div>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
            {avatar}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 