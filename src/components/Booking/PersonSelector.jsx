import React from "react";

const PersonSelector = ({ flightForm, setFlightForm, show, setShow }) => {
  const total = flightForm.adults + flightForm.children;

  const apply = () => {
    setFlightForm((prev) => ({ ...prev, passengers: total }));
    setShow(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShow((prev) => !prev)}
        type="button"
        className="flight-input-1 text-left p-[12px] px-3 font-semibold text-2xl"
      >
        {total} Person{total > 1 ? "s" : ""}
      </button>

      {show && (
        <div className="absolute z-10 mt-2 w-60 bg-white rounded-lg shadow-lg p-4 text-black space-y-4">
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

          <div className="text-right">
            <button
              onClick={apply}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonSelector;