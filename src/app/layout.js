// "use client";
import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export const metadata = {
  title: "FINCHAM INDIA | Finland Chamber of Commerce in India",
  description:
    "“The “Finland Chamber of Commerce in India” (“FINCHAM India”) was incorporated as a Section 8 Company on February 28, 2018, with the primary purpose of inter alia: promoting and deepening commercial and industrial ties, trade, economic, social and cultural relations between India and Finland.”",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <AnimatePresence mode="wait"> */}
        <Navbar />
        <div className="h-full w-full">{children}</div>
        {/* </AnimatePresence> */}
        <Footer />
      </body>
    </html>
  );
}
