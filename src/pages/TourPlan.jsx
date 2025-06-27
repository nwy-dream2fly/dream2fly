import React from "react";
import { Map, Users } from "lucide-react";
import bgImage from "../assets/images/background.jpg";

import img1 from "../assets/images/tourplan.png";
import img2 from "../assets/images/touristsSelfy.jpg";
import img3 from "../assets/images/touristsGang.jpg";
import traveler from "../assets/images/about-slide-img.png";
import balloon1 from "../assets/images/shape_2.png";
import balloon2 from "../assets/images/shape_4.png";

const TourPlan = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center px-6 py-3"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Floating Balloons */}
      <img
        src={balloon1}
        alt="balloon"
        className="absolute left-[100px] top-30 w-8 md:w-12 animate-float"
      />
      <img
        src={balloon2}
        alt="balloon"
        className="absolute left-12 top-28 w-6 md:w-10 animate-float-slow"
      />

      {/* Floating Traveler */}
      <img
        src={traveler}
        alt="Traveler Illustration"
        className="absolute bottom-2 right-0 w-32 md:w-44 animate-move-left"
        style={{ animation: "moveLeft 6s infinite alternate ease-in-out" }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left - Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={img1}
            alt="Explorer"
            className="col-span-2 w-full h-[650px] object-cover rounded-3xl"
          />
          <img
            src={img2}
            alt="Adventure"
            className="w-full h-[200px] object-cover rounded-xl shadow-md"
          />
          <img
            src={img3}
            alt="Travelers"
            className="w-full h-[200px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right - Content */}
        <div className="text-left">
          <p className="text-3xl text-teal-600 font-mystery mb-2">Let’s Go Together</p>
          <h2 className="text-5xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Plan Your Trip <br /> With Us
          </h2>
          <p className="text-gray-600 mb-8 text-xl">
            Explore unforgettable destinations with tailored experiences.
            Discover, learn, and grow as you travel with top-notch guides and
            premium services.
          </p>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="bg-teal-500 text-white p-3 rounded-full">
                <Map size={20} />
              </span>
              <div>
                <h4 className="text-xl font-semibold">Exclusive Trip</h4>
                <p className="text-xl text-gray-600">
                  Tailored experiences crafted for true explorers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-teal-500 text-white p-3 rounded-full">
                <Users size={20} />
              </span>
              <div>
                <h4 className="text-xl font-semibold">Professional Guide</h4>
                <p className="text-xl text-gray-600">
                  Our team ensures safe and insightful travel everywhere.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-10 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center gap-2 transition-all">
            Learn More →
          </button>
        </div>
      </div>

      {/* Floating animation styles */}
      <style>
        {`
          @keyframes moveLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-200px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite alternate;
          }
          .animate-float-slow {
            animation: float 5s ease-in-out infinite alternate;
          }
          @keyframes float {
            from { transform: translateY(0); }
            to { transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  );
};

export default TourPlan;
