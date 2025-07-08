# 34Dish - Landing Page

A modern, responsive landing page for 34Dish - your personalized dining companion that aggregates restaurant recommendations from multiple platforms including Grab Dine-Out, Google Maps, Instagram, TikTok, and more.

## ✨ Features

- **Modern Design**: Clean, creative, and intuitive UI/UX with enterprise-grade design standards
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and React 19 for optimal performance
- **SEO Ready**: Optimized meta tags and OpenGraph data
- **Smooth Animations**: Interactive elements with smooth transitions
- **Accessibility**: WCAG compliant design with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter & Poppins (Google Fonts)
- **Icons**: Emoji-based for better performance
- **Deployment Ready**: Optimized for Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone or download the project
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
34Dish/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Tailwind imports
│   │   ├── layout.tsx       # Root layout with fonts and metadata
│   │   └── page.tsx         # Main landing page
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design Features

### Color Palette
- **Primary**: Orange to Red gradient (`from-orange-500 to-red-500`)
- **Secondary**: Blue to Indigo gradient (`from-blue-500 to-indigo-500`)
- **Accent**: Purple to Pink gradient (`from-purple-500 to-pink-500`)
- **Neutral**: Slate color palette for text and backgrounds

### Typography
- **Primary Font**: Inter (body text, UI elements)
- **Display Font**: Poppins (headings, emphasis)

### Sections
1. **Navigation**: Sticky header with brand logo and navigation links
2. **Hero Section**: Compelling headline with animated demo card
3. **Features**: 6-card grid showcasing platform capabilities
4. **How It Works**: 3-step process explanation
5. **Testimonials**: Social proof with user reviews
6. **CTA**: Final call-to-action with sign-up form
7. **Footer**: Links and company information

## 🔧 Customization

### Adding New Sections
1. Create a new section in `src/app/page.tsx`
2. Follow the existing pattern for consistent styling
3. Use the established color scheme and spacing

### Modifying Styles
- Global styles: `src/app/globals.css`
- Component styles: Inline Tailwind classes
- Custom utilities: `tailwind.config.ts`

### Updating Content
- Text content: Edit directly in `src/app/page.tsx`
- Meta tags: Update in `src/app/layout.tsx`
- Images: Add to `public/` directory and import

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 📱 Platform Features Highlighted

- **Multi-Platform Aggregation**: Grab, Google Maps, Instagram, TikTok
- **Celebrity Picks**: Filter by celebrity and influencer visits
- **Personalized Filters**: Customizable preferences
- **Real-time Updates**: Live recommendations and deals
- **Social Integration**: Instagram and TikTok integration
- **Deals & Offers**: Comprehensive promotion tracking

## 📧 Contact & Support

For questions about the landing page or 34Dish platform:
- Website: [Your website]
- Email: [Your email]
- Social: [Your social links]

---

Made with ❤️ for food lovers everywhere | © 2024 34Dish
