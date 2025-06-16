import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 text-center">
      &copy; {new Date().getFullYear()} Dream2Fly. All rights reserved.
    </footer>
  );
};

export default Footer;