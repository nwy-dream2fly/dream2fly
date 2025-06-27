import React, { useState, useEffect } from "react";
import tajmahalVideo from "../assets/videos/hist.mp4";
import Spiritual from "../assets/videos/kashi.mp4";
import nature from "../assets/videos/nature.mp4";
import adventure from "../assets/videos/adventure.mp4";

import "swiper/css";
import "swiper/css/navigation";
import Booking from "./Booking";
import DestinationCarousel from "../components/DestinationCarousel";
import Destinations from "./Destinations";
import PopularPackages from "../components/PopularPackages";
import AboutUs from "./AboutUs";
import TourPlan from "./TourPlan";

// Optional: A fallback/placeholder video (e.g., a still background or loop)
const placeholderVideo = tajmahalVideo;

const categories = [
  { name: "Historical", videoSrc: tajmahalVideo },
  { name: "Spiritual", videoSrc: Spiritual },
  { name: "Nature", videoSrc: nature },
  { name: "Adventure", videoSrc: adventure },
  { name: "Cultural", videoSrc: placeholderVideo },
  { name: "Luxury", videoSrc: placeholderVideo },
  { name: "Wildlife", videoSrc: placeholderVideo },
];

// Sample city images (you should replace with real image imports)

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  const handleVideoEnd = () => {
    nextVideo();
  };

  useEffect(() => {
    // Preload next video
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
       

        {/* Centered Content */}
        <div className="relative z-20 flex flex-col items-center justify-around h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-6">
            {categories[currentIndex].name}
          </h1>

          {/* Prev / Next Buttons */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={prevVideo}
              className="bg-white bg-opacity-30 top-1/2 left-4 absolute hover:bg-red-500 px-5 py-2 rounded-full font-semibold transition"
              aria-label="Previous Video"
            >
              <svg
                className="w-[32px] h-[32px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextVideo}
              className="absolute top-1/2 right-4 bg-white bg-opacity-30 hover:bg-red-500 px-5 py-2 rounded-full font-semibold transition"
              aria-label="Next Video"
            >
              <svg
                className="w-[32px] h-[32px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Category Selection Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, index) => (
              <button
                key={cat.name}
                onClick={() => setCurrentIndex(index)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
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
      <Destinations />
      <PopularPackages />   
      <DestinationCarousel />
      <TourPlan />
      <AboutUs />
      <Booking />
    </>
  );
};

export default VideoSlider;
