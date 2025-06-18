import React, { useState, useEffect } from "react";
import tajmahalVideo from "../assets/videos/hist.mp4";
import Spiritual from "../assets/videos/kashi.mp4";
import nature from "../assets/videos/nature.mp4";
import adventure from "../assets/videos/adventure.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import paris from "../assets/images/paris.jpg";
import rome from '../assets/images/rome.jpg';
import tokyo from '../assets/images/tokyo.jpg';
import newyork from '../assets/images/newyork.jpg';
import dubai from '../assets/images/dubai.jpg'
import Booking from "./Booking";

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
const topCities = [
  { name: "Paris", img: paris },
  { name: "New York", img: newyork},
  { name: "Tokyo", img: tokyo },
  { name: "Rome", img: rome },
  { name: "Dubai", img:dubai },
];

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
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

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

      {/* Next Section */}
      <section className="w-screen h-screen max-w-full">
        <Swiper
          modules={[Navigation, Autoplay]} // <-- add Autoplay module
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false, // keeps autoplay after user interaction
          }}
          loop={true} // optional: loop back to first slide after the last
          className="w-full h-full"
        >
          {topCities.map((city) => (
            <SwiperSlide key={city.name}>
              <div
                className="w-full h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${city.img})` }}
              >
                <div className="bg-black bg-opacity-50 p-6 rounded text-white text-center">
                  <h2 className="text-4xl font-bold mb-2">{city.name}</h2>
                  <p className="text-lg">Explore the beauty of {city.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Booking />
    </>
  );
};

export default VideoSlider;
