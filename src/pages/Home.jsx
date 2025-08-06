import React, { useState, useEffect } from "react";
import Historicalvideo from "../assets/videos/historical.mp4";
import Spiritualvideo from "../assets/videos/Spiritual.mp4";
import naturevideo from "../assets/videos/nature.mp4";
import adventurevideo from "../assets/videos/adventure.mp4";
import culturalvideo from "../assets/videos/nature.mp4";
import luxuryvideo from "../assets/videos/luxury.mp4";
import wildlifevideo from "../assets/videos/wildlife.mp4";

import "swiper/css";
import "swiper/css/navigation";
import Booking from "./Booking";
import DestinationCarousel from "../components/DestinationCarousel";
import Destinations from "./Destinations";
import PopularPackages from "../components/PopularPackages";
import AboutUs from "./AboutUs";
import TourPlan from "./TourPlan";
import Itineraries from "./Itineraries";

const categories = [
  { name: "Historical", videoSrc: Historicalvideo },
  { name: "Spiritual", videoSrc: Spiritualvideo },
  { name: "Nature", videoSrc: naturevideo },
  { name: "Adventure", videoSrc: adventurevideo },
  { name: "Cultural", videoSrc: culturalvideo },
  { name: "Luxury", videoSrc: luxuryvideo },
  { name: "Wildlife", videoSrc: wildlifevideo },
];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const handleVideoEnd = () => {
    nextVideo();
  };

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % categories.length;
    const video = document.createElement("video");
    video.src = categories[nextIndex].videoSrc;
    video.preload = "auto";
  }, [currentIndex]);

  return (
    <>
      <section className="w-screen h-screen relative overflow-hidden max-w-full">
        {/* Background video */}
        <video
          key={categories[currentIndex].videoSrc}
          autoPlay
          loop={false}
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={categories[currentIndex].videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 100%)",
          }}
        ></div>

        {/* Centered Content */}
        <div className="relative z-20 flex flex-col items-center justify-around h-full text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6">
            {categories[currentIndex].name}
          </h1>

          {/* Prev / Next Buttons */}
          <div className="flex space-x-4 mb-4 sm:mb-6">
            <button
              onClick={prevVideo}
              className="bg-white bg-opacity-30 absolute top-1/2 left-2 sm:left-4 hover:bg-red-500 px-3 sm:px-5 py-2 rounded-full font-semibold transition"
              aria-label="Previous Video"
            >
              <svg
                className="w-6 sm:w-8 h-6 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextVideo}
              className="bg-white bg-opacity-30 absolute top-1/2 right-2 sm:right-4 hover:bg-red-500 px-3 sm:px-5 py-2 rounded-full font-semibold transition"
              aria-label="Next Video"
            >
              <svg
                className="w-6 sm:w-8 h-6 sm:h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-0">
            {categories.map((cat, index) => (
              <button
                key={cat.name}
                onClick={() => setCurrentIndex(index)}
                className={`text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition ${
                  index === currentIndex
                    ? "bg-red-500 text-white"
                    : "bg-white bg-opacity-30 text-white hover:bg-red-500 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Other sections */}
      <Booking />
      <Destinations />
      <PopularPackages />
      <DestinationCarousel />
      <Itineraries />
      <TourPlan />
      <AboutUs />
    </>
  );
};

export default VideoSlider;
