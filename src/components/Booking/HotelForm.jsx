import React, { useState } from "react";
import HotelResults from "./HotelResults";

const HotelForm = () => {
  const [hotelForm, setHotelForm] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
  });

  const [hotels, setHotels] = useState([]);
  const [loadingHotels, setLoadingHotels] = useState(false);

  const handleChange = (e) => {
    setHotelForm({ ...hotelForm, [e.target.name]: e.target.value });
  };

  const searchHotels = async () => {
    setLoadingHotels(true);
    try {
      const res = await fetch(
        `/api/hotels?city=${hotelForm.city}&checkIn=${hotelForm.checkIn}&checkOut=${hotelForm.checkOut}`
      );
      const data = await res.json();
      setHotels(data.hotels || []);
    } catch (err) {
      console.error("Hotel error:", err);
    } finally {
      setLoadingHotels(false);
    }
  };

  return (
    <div className="rounded-lg shadow-md p-6 bg-white/80 text-black">
      <h2 className="text-xl font-semibold mb-4 text-sky-600 text-center">
        Search Hotels
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="city"
          placeholder="City"
          className="p-3 border rounded"
          value={hotelForm.city}
          onChange={handleChange}
        />
        <input
          type="date"
          name="checkIn"
          className="p-3 border rounded"
          value={hotelForm.checkIn}
          onChange={handleChange}
        />
        <input
          type="date"
          name="checkOut"
          className="p-3 border rounded"
          value={hotelForm.checkOut}
          onChange={handleChange}
        />
      </div>

      <div className="text-center">
        <button
          onClick={searchHotels}
          className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700"
        >
          {loadingHotels ? "Searching..." : "Search Hotels"}
        </button>
      </div>

      {hotels.length > 0 && <HotelResults hotels={hotels} />}
    </div>
  );
};

export default HotelForm;