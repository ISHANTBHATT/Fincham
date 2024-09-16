"use client";
import Carousel from "./Components/Carousel";
import InfoContainer from "./Components/InfoContainer";
import MemberCarousel from "./Components/MemberCarousel";
import EventsContainer from "./Components/EventsContainer";
import Partner from "./Components/Partner";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Carousel />
      <InfoContainer />
      <MemberCarousel />
      <EventsContainer />
      <Partner />
    </main>
  );
}
