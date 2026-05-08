import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simbi Technologies | Next-Gen Engineering Hub",
  description: "Innovative Software Solutions for the Digital Age. We architect high-performance digital ecosystems that drive global transformation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      </head>
      <body className={inter.className}>
        <Preloader />
        <div className="scroll-progress"></div>
        <Header />
        {children}
        <Footer />
        
        {/* Scroll to Top Button */}
        <div className="scroll-to-top">
            <i className="fas fa-arrow-up"></i>
        </div>
      </body>
    </html>
  );
}
