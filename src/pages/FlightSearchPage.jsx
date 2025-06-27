import React from "react";
import { useLocation } from "react-router-dom";
import FlightResults from "../components/Booking/FlightResults";
import FlightForm from "../components/Booking/FlightForm";
import bgImage from '../assets/images/bg-full.jpg'

const FlightSearchPage = () => {
  const { state } = useLocation();
  const flights = state?.flights || [];
  const searchParams = state?.searchParams;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-4 pt-6 pb-20 "
    style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Top booking form like Booking.jsx */}
      <div className="bg-orange-200 rounded-xl shadow-md p-6 sticky z-30 mt-14">
        <FlightForm defaultForm={searchParams} />
      </div>

      {/* Results below */}
      <div className="mt-10">
        {flights.length > 0 ? (
          <FlightResults flights={flights} />
        ) : (
          <div className="text-center text-xl text-gray-600 mt-6">
            No flights found. Please search again.
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightSearchPage;
