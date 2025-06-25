const BookingDialog = ({ flight, onClose, form }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
        <p><strong>Airline:</strong> {flight.airline}</p>
        <p><strong>From:</strong> {flight.from}</p>
        <p><strong>To:</strong> {flight.to}</p>
        <p><strong>Departure:</strong> {flight.departure}</p>
        <p><strong>Arrival:</strong> {flight.arrival}</p>
        <p><strong>Travel Class:</strong> {form.travelClass}</p>
        <p><strong>Passengers:</strong> {form.adults + form.children}</p>
        <p><strong>Total Price:</strong> ₹{flight.price}</p>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => alert("Payment flow here")}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDialog;
