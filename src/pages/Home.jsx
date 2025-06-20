import React, { useState, useEffect } from "react";
import tajmahalVideo from "../assets/videos/hist.mp4";
import Spiritual from "../assets/videos/kashi.mp4";
import nature from "../assets/videos/nature.mp4";
import adventure from "../assets/videos/adventure.mp4";

import "swiper/css";
import "swiper/css/navigation";

// import paris from "../assets/images/paris.jpg";
// import rome from "../assets/images/rome.jpg";
// import tokyo from "../assets/images/tokyo.jpg";
// import newyork from "../assets/images/newyork.jpg";
// import dubai from "../assets/images/dubai.jpg";
import Booking from "./Booking";
import DestinationCarousel from "../components/DestinationCarousel";

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
      {/* <section className="w-screen h-screen max-w-full">
        <div
          id="default-carousel"
          class="relative w-full"
          data-carousel="slide"
        >
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="paris"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-2.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-3.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-4.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-5.svg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>

          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>

          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section> */}
      <DestinationCarousel />

      <Booking />
    </>
  );
};

export default VideoSlider;
