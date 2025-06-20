import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TripTypeToggle from "./TripTypeToggle";
import PersonSelector from "./PersonSelector";
import FlightResults from "./FlightResults";

const FlightForm = () => {
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
    try {
      const res = await fetch(
        `/api/flights?from=${flightForm.from}&to=${flightForm.to}&departureDate=${flightForm.departureDate}&returnDate=${tripType === "round" ? flightForm.returnDate : ""}&passengers=${flightForm.passengers}`
      );
      const data = await res.json();
      setFlights(data.flights || []);
    } catch (err) {
      console.error("Flight error:", err);
    } finally {
      setLoadingFlights(false);
    }
  };

  return (
    <div className="text-white text-center">
      <TripTypeToggle tripType={tripType} setTripType={setTripType} setFlightForm={setFlightForm} />

      <div className="flex flex-wrap justify-center gap-4 my-6">
        <input
          type="text"
          name="from"
          placeholder="From"
          value={flightForm.from}
          onChange={handleFlightChange}
          className="flight-input"
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={flightForm.to}
          onChange={handleFlightChange}
          className="flight-input"
        />
        <DatePicker
          selected={flightForm.departureDate}
          onChange={(date) =>
            setFlightForm((prev) => ({ ...prev, departureDate: date }))
          }
          className="flight-input"
        />
        <DatePicker
          selected={flightForm.returnDate ? new Date(flightForm.returnDate) : null}
          onChange={(date) =>
            setFlightForm((prev) => ({
              ...prev,
              returnDate: date?.toISOString().split("T")[0] || "",
            }))
          }
          placeholderText="Return Date"
          disabled={tripType === "single"}
          className={`flight-input ${tripType === "single" ? "opacity-50 cursor-not-allowed" : ""}`}
        />
        <PersonSelector
          flightForm={flightForm}
          setFlightForm={setFlightForm}
          show={showPersonDropdown}
          setShow={setShowPersonDropdown}
        />
        <select
          name="travelClass"
          value={flightForm.travelClass}
          onChange={handleFlightChange}
          className="flight-input"
        >
          <option value="">Select Class</option>
          <option value="economy">Economy</option>
          <option value="premiumEconomy">Premium Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>
      </div>

      <label className="flex justify-center items-center gap-2">
        <input
          type="checkbox"
          checked={flightForm.directFlight}
          onChange={(e) => setFlightForm({ ...flightForm, directFlight: e.target.checked })}
        />
        Direct Flights Only
      </label>

      <button
        onClick={searchFlights}
        disabled={loadingFlights}
        className="btn-red mt-4"
      >
        {loadingFlights ? "Searching..." : "Search Flights"}
      </button>

      {flights.length > 0 && <FlightResults flights={flights} />}
    </div>
  );
};

export default FlightForm;