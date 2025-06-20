import React from "react";

const TripTypeToggle = ({ tripType, setTripType, setFlightForm }) => {
  const toggle = () => {
    if (tripType === "single") {
      setTripType("round");
    } else {
      setTripType("single");
      setFlightForm((prev) => ({ ...prev, returnDate: "" }));
    }
  };

  return (
    <div className="flex justify-center w-full my-4">
      <button
        className="relative w-64 h-12 rounded-full shadow-md border-2 border-indigo-500 overflow-hidden transition-all duration-300"
        onClick={toggle}
      >
        <span
          className={`absolute top-[2px] left-1 w-[48%] h-10 rounded-full transition-all duration-300 ${
            tripType === "single"
              ? "bg-orange-500 translate-x-0"
              : "bg-sky-500 translate-x-full"
          }`}
        />
        <div className="relative z-10 flex justify-between px-6 h-full items-center font-semibold">
          <span className={tripType === "single" ? "text-white" : "text-black"}>
            One Way
          </span>
          <span className={tripType === "round" ? "text-white" : "text-black"}>
            Round Trip
          </span>
        </div>
      </button>
    </div>
  );
};

export default TripTypeToggle;