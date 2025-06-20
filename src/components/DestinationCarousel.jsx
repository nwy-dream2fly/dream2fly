import React, { useState, useEffect } from "react";
import destinations from "../data/destinations";
import bgImage from '../assets/images/trave-5.jpg';

const DestinationCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

const getVisibleItems = () => {
  const range = [-2, -1, 0, 1, 2];

  return range.map((offset) => {
    const index = (activeIndex + offset + destinations.length) % destinations.length;
    return {
      ...destinations[index],
      offset,
      isCenter: offset === 0
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
    <div className="w-full mx-auto py-20 px-4 relative overflow-visible justify-center bg-cover bg-center -z-10"
      style={{ backgroundImage: `url(${bgImage})` }}>
       
      <h2 className="text-4xl font-bold text-center mb-14">
        Popular Destination
      </h2>

      <div className="relative w-full max-w-[1500px] h-[630px] flex justify-center items-center perspective-[1000px] mx-auto">
        {getVisibleItems().map((item, idx) => {
          const offset = item.offset;
          const abs = Math.abs(offset);

          // Adjusted settings for smoother and proportional layout
          const zIndex = 100 - abs;
          const translateX = offset * 260; // slide spacing
          const scale = offset === 0 ? 1 : abs === 1 ? 0.9 : 0.8;
         const translateZ = abs === 2 ? -60 : abs === 1 ? -40 : 0;
          const blur = offset === 0 ? "blur-0" : "blur-[3.5px]";
const opacity = offset === 2 ? "opacity-90" : offset === 1 ? "opacity-98" : "opacity-100";

          return (
            <div
              key={item.title}
              onClick={() =>
                setActiveIndex(
                  (activeIndex + offset + destinations.length) %
                    destinations.length
                )
              }
              className={`absolute top-0 left-1/2 transition-all duration-700 ease-in-out filter ${blur} ${opacity} cursor-pointer`}
              style={{
                zIndex,
                transform: `translate3d(${translateX - 190}px, 0, ${translateZ}px) scale(${scale})`,
                width: "450px",
                height: "620px",
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
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm">{item.listing} Listings</p>
                  </div>
                  {item.isCenter && (
                    <button className="text-sm border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition">
                      View All →
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10 flex justify-center gap-8">
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
