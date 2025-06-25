import { useNavigate } from "react-router-dom";

const BookingButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate("/booking");
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-4 bottom-20 bg-red-600 text-white px-4 py-2 rounded shadow-md hover:bg-red-700 transition z-50"
    >
      Book Your Travel
    </button>
  );
};

export default BookingButton;