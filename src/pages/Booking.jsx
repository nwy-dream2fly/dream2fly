import React, { useState } from "react";
import flightImg from "../assets/images/flightBg1.jpg";
import FlightForm from "../components/Booking/FlightForm";
import HotelForm from "../components/Booking/HotelForm";
import AppLoader from "../components/AppLoader";

const Booking = () => {
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState("flights");


  const handleTabSwitch = (tab) => {
    if (activeTab !== tab) {
      setLoading(true);
      setTimeout(() => {
        setActiveTab(tab);
        setLoading(false);
      }, 300); // simulate loading (you can reduce this time)
    }
  };

 return (
  <div
    id="booking"
    className="relative min-h-screen flex justify-center items-center bg-cover bg-center py-14 px-4"
    style={{
      backgroundImage: `url(${flightImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* 🔳 Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-25 z-0 pointer-events-none" />

    {/* Content with higher z-index */}
    <div className="relative z-10 w-full mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
      {/* Heading */}
      <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-[75px] text-white font-extrabold mb-6 sm:mb-8 text-center leading-tight">
        Book Your Dream {activeTab === "flights" ? "Flight" : "Hotel"} Today
      </h1>

      {/* Tab Switcher */}
      <div className="flex items-center justify-center gap-2 sm:gap-2 sm:mb-8 text-base sm:text-lg md:text-xl font-bold text-white border-2 border-white px-2 sm:px-3 py-2 sm:py-3 rounded-md w-fit mx-auto">
        <button
          className={`flex items-center gap-2 transition rounded  ${
            activeTab === "flights"
              ? "text-white bg-red-600 p-3 "
              : "text-white hover:text-red-200"
          }`}
          onClick={() => handleTabSwitch("flights")}
        >
          Flights
        </button>

        <span className="text-white/50 text-xl sm:text-2xl mb-1">| |</span>

        <button
          className={`flex items-center gap-2 transition ${
            activeTab === "hotels"
              ? "text-white bg-red-600 p-3 "
              : "text-white hover:text-sky-200"
          }`}
          onClick={() => handleTabSwitch("hotels")}
        >
          Hotels
        </button>
      </div>

      {/* Loader or Form */}
      {loading ? (
        <AppLoader />
      ) : (
        <div className="w-full max-w-full mx-auto">
          {activeTab === "flights" ? <FlightForm /> : <HotelForm />}
        </div>
      )}
    </div>
  </div>
);
};

export default Booking;
