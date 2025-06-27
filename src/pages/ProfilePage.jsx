import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyProfile from "../components/user/MyProfile";
import MyBookings from "../components/user/MyBookings";
import bgImage from '../assets/images/bg-full.jpg';
import { HiBell } from "react-icons/hi";
import {
 
  UserIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

export default function ProfilePage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    if (location.pathname === "/my-bookings") {
      setActiveTab("bookings");
    } else {
      setActiveTab("profile");
    }
  }, [location.pathname]);

  return (

      <div
        className="min-h-screen w-full bg-cover bg-center py-16 px-4 sm:py-24"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="bg-white border rounded-lg p-4 shadow-2xl w-full lg:w-64">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-3">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center justify-center lg:justify-start px-2 py-2 rounded-md transition text-sm ${
                  activeTab === "profile"
                    ? "bg-orange-100 text-orange-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <UserIcon className="h-5 w-5 mr-1 lg:mr-2" />
                <span className="hidden sm:inline lg:inline">My Profile</span>
              </button>
              <button
                onClick={() => setActiveTab("bookings")}
                className={`flex items-center justify-center lg:justify-start px-2 py-2 rounded-md transition text-sm ${
                  activeTab === "bookings"
                    ? "bg-orange-100 text-orange-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <CalendarDaysIcon className="h-5 w-5 mr-1 lg:mr-2" />
                <span className="hidden sm:inline lg:inline">My Bookings</span>
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`flex items-center justify-center lg:justify-start px-2 py-2 rounded-md transition text-sm ${
                  activeTab === "notifications"
                    ? "bg-orange-100 text-orange-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <HiBell className="h-5 w-5 mr-1 lg:mr-2" />
                <span className="hidden sm:inline lg:inline">Notifications</span>
              </button>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="bg-white border rounded-lg p-4 sm:p-6 flex-1 min-h-[60vh] shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4 border-b shadow p-2 sm:p-4">
              {activeTab === "profile" && "My Profile"}
              {activeTab === "bookings" && "My Bookings"}
              {activeTab === "notifications" && "Notifications"}
            </h2>
            <div className="shadow-inner p-2 sm:p-4">
              {activeTab === "profile" && <MyProfile />}
              {activeTab === "bookings" && <MyBookings />}
              {activeTab === "notifications" && (
                <p className="text-gray-600">No new notifications.</p>
              )}
            </div>
          </div>
        </div>
      </div>
   
  );
}
