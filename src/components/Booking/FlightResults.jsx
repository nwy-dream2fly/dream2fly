import React from "react";

const FlightResults = ({ flights }) => {
  return (
    <div className="mt-6 space-y-4 w-full max-w-6xl mx-auto text-black bg-white/80 p-4 rounded">
      <h3 className="text-xl font-bold mb-4">Available Flights</h3>
      {flights.map((flight, idx) => (
        <div key={idx} className="p-4 border rounded bg-gray-100">
          <p><strong>✈️ Airline:</strong> {flight.airline}</p>
          <p><strong>🕒 Departure:</strong> {flight.departure}</p>
          <p><strong>🛬 Arrival:</strong> {flight.arrival}</p>
          <p><strong>💰 Price:</strong> ₹{flight.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;