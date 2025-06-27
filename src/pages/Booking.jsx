import React, { useState } from "react";
import flightImg from "../assets/images/flight.jpg";
//import hotelImg from "../assets/images/hotelImg.jpg";
import FlightForm from "../components/Booking/FlightForm";
import HotelForm from "../components/Booking/HotelForm";
import flightIcon from "../assets/images/flight.svg";
import HotelIcon from "../assets/images/hotelIcon.svg";
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
      }, 500); // simulate loading (you can reduce this time)
    }
  };

  return (
    <div
      id="booking"
      className="min-h-screen flex justify-center items-center bg-cover bg-center py-10 px-4"
      style={{
        backgroundImage: `url(${flightImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full mx-auto p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-sm">
        {/* Heading */}
        <h1 className="font-mystery text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold mb-6 sm:mb-8 text-center text-white leading-tight">
          Book Your Dream {activeTab === "flights" ? "Flight" : "Hotel"} Today
        </h1>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-base sm:text-lg md:text-3xl font-bold text-white border-4 border-white px-4 sm:px-6 py-3 sm:py-4 rounded-md w-fit mx-auto">
          <button
            className={`flex items-center gap-2 transition ${
              activeTab === "flights"
                ? "text-red-800 underline underline-offset-4"
                : "text-white hover:text-white"
            }`}
            onClick={() => handleTabSwitch("flights")}
          >
            <img src={flightIcon} alt="Flight" className="w-36 h-10" />
            Flights
          </button>

          <span className="text-white/50 text-xl sm:text-2xl mb-1">| |</span>

          <button
            className={`flex items-center gap-2 transition ${
              activeTab === "hotels"
                ? "text-sky-800 underline underline-offset-4"
                : "text-white hover:text-white"
            }`}
            onClick={() => handleTabSwitch("hotels")}
          >
            Hotels
            <img src={HotelIcon} alt="Flight" className="w-20 h-16" />
          </button>
        </div>

        {/* Conditional Forms */}
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
