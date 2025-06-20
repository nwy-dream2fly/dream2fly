import React from "react";

const HotelResults = ({ hotels }) => {
  return (
    <div className="mt-6 space-y-4 bg-white/80 p-4 rounded-lg text-black">
      <h3 className="text-xl font-semibold mb-4 text-sky-700">Available Hotels</h3>
      {hotels.map((hotel, idx) => (
        <div key={idx} className="p-4 border rounded bg-gray-100">
          <p><strong>🏨 Name:</strong> {hotel.name}</p>
          <p><strong>📍 Location:</strong> {hotel.location}</p>
          <p><strong>💸 Price/Night:</strong> ₹{hotel.price}</p>
        </div>
      ))}
    </div>
  );
};

export default HotelResults;