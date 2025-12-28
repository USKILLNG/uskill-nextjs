import { Plus_Jakarta_Sans } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import { CartProvider } from "@/context/CartContext"; // Import CartProvider
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "USKILL | Master High-Income Skills",
  description: "Nigeria's premier EdTech platform for learning coding, design, and marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans bg-gray-50 text-slate-800 antialiased overflow-x-hidden`}>
        {/* Wrap everything in AuthProvider AND CartProvider */}
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}