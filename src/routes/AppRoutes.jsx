import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/auth/LoginForm";
import Signup from "../components/auth/SignupForm";
import MainLayout from "../layouts/MainLayout";
import FlightResults from "../components/Booking/FlightResults";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Destinations from "../pages/Destinations";
import DestinationDetails from "../pages/DestinationDetails";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import AuthModal from "../components/auth/AuthModal";
import ProfilePage from '../pages/ProfilePage'

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight-results" element={<FlightResults />} />
          <Route path="/home" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
           <Route path="/my-bookings" element={<ProfilePage />} />
           <Route path="/auth" element={<AuthModal/>} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetails />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
