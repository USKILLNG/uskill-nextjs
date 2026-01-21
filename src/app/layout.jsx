import { Plus_Jakarta_Sans } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import { CartProvider } from "@/context/CartContext";
import { NotificationProvider } from "@/context/NotificationContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL('https://uskill.ng'), // Replace with actual domain when live
  title: {
    default: "USKILL.NG | Master High-Income Skills",
    template: "%s | USKILL.NG"
  },
  description: "Nigeria's premier EdTech platform for learning coding, design, and marketing. Join thousands of students mastering their craft today.",
  keywords: ["online courses", "nigeria", "coding", "web development", "learn react", "digital marketing", "uskill"],
  authors: [{ name: "USKILL Team" }],
  creator: "USKILL.NG",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://uskill.ng",
    title: "USKILL.NG | Master High-Income Skills",
    description: "Nigeria's premier EdTech platform. Learn from industry experts and advance your career.",
    siteName: "USKILL.NG",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "USKILL.NG Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "USKILL.NG | Master High-Income Skills",
    description: "Nigeria's premier EdTech platform for learning coding, design, and marketing.",
    images: ["/og-image.jpg"],
    creator: "@uskillng",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans bg-gray-50 text-slate-800 antialiased overflow-x-hidden`}>
        <AuthProvider>
          <CartProvider>
            <NotificationProvider>
                <Navbar />
                <main className="min-h-screen pt-20">
                  {children}
                </main>
                <Footer />
            </NotificationProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}