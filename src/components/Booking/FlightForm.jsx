import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TripTypeToggle from "./TripTypeToggle";
import PersonSelector from "./PersonSelector";

import { useNavigate } from "react-router-dom";
import AuthModal from "../auth/AuthModal";
import { useAuth } from "../../context/AuthContext";
import { v4 as uuidv4 } from "uuid"; // Optional: for unique IDs
import FlightResults from "./FlightResults";


const FlightForm = () => {
  const navigate = useNavigate();
  const [shouldSearchAfterLogin, setShouldSearchAfterLogin] = useState(false);
  const { user, setUser } = useAuth();

  const [showModal, setShowModal] = useState(false);

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
  if (!user) {
    navigate("/login");
    return;
  }

  setLoadingFlights(true);
  setFlights([]); // Clear previous results

  setTimeout(() => {
    const sampleData = Array.from({ length: 10 }, (_, index) => ({
      id: uuidv4(), // or use index + 1
      airline: index % 2 === 0 ? "Air India" : "IndiGo",
      from: flightForm.from || "Delhi",
      to: flightForm.to || "Mumbai",
      departure: "2025-07-01T10:00:00",
      arrival: "2025-07-01T12:00:00",
      price: 4000 + index * 200,
      duration: index % 2 === 0 ? "2h 0m" : "2h 45m",
      direct: index % 2 === 0,
    }));

    console.log("Setting flights:", sampleData);
    setFlights(sampleData);
    setLoadingFlights(false);
  }, 1000);
};

  console.log("Flights state:", flights);

  return (
    <div className="text-white text-center">
      <TripTypeToggle
        tripType={tripType}
        setTripType={setTripType}
        setFlightForm={setFlightForm}
      />

      <div className="flex flex-wrap justify-center gap-6 my-6">
        {/* From */}
        <div className="relative w-[250px]">
          <input
            type="text"
            name="from"
            value={flightForm.from}
            onChange={handleFlightChange}
            className="peer w-full px-4 pt-6 pb-2 text-2xl font-semibold rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500 bg-white"
            placeholder=" "
          />
          <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500">
            From
          </label>
        </div>

        {/* To */}
        <div className="relative w-[250px]">
          <input
            type="text"
            name="to"
            value={flightForm.to}
            onChange={handleFlightChange}
            className="peer w-full px-4 pt-6 pb-2 text-2xl font-semibold rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500 bg-white"
            placeholder=" "
          />
          <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500">
            To
          </label>
        </div>

        {/* Departure Date */}
        <div className="relative w-[250px]">
          <DatePicker
            selected={flightForm.departureDate}
            onChange={(date) =>
              setFlightForm((prev) => ({ ...prev, departureDate: date }))
            }
            className="peer w-full px-4 pt-6 pb-2 text-2xl font-semibold rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500 bg-white"
            placeholderText=" "
          />
          <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500">
            Departure Date
          </label>
        </div>

        {/* Return Date */}
        <div className="relative w-[250px]">
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
            className={`peer w-full px-4 pt-6 pb-2 text-2xl font-semibold rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500 bg-white ${
              tripType === "single" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
          <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500">
            Return Date
          </label>
        </div>

        <PersonSelector
          flightForm={flightForm}
          setFlightForm={setFlightForm}
          show={showPersonDropdown}
          setShow={setShowPersonDropdown}
        />

        {/* Travel Class */}
        <div className="relative w-[250px]">
          <select
            name="travelClass"
            value={flightForm.travelClass}
            onChange={handleFlightChange}
            className="peer w-full px-4 pt-5 pb-2 text-2xl font-semibold rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:border-red-500 bg-white"
          >
            <option value=""></option>
            <option value="economy">Economy</option>
            <option value="premiumEconomy">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
          <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500">
            Travel Class
          </label>
        </div>
      </div>

      {/* Direct Flights Only */}
      <label className="flex justify-center items-center gap-2 text-2xl font-semibold">
        <input
          type="checkbox"
          checked={flightForm.directFlight}
          onChange={(e) =>
            setFlightForm({ ...flightForm, directFlight: e.target.checked })
          }
          className="w-5 h-5"
        />
        Direct Flights Only
      </label>

      {/* Search Button */}
      <button
        onClick={searchFlights}
        disabled={loadingFlights}
        className="btn-red mt-6 text-xl font-bold px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 transition"
      >
        {loadingFlights ? "Searching..." : "Search Flights"}
      </button>

      {/* Debug: Show JSON of Flights */}
  

      {/* Flight Results or Loading/No Data */}
      <div className="mt-8">
        {loadingFlights ? (
          <div className="text-white text-lg">Loading flights...</div>
        ) : flights.length > 0 ? (
          <FlightResults flights={flights} />
        ) : (
          <div className="text-white text-lg">No flight search data found.</div>
        )}
      </div>

      {/* Auth/Login Modal */}
      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLoginSuccess={(loggedInUser) => {
          setUser(loggedInUser);
          localStorage.setItem("dream2flyUser", JSON.stringify(loggedInUser));
          setShowModal(false);

          if (shouldSearchAfterLogin) {
            setShouldSearchAfterLogin(false);
            searchFlights(); // Re-run search
          }
        }}
      />
    </div>
  );
};

export default FlightForm;
