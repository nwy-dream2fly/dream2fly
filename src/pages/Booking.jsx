import React, { useState } from "react";
import flightImg from "../assets/images/flight.jpg";
import hotelImg from "../assets/images/hotelImg.jpg";
import FlightForm from "../components/Booking/FlightForm";
import HotelForm from "../components/Booking/HotelForm";


const Booking = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const backgroundImage = activeTab === "flights" ? flightImg : hotelImg;

  return (
    <div id="booking"
      className="min-h-screen bg-cover bg-center py-10 px-4 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-full mx-auto p-8 rounded-xl">
        <h1 className="text-[75px] font-bold mb-8 text-center text-white">
          Book Your Dream Flight Today
        </h1>

        {/* Tab Switcher */}
        <div className="flex items-center gap-6 mb-8 text-xl font-bold text-white bg-orange-950 px-6 py-4 rounded-md w-fit mx-auto">
          <button
            className={`${activeTab === "flights"
              ? "text-red-400 underline underline-offset-4"
              : "text-white/80 hover:text-white"
              }`}
            onClick={() => setActiveTab("flights")}
          >
            Flights
          </button>

          <span className="text-white/50 text-2xl mb-1">| |</span>

          <button
            className={`${activeTab === "hotels"
              ? "text-sky-400 underline underline-offset-4"
              : "text-white/80 hover:text-white"
              }`}
            onClick={() => setActiveTab("hotels")}
          >
            Hotels
          </button>
        </div>

        {/* Conditional Forms */}
        {activeTab === "flights" ? <FlightForm /> : <HotelForm />}
      </div>
    </div>
  );
};

export default Booking;
