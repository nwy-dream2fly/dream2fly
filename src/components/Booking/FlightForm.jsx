import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TripTypeToggle from "./TripTypeToggle";
import PersonSelector from "./PersonSelector";
//import AuthModal from "../auth/AuthModal";

import { v4 as uuidv4 } from "uuid"; // Optional: for unique IDs
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const FlightForm = () => {
  const handleSwapLocations = () => {
    setFlightForm((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  const navigate = useNavigate();


  const [tripType, setTripType] = useState("single");
  const [showPersonDropdown, setShowPersonDropdown] = useState(false);
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

  const [flights, setFlights] = useState([]);
  const [loadingFlights, setLoadingFlights] = useState(false);

  const handleFlightChange = (e) =>
    setFlightForm({ ...flightForm, [e.target.name]: e.target.value });

  const searchFlights = async () => {
    setLoadingFlights(true);
    setFlights([]); // Clear previous results

    setTimeout(() => {
      const sampleData = Array.from({ length: 10 }, (_, index) => ({
        id: uuidv4(),
        airline: index % 2 === 0 ? "Air India" : "IndiGo",
        from: flightForm.from || "Delhi",
        to: flightForm.to || "Mumbai",
        departure: "2025-07-01T10:00:00",
        arrival: "2025-07-01T12:00:00",
        price: 4000 + index * 200,
        duration: index % 2 === 0 ? "2h 0m" : "2h 45m",
        direct: index % 2 === 0,
      }));

      setFlights(sampleData);
      setLoadingFlights(false);
      navigate("/flights/search", {
        state: {
          flights: sampleData,
          searchParams: flightForm,
        },
      });
    }, 1000);
  };
  console.log("Flights state:", flights);

  return (
  <div className="text-white px-4 sm:px-6 md:px-12 lg:px-20 py-6">
  <TripTypeToggle
    tripType={tripType}
    setTripType={setTripType}
    setFlightForm={setFlightForm}
  />

  {/* Flight Inputs */}
  <div className="flex flex-col md:flex-row flex-wrap md:justify-center gap-4 md:gap-6 my-6">
    {/* From / To Wrapper */}
    <div className="flex flex-col md:flex-row relative gap-4 justify-center">
      {/* From Input */}
      <div className="relative w-full md:w-[250px]">
        <input
          type="text"
          name="from"
          value={flightForm.from}
          onChange={handleFlightChange}
          className="peer w-full px-6 pt-5 pb-2 text-lg font-medium rounded-md text-black focus:outline-none focus:border-red-500 bg-white"
          placeholder="Origin"
        />
        <label className="absolute left-3 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-red-500">
          From
        </label>
      </div>

      {/* To Input */}
      <div className="relative w-full md:w-[250px]">
        <input
          type="text"
          name="to"
          value={flightForm.to}
          onChange={handleFlightChange}
          className="peer w-full px-6 pt-5 pb-2 text-lg font-medium rounded-md text-black focus:outline-none focus:border-red-500 bg-white"
          placeholder="Destination"
        />
        <label className="absolute left-3 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-red-500">
          To
        </label>
      </div>

      {/* Swap Button (absolute center between from/to on larger screens) */}
      <button
        type="button"
        onClick={handleSwapLocations}
        className="w-[40px] absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 right-3 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white border border-red-300 shadow hover:bg-gray-100 transition md:block hidden"
        title="Swap From and To"
      >
        <HiMiniArrowsRightLeft className="text-xl text-red-700" />
      </button>
    </div>

    {/* Departure Date */}
    <div className="relative w-full md:w-[250px]">
      <DatePicker
        selected={flightForm.departureDate}
        onChange={(date) =>
          setFlightForm((prev) => ({ ...prev, departureDate: date }))
        }
        className="peer w-full px-6 pt-5 pb-2 text-lg font-medium rounded-md text-black focus:outline-none bg-white"
        placeholderText=""
      />
      <label className="absolute left-3 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-red-500">
        Departure Date
      </label>
    </div>

    {/* Return Date */}
    <div className="relative w-full md:w-[250px]">
      <DatePicker
        selected={
          flightForm.returnDate ? new Date(flightForm.returnDate) : null
        }
        onChange={(date) =>
          setFlightForm((prev) => ({
            ...prev,
            returnDate: date?.toISOString().split("T")[0] || "",
          }))
        }
        placeholderText=" "
        disabled={tripType === "single"}
        className={`peer w-full px-6 pt-5 pb-2 text-lg font-medium rounded-md text-black focus:outline-none bg-white ${
          tripType === "single" ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />
      <label className="absolute left-3 top-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-red-500">
        Return Date
      </label>
    </div>

    {/* Person Selector */}
    <PersonSelector
      flightForm={flightForm}
      setFlightForm={setFlightForm}
      show={showPersonDropdown}
      setShow={setShowPersonDropdown}
    />

    {/* Travel Class Dropdown */}
    <div className="relative w-full md:w-[250px]">
      <select
        name="travelClass"
        value={flightForm.travelClass}
        onChange={handleFlightChange}
        className="peer w-full appearance-none px-6 pt-4 pb-2 text-lg font-medium rounded-md text-black bg-white border border-gray-300 focus:outline-none"
      >
        <option value=""></option>
        <option value="economy">Economy</option>
        <option value="premiumEconomy">Premium Economy</option>
        <option value="business">Business</option>
        <option value="first">First Class</option>
      </select>
      <HiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
    </div>
  </div>

  {/* Direct Flights Checkbox */}
  <div className="flex justify-center items-center gap-3 text-lg font-medium mb-6">
    <input
      type="checkbox"
      checked={flightForm.directFlight}
      onChange={(e) =>
        setFlightForm({ ...flightForm, directFlight: e.target.checked })
      }
      className="w-5 h-5"
    />
    Direct Flights Only
  </div>

  {/* Search Button */}
  <div className="flex justify-center">
    <button
      onClick={searchFlights}
      disabled={loadingFlights}
      className="btn-red w-full md:w-auto text-lg font-bold px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 transition"
    >
      {loadingFlights ? "Searching..." : "Search Flights"}
    </button>
  </div>
</div>

  );
};

export default FlightForm;
