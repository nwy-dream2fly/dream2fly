import { useState } from "react";
import { User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UserDropdown({ setShowModal }) {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/"); // 👈 Redirect to homepage
  };

  if (!user) {
    return (
      <button
        onClick={() => setShowModal(true)}
        className="text-white hover:text-orange-400 m-1"
        aria-label="Login or Register"
      >
        <User size={30} />
      </button>
    );
  }

  return (
    <div className="relative ml-4">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-xl font-bold text-white hover:text-orange-300 transition-all hover:bg-gray-100"
      >
        <User size={25} />
        <span className="max-w-[200px] truncate">
          {user.name?.firstname} {user.name?.lastname}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-orange-400 shadow-lg rounded-lg z-50">
          <div className="p-4 border-b border-orange-200">
            <div className="text-lg font-semibold text-orange-600">Account</div>
          </div>

          <div className="p-3 flex flex-col gap-2 text-sm">
            <button
              onClick={() => {
                navigate("/profile");
                setIsOpen(false);
              }}
              className="text-left text-orange-600 hover:underline"
            >
              My Profile
            </button>

            <button
              onClick={() => {
                navigate("/my-bookings");
                setIsOpen(false);
              }}
              className="text-left text-orange-600 hover:underline"
            >
              My Bookings
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1 mt-2"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
