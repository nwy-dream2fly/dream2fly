import React, { useState, useEffect } from "react";
import destinations from "../data/destinations";
import bgImage from "../assets/images/background.jpg";

const DestinationCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const mediaQuery = window.matchMedia("(max-width: 639px)");

    // Initial check
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);

    // Listen to viewport change
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleItems = () => {
    const range = isMobile ? [0] : [-2, -1, 0, 1, 2];
    return range.map((offset) => {
      const index =
        (activeIndex + offset + destinations.length) % destinations.length;
      return {
        ...destinations[index],
        offset,
        isCenter: offset === 0,
      };
    });
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % destinations.length);
  };

  return (
    <div
      className="relative top-[10%] left-1/2 transform -translate-x-1/2 text-center w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-yellow-500 primary-header">
        Best Travel Spots
      </h2>
      <p className="text-yellow-500 text-2xl font-medium mb-16">Top Destinations Loved by Travelers</p>

      {isClient && (
        <div className="relative w-full max-w-[1500px] h-[420px] sm:h-[500px] md:h-[580px] lg:h-[630px] xl:h-[680px] flex justify-center items-center perspective-[1000px] mx-auto">
          {getVisibleItems().map((item) => {
            const offset = item.offset;
            const abs = Math.abs(offset);
            const zIndex = 100 - abs;
            const translateX = offset * 250;
            const scale = offset === 0 ? 1 : abs === 1 ? 0.9 : 0.8;
            const translateZ = abs === 2 ? -60 : abs === 1 ? -40 : 0;
            const blur = offset === 0 ? "blur-0" : "blur-[3.5px]";
            const opacity =
              offset === 2
                ? "opacity-90"
                : offset === 1
                ? "opacity-98"
                : "opacity-100";

            return (
              <div
                key={item.title}
                onClick={() =>
                  setActiveIndex(
                    (activeIndex + offset + destinations.length) %
                      destinations.length
                  )
                }
                className={`absolute top-0 transition-all duration-700 ease-in-out filter ${blur} ${opacity} cursor-pointer 
                   ${isMobile && offset !== 0 ? "hidden" : ""}
                  left-1/2 sm:left-1/2
                  w-[90vw] sm:w-[360px] md:w-[420px] lg:w-[460px]
                     h-[420px] sm:h-[500px] md:h-[580px] lg:h-[650px]`}
                style={{
                  zIndex,
                  transform: isMobile
                    ? `translateX(-50%) scale(1)`
                    : `translateX(-50%) translate3d(${translateX}px, 0, ${translateZ}px) scale(${scale})`,
                  willChange: "transform, opacity, filter",
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black bg-opacity-50 text-white rounded-lg px-3 py-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm">
                        {item.listing} Listings
                      </p>
                    </div>
                    {item.isCenter && (
                      <button className="text-xs sm:text-sm border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition">
                        View All →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Navigation Buttons */}
         <div className="mt-2 flex justify-center gap-8 pb-16">
          <button
            onClick={goPrev}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            ◀
          </button>
          <button
            onClick={goNext}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            ▶
          </button>
        </div>
    
    </div>
  );
};

export default DestinationCarousel;
