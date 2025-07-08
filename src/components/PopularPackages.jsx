import React from "react";
import GoaImg from "../assets/images/sunnyGoa.jpg";
import BgImage from "../assets/images/background.jpg";
import manaliAdventureImg from '../assets/images/manali-adventure.jpg'
import AgraHeritageImg  from '../assets/images/agra-heritage.jpg'
import GlamorousDubaiTripImg from '../assets/images/GlamorousDubaiTrip.jpg'
import ThailandCulturalOdysseyImg from '../assets/images/ThailandCulturalOdysseyImg.jpg'
import GlamourofSingaporeImg from '../assets/images/GlamourofSingapore.jpg'
import MaldivesParadiseGetawayImg from '../assets/images/MaldivesParadiseGetaway.jpg'
import BaliSerenityTourImg from '../assets/images/BaliImg.jpg'

// Card Component
const DestinationCard = ({ image, title, location, price, duration }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-black hover:shadow-lg md:hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto flex flex-col h-[490px]">
    
    {/* Image zooms on hover */}
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </div>
    
    <div className="flex-1 p-4 flex flex-col justify-between">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-red-700">{title}</h3>
        <p className="text-sm text-gray-500 mb-1">{location}</p>
        <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
          <span>💰 ₹{price}</span>
          <span>⏱ {duration} days</span>
        </div>
      </div>
      <button className="mt-2 w-full bg-blue-400 text-white font-medium text-base py-2 rounded-lg hover:bg-blue-700 transition">
        Book Now
      </button>
    </div>
  </div>
);

// Main Component
const PopularPackages = () => {
  const packages = [
    {
      image: GoaImg,
      title: "Sunny Goa Escape",
      location: "Goa, India",
      price: 7999,
      duration: 3,
    },
    {
      image: manaliAdventureImg,
      title: "Manali Adventure",
      location: "Himachal, India",
      price: 9999,
      duration: 5,
    },
    {
      image: AgraHeritageImg,
      title: "Agra Heritage Tour",
      location: "Agra, India",
      price: 4999,
      duration: 2,
    },
    {
      image: GlamorousDubaiTripImg,
      title: "Golden Dunes of Dubai",
      location: "Dubai",
      price: 10999,
      duration: 4,
    },
    {
      image: ThailandCulturalOdysseyImg,
      title: "Thailand Cultural Odyssey",
      location: "Thailand",
      price: 6499,
      duration: 3,
    },
    {
      image: GlamourofSingaporeImg,
      title: "Glamour of Singapore",
      location: "Singapore",
      price: 8999,
      duration: 4,
    },
    {
      image: MaldivesParadiseGetawayImg,
      title: "Maldives Paradise Getaway",
      location: "Maldives",
      price: 7499,
      duration: 3,
    },
    {
      image: BaliSerenityTourImg,
      title: "Bali Serenity Tour",
      location: "Bali, Indonesia",
      price: 7999,
      duration: 3,
    },
  ];

  return (
    <div
      className="relative w-full px-4 py-16 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${BgImage})`,
     
      }}
    >

      {/* Content with z-index */}
      <div className="relative top-[10%] left-1/2 transform -translate-x-1/2 text-center w-full">
        <h2 className="text-sky-500 primary-header">
          Travel Packages
        </h2>
         <p className="text-sky-500 text-2xl font-medium mb-16 mt-3">Handpicked Trips for Every Traveler</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <DestinationCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPackages;
