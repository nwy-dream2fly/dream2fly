
import React from "react";
import { useLocation } from "react-router-dom";
import SearchForm from "../components/SearchForm"; // same form as home
import FlightResults from "../components/FlightResults"; // list view

const FlightResultsPage = () => {
  const location = useLocation();
  const flights = location.state?.flights || [];

  return (
    <div className="pt-24 px-4 bg-gradient-to-b from-blue-900 to-sky-500 min-h-screen">
      {/* Reusable top search bar */}
      <div className="max-w-5xl mx-auto mb-8">
        <SearchForm />
      </div>

      {/* Results */}
      {flights.length > 0 ? (
        <FlightResults flights={flights} />
      ) : (
        <div className="text-white text-center text-xl mt-20">
          No flight data. Please search from the form above.
        </div>
      )}
    </div>
  );
};

export default FlightResultsPage;
