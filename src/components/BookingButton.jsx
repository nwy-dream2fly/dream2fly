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
      className="fixed right-[-3rem] top-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-700 transition z-50 transform -rotate-90"
    >
      Plan Your Journey
    </button>
  );
};

export default BookingButton;