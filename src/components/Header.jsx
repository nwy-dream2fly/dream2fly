import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Dream2Fly</Link>
        <nav className="space-x-4">
          <Link to="/flights" className="hover:underline">Flights</Link>
          <Link to="/hotels" className="hover:underline">Hotels</Link>
          <Link to="/booking" className="hover:underline">Booking</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;