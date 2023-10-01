"use client";
import Header from "@/components/header";
import Carousel from "../components/Carousel";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Service from "../components/Service";
import WhoWeAre from "../components/WhoWeAre";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Service queryNumber={4} />
      <WhoWeAre />
      <CoreValues />
      <Reviews />
      <Footer />
    </div>
  );
}
