import React from "react";
import { Map, Sparkles, CalendarClock, MountainSnow } from "lucide-react";
import bgImage from "../assets/images/background.jpg";

import img1 from "../assets/images/tourplan.png";
import img2 from "../assets/images/touristsSelfy.jpg";
import img3 from "../assets/images/touristsGang.jpg";
import balloon1 from "../assets/images/shape_2.png";

const TourPlan = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center px-4 sm:px-6 py-10 sm:py-16 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Floating Balloon */}
      <img
        src={balloon1}
        alt="balloon"
        className="absolute right-10 top-6 w-6 sm:w-10 md:w-12 animate-float"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center max-w-7xl mx-auto">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <img
            src={img1}
            alt="Explorer"
            className="col-span-2 w-full h-[400px] sm:h-[500px] md:h-[650px] object-cover rounded-2xl sm:rounded-3xl"
          />
          <img
            src={img2}
            alt="Adventure"
            className="w-full h-[120px] sm:h-[180px] md:h-[200px] object-cover rounded-lg shadow-md"
          />
          <img
            src={img3}
            alt="Travelers"
            className="w-full h-[120px] sm:h-[180px] md:h-[200px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="text-left">
          <p className="text-3xl sm:text-4xl md:text-6xl text-teal-600 mb-4 sm:mb-5 font-extrabold leading-tight">
            Let’s Go Together
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 leading-snug">
            Plan Your Trip <br /> With Us
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
            Explore unforgettable destinations with tailored experiences.
            Discover, learn, and grow as you travel with top-notch guides and
            premium services.
          </p>

          {/* Features */}
          <div className="space-y-5 sm:space-y-6">
            {[ 
              { icon: <Map size={20} />, title: "Exclusive Trip", desc: "Tailored experiences crafted for true explorers." },
              { icon: <Sparkles size={20} />, title: "Memorable Moments", desc: "We craft every journey with special touches and unforgettable experiences you'll cherish for a lifetime." },
              { icon: <CalendarClock size={20} />, title: "Seamless Planning", desc: "Enjoy stress-free journeys with our end-to-end travel management." },
              { icon: <MountainSnow size={20} />, title: "Authentic Adventures", desc: "Discover hidden gems and unforgettable moments off the beaten path." }
            ].map(({ icon, title, desc }, index) => (
              <div className="flex items-start gap-3 sm:gap-4" key={index}>
                <span className="bg-teal-500 text-white p-2 sm:p-3 rounded-full">
                  {icon}
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold">{title}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center sm:justify-start">
            <button className="btn-primary mt-8 px-6 py-3 text-sm sm:text-base">
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* Floating animation styles */}
      <style>
        {`
          @keyframes float {
            from { transform: translateY(0); }
            to { transform: translateY(-40px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite alternate;
          }
        `}
      </style>
    </section>
  );
};

export default TourPlan;
