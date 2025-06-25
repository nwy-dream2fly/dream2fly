import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyProfile from "../components/user/MyProfile";
import MyBookings from "../components/user/MyBookings";
import MainLayout from "../layouts/MainLayout";
import bgImage from '../assets/images/bg-full.jpg';

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
    <MainLayout fullWidth>
      <div
        className="min-h-screen w-full bg-cover bg-center py-24 px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container mx-auto flex gap-6">
          {/* Sidebar */}
          <div className="bg-white border rounded-lg p-4 shadow-2xl w-64 self-start">
            <div className="space-y-3">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full text-left px-4 py-2 rounded-md transition ${
                  activeTab === "profile"
                    ? "bg-orange-100 text-orange-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                My Profile
              </button>
              <button
                onClick={() => setActiveTab("bookings")}
                className={`w-full text-left px-4 py-2 rounded-md transition ${
                  activeTab === "bookings"
                    ? "bg-orange-100 text-orange-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`w-full text-left px-4 py-2 rounded-md transition ${
                  activeTab === "notifications"
                    ? "bg-orange-100 text-orange-700 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                Notifications
              </button>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="bg-white border rounded-lg p-6 flex-1 self-start min-h-[70vh] shadow-2xl">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 border-b shadow-lg p-4">
              {activeTab === "profile" && "My Profile"}
              {activeTab === "bookings" && "My Bookings"}
              {activeTab === "notifications" && "Notifications"}
            </h2>
            <div className="shadow-lg">
              {activeTab === "profile" && <MyProfile />}
              {activeTab === "bookings" && <MyBookings />}
              {activeTab === "notifications" && (
                <p className="text-gray-600">No new notifications.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
