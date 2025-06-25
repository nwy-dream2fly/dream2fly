import React, { useState } from "react";
import flightImg from "../assets/images/flight.jpg";
import hotelImg from "../assets/images/hotelImg.jpg";
import FlightForm from '../components/Booking/FlightForm'
import HotelForm from "../components/Booking/HotelForm";

const Booking = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const backgroundImage = activeTab === "flights" ? flightImg : hotelImg;

  return (
    <div
      id="booking"
      className="min-h-screen flex justify-center items-center bg-cover bg-center py-10 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full mx-auto p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-sm">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold mb-6 sm:mb-8 text-center text-white leading-tight">
          Book Your Dream {activeTab === "flights" ? "Flight" : "Hotel"} Today
        </h1>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-base sm:text-lg md:text-xl font-bold text-white bg-orange-950 px-4 sm:px-6 py-3 sm:py-4 rounded-md w-fit mx-auto">
          <button
            className={`transition ${
              activeTab === "flights"
                ? "text-red-400 underline underline-offset-4"
                : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("flights")}
          >
            Flights
          </button>

          <span className="text-white/50 text-xl sm:text-2xl mb-1">| |</span>

          <button
            className={`transition ${
              activeTab === "hotels"
                ? "text-sky-400 underline underline-offset-4"
                : "text-white/80 hover:text-white"
            }`}
            onClick={() => setActiveTab("hotels")}
          >
            Hotels
          </button>
        </div>

        {/* Conditional Forms */}
        <div className="w-full max-w-full mx-auto">
          {activeTab === "flights" ? <FlightForm /> : <HotelForm />}
        </div>
      </div>
    </div>
  );
};

export default Booking;
