"use client";
import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">
          <Navbar />
          <motion.div className="h-full w-full">{children}</motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
