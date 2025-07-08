import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "34Dish - Discover Amazing Dining Experiences",
  description: "Your personalized dining companion that aggregates recommendations from Grab, Google Maps, Instagram, TikTok and more. Find restaurants visited by celebrities and tailored to your preferences.",
  keywords: ["dining", "restaurants", "food", "recommendations", "celebrity restaurants", "grab", "google maps"],
  authors: [{ name: "34Dish Team" }],
  openGraph: {
    title: "34Dish - Discover Amazing Dining Experiences",
    description: "Your personalized dining companion that aggregates recommendations from multiple sources",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
