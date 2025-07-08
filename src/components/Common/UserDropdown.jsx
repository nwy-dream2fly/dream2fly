import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import {
  UserIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

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
        className="text-white hover:text-red-400 m-1"
        
      >
         <UserIcon className="h-7 w-7" />
      </button>
      
    );
  }

  return (
    <div className="relative ml-4">
      <button
        onClick={toggleDropdown}
        
        className="flex items-center gap-2 text-xl font-bold text-white hover:text-red-500 transition-all hover:bg-gray-100  p-2 rounded-lg"
      >
        <UserIcon className="h-6 w-6" />
        <span className="max-w-[200px] truncate">
          {user.name?.firstname} {user.name?.lastname}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-sky-100 border border-teal-200 rounded-lg z-50 shadow-2xl">
          <div className="p-4 border-b border-teal-200">
            <div className="text-lg font-semibold text-teal-600">Account</div>
          </div>

          <div className="p-3 flex flex-col gap-2 text-sm">
            <button
              onClick={() => {
                navigate("/profile");
                setIsOpen(false);
              }}
              className="text-left text-teal-600 hover:bg-teal-200 text-lg flex items-center gap-2"
            >
              <UserIcon className="h-5 w-5" />
              My Profile
            </button>

            <button
              onClick={() => {
                navigate("/my-bookings");
                setIsOpen(false);
              }}
              className="text-left text-teal-600 hover:bg-teal-200 text-lg flex items-center gap-2"
            >
              <CalendarDaysIcon className="h-5 w-5" />
              My Bookings
            </button>

            <button
              onClick={handleLogout}
              className="bg-orange-400 hover:bg-red-600 text-white rounded px-3 py-1 mt-2 text-lg flex items-center justify-center gap-2 font-semibold"
            >
              <HiOutlineLogout className="h-6 w-6" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
