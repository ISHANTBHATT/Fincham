"use client";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useScroll } from "framer-motion";
// import Layout from "./Components/Layout";
import Transition from "./Components/Transition";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import HomeContainer from "./Components/HomeContainer";
import InfoContainer from "./Components/InfoContainer";
import MemberCarousel from "./Components/MemberCarousel";
import EventsContainer from "./Components/EventsContainer";
import Footer from "./Components/Footer";
import Partner from "./Components/Partner";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

    //   </div>
    // </main>
    <main className="w-full min-h-screen">
      {/* <Navbar bg={false} value={680} /> */}
      <Carousel />
      <InfoContainer />
      <MemberCarousel />
      <EventsContainer />
      <Partner />
      {/* <Footer /> */}
    </main>
  );
}
