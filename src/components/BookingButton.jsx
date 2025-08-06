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
  className="fixed right-[-3rem] top-1/2 transform -rotate-90 bg-red-500 text-white px-2 py-1 text-sm 
             rounded shadow-md hover:bg-red-700 transition z-50
             sm:px-4 sm:py-2 sm:text-base sm:right-[-3rem]"
>
  Plan Your Journey
</button>
  );
};

export default BookingButton;