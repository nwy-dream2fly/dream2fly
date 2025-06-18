import React, { useState } from "react";
import flight from "../assets/images/flight.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [showPersonDropdown, setShowPersonDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("flights"); // 'flights' or 'hotels'
  const [tripType, setTripType] = useState("single");

  const [flightForm, setFlightForm] = useState({
    from: "",
    to: "",
    departureDate: new Date(),
    returnDate: "",
    passengers: 1,
    travelClass: "",
    directFlight: false,
    adults: 1,
    children: 0,
  });

  const [hotelForm, setHotelForm] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
  });

  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loadingFlights, setLoadingFlights] = useState(false);
  const [loadingHotels, setLoadingHotels] = useState(false);

  const handleFlightChange = (e) => {
    setFlightForm({ ...flightForm, [e.target.name]: e.target.value });
  };

  const handleHotelChange = (e) => {
    setHotelForm({ ...hotelForm, [e.target.name]: e.target.value });
  };

  const searchFlights = async () => {
    setLoadingFlights(true);
    try {
      const res = await fetch(
        `/api/flights?from=${flightForm.from}&to=${flightForm.to
        }&departureDate=${flightForm.departureDate}&returnDate=${tripType === "round" ? flightForm.returnDate : ""
        }&passengers=${flightForm.passengers}`
      );
      const data = await res.json();
      setFlights(data.flights || []);
    } catch (err) {
      console.error("Flight error:", err);
    } finally {
      setLoadingFlights(false);
    }
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
    <div
      id="booking"
      className="min-h-screen bg-cover bg-center py-10 px-4"
      style={{
        backgroundImage: `url(${flight})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-full mx-auto p-8 rounded-xl">
        <h1 className="text-[75px] font-bold mb-8 text-center">
          Book Your Dream Flight Today
        </h1>

        {/* Flights | Hotels Toggle */}
        <div className="ml-4 sm:ml-10 md:ml-[100px] flex items-center gap-6 mb-8 text-xl font-bold text-white bg-orange-950 px-6 py-4 rounded-md w-fit">
          <button
            className={`transition-colors duration-300 ${activeTab === "flights"
                ? "text-red-400 underline underline-offset-4"
                : "text-white/80 hover:text-white"
              }`}
            onClick={() => setActiveTab("flights")}
          >
            Flights
          </button>

          <span className="text-white/50 text-2xl mb-1">| |</span>

          <button
            className={`transition-colors duration-300 ${activeTab === "hotels"
                ? "text-sky-400 underline underline-offset-4"
                : "text-white/80 hover:text-white"
              }`}
            onClick={() => setActiveTab("hotels")}
          >
            Hotels
          </button>
        </div>
        {/*  Trip Type Buttons */}

        {activeTab === "flights" && (
          <>
            <div className="flex justify-center w-full my-2">
              <button
                className="relative w-64 h-12 rounded-full transition-all duration-300 shadow-md border-2 border-indigo-500 overflow-hidden"
                onClick={() => {
                  if (tripType === "single") {
                    setTripType("round");
                  } else {
                    setTripType("single");
                    setFlightForm((prev) => ({ ...prev, returnDate: "" }));
                  }
                }}
              >
                {/* Background Slider */}
                <span
                  className={`absolute top-[2px] left-1 w-[48%] h-10 rounded-full transition-all duration-300 ${tripType === "single"
                      ? "bg-orange-500 translate-x-0"
                      : "bg-sky-500 translate-x-full"
                    }`}
                ></span>

                {/* Button Texts */}
                <div className="relative z-10 flex justify-between text-white font-semibold px-6 h-full items-center">
                  <span
                    className={`${tripType === "single"
                        ? "text-white"
                        : "text-black font-bold"
                      }`}
                  >
                    One Way
                  </span>
                  <span
                    className={`${tripType === "round"
                        ? "text-white"
                        : "text-black font-bold"
                      }`}
                  >
                    Round Trip
                  </span>
                </div>
              </button>
            </div>
            {/* ✈️ Flight Form */}

            <div className="rounded-lg p-6 mb-10 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4 text-white text-center">
                Search Flights
              </h2>

              <div className="flex flex-wrap justify-center gap-4 mb-6 w-full max-w-full">
                <input
                  type="text"
                  name="from"
                  placeholder="From"
                  className="p-3 border border-orange-950 bg-white/50 text-black placeholder-black rounded focus:outline-none focus:ring-2 font-bold text-lg focus:ring-whitew-[230px] min-w-[246px]"
                  value={flightForm.from}
                  onChange={handleFlightChange}
                />
                <input
                  type="text"
                  name="to"
                  placeholder="To"
                  className="p-3 border border-orange-950 bg-white/50 text-black placeholder-black rounded focus:outline-none focus:ring-2 font-bold text-lg focus:ring-whitew-[230px] min-w-[246px]"
                  value={flightForm.to}
                  onChange={handleFlightChange}
                />
                <DatePicker
                  selected={flightForm.departureDate}
                  onChange={(date) =>
                    setFlightForm((prev) => ({ ...prev, departureDate: date }))
                  }
                  className="p-3 border border-orange-950 bg-white/50 text-black placeholder-black rounded focus:outline-none focus:ring-2 font-bold text-lg focus:ring-white w-[230px] min-w-[246px]"
                  calendarClassName="!bg-white !rounded-lg !shadow-lg"
                  dayClassName={() => "hover:bg-orange-300 rounded"}
                  placeholderText="Departure Date"
                />
                <DatePicker
                  selected={
                    flightForm.returnDate
                      ? new Date(flightForm.returnDate)
                      : null
                  }
                  onChange={(date) =>
                    setFlightForm((prev) => ({
                      ...prev,
                      returnDate: date?.toISOString().split("T")[0] || "",
                    }))
                  }
                  placeholderText="Return Date"
                  disabled={tripType === "single"}
                  className={`p-3 border border-orange-950 bg-white/50 text-black placeholder-black rounded focus:outline-none focus:ring-2 font-bold text-lg focus:ring-white w-[230px] min-w-[246px] ${tripType === "single" ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  calendarClassName="!bg-white !text-black !rounded-lg !shadow-xl"
                  dayClassName={(date) => "hover:bg-orange-400 rounded-full"}
                  dateFormat="yyyy-MM-dd"
                />
                <div className="relative">
                  <button
                    onClick={() => setShowPersonDropdown((prev) => !prev)}
                    type="button"
                    className="p-3 border border-orange-950 bg-white/50 text-black placeholder-black rounded focus:outline-none focus:ring-2 font-bold text-lg focus:ring-whitew-[230px] min-w-[246px] text-left"
                  >
                    {flightForm.adults + flightForm.children} Person
                  </button>

                  {showPersonDropdown && (
                    <div className="absolute z-10 mt-2 w-60 bg-white rounded-lg shadow-lg p-4 text-black space-y-4">
                      {/* Adults */}
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Adults</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              setFlightForm((prev) => ({
                                ...prev,
                                adults: Math.max(1, prev.adults - 1),
                              }))
                            }
                            className="px-2 py-1 bg-orange-500 text-white rounded"
                          >
                            -
                          </button>
                          <span>{flightForm.adults}</span>
                          <button
                            onClick={() =>
                              setFlightForm((prev) => ({
                                ...prev,
                                adults: prev.adults + 1,
                              }))
                            }
                            className="px-2 py-1 bg-orange-500 text-white rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Children</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              setFlightForm((prev) => ({
                                ...prev,
                                children: Math.max(0, prev.children - 1),
                              }))
                            }
                            className="px-2 py-1 bg-orange-500 text-white rounded"
                          >
                            -
                          </button>
                          <span>{flightForm.children}</span>
                          <button
                            onClick={() =>
                              setFlightForm((prev) => ({
                                ...prev,
                                children: prev.children + 1,
                              }))
                            }
                            className="px-2 py-1 bg-orange-500 text-white rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Apply Button */}
                      <div className="text-right">
                        <button
                          onClick={() => {
                            const total =
                              flightForm.adults + flightForm.children;
                            setFlightForm((prev) => ({
                              ...prev,
                              passengers: total,
                            }));
                            setShowPersonDropdown(false);
                          }}
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <select
                  name="travelClass"
                  value={flightForm.travelClass}
                  onChange={handleFlightChange}
                  className="p-3 border border-orange-950 bg-white/50 text-black placeholder-black rounded focus:outline-none focus:ring-2 font-bold text-lg focus:ring-whitew-[230px] min-w-[246px]"
                >
                  <option value="" className="text-black">
                    Select Class
                  </option>
                  <option value="economy" className="text-black">
                    Economy
                  </option>
                  <option value="premiumEconomy" className="text-black">
                    Premium Economy
                  </option>
                  <option value="business" className="text-black">
                    Business
                  </option>
                  <option value="first" className="text-black">
                    First Class
                  </option>
                </select>
              </div>

              <label className="flex items-center gap-2 text-white font-bold text-lg mt-2 pb-6">
                <input
                  type="checkbox"
                  name="directFlight"
                  checked={flightForm.directFlight}
                  onChange={(e) =>
                    setFlightForm((prev) => ({
                      ...prev,
                      directFlight: e.target.checked,
                    }))
                  }
                  className="accent-orange-600 w-5 h-5"
                />
                <span>Direct Flights Only</span>
              </label>

              <button
                onClick={searchFlights}
                disabled={loadingFlights}
                className={`relative px-8 py-3 mt-4 rounded-full font-extrabold text-lg transition-all duration-300
                    ${loadingFlights
                    ? "bg-red-400 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 shadow-lg hover:shadow-xl"
                  }`}
              >
                {loadingFlights ? "Searching..." : "Search Flights"}
              </button>

              {flights.length > 0 && (
                <div className="mt-6 space-y-4 w-full max-w-6xl">
                  {flights.map((flight, idx) => (
                    <div key={idx} className="p-4 border rounded bg-gray-100">
                      <p>
                        <strong>Airline:</strong> {flight.airline}
                      </p>
                      <p>
                        <strong>Departure:</strong> {flight.departure}
                      </p>
                      <p>
                        <strong>Arrival:</strong> {flight.arrival}
                      </p>
                      <p>
                        <strong>Price:</strong> ₹{flight.price}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* 🏨 Hotel Form */}
        {activeTab === "hotels" && (
          <div className="rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-sky-600">
              Search Hotels
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="p-3 border rounded"
                value={hotelForm.city}
                onChange={handleHotelChange}
              />
              <input
                type="date"
                name="checkIn"
                className="p-3 border rounded"
                value={hotelForm.checkIn}
                onChange={handleHotelChange}
              />
              <input
                type="date"
                name="checkOut"
                className="p-3 border rounded"
                value={hotelForm.checkOut}
                onChange={handleHotelChange}
              />
            </div>

            <button
              onClick={searchHotels}
              className="bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-700"
            >
              {loadingHotels ? "Searching..." : "Search Hotels"}
            </button>

            {hotels.length > 0 && (
              <div className="mt-6 space-y-4">
                {hotels.map((hotel, idx) => (
                  <div key={idx} className="p-4 border rounded bg-gray-100">
                    <p>
                      <strong>Name:</strong> {hotel.name}
                    </p>
                    <p>
                      <strong>Location:</strong> {hotel.location}
                    </p>
                    <p>
                      <strong>Price/Night:</strong> ₹{hotel.price}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
