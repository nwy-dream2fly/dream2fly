import React from "react";

const FlightResults = ({ flights }) => {
  if (!flights || flights.length === 0) {
    return <div>No flights found.</div>;
  }

  return (
    <div className="mt-8 max-h-[80vh] overflow-y-auto space-y-6 pr-2">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="bg-white text-black rounded-xl shadow-lg p-6 max-w-7xl mx-auto border border-gray-200"
        >
          <div className="flex justify-between items-center flex-wrap gap-2">
            {/* Airline & Route */}
            <div className="flex flex-col w-[200px]">
              <h2 className="text-lg font-semibold text-blue-600">
                {flight.airline}
              </h2>
              <p className="text-sm text-gray-500">
                {flight.from} → {flight.to}
              </p>
              {flight.direct && (
                <span className="text-green-600 text-xs mt-1 font-medium">
                  Direct Flight
                </span>
              )}
            </div>

            {/* Departure & Arrival */}
            <div className="flex items-center justify-between w-[300px]">
              <div className="text-center">
                <p className="text-lg font-bold">
                  {new Date(flight.departure).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(flight.departure).toLocaleDateString()}
                </p>
              </div>

              {/* Duration */}
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">
                  {flight.duration}
                </p>
                <div className="w-16 h-px bg-gray-400 mx-auto my-1" />
                <p className="text-xs text-gray-500">Duration</p>
              </div>

              <div className="text-center">
                <p className="text-lg font-bold">
                  {new Date(flight.arrival).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(flight.arrival).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="w-[200px] flex flex-col items-center justify-center text-center">
              <p className="text-xl font-bold text-red-600">₹{flight.price}</p>
              <button className="mt-2 w-full px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;
