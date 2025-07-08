import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Image Imports
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Bali from "../assets/images/hero_bg_3_1.jpg";
import adigogiImg from "../assets/images/adiyogi.jpg";
import Rameswaram from "../assets/images/rameswaram.jpg";
import amruthsarImg from "../assets/images/amrutsar-1.jpg";
import charminarImg from "../assets/images/charminar.jpg";
import maldivs from "../assets/images/hero_bg_1_1.jpg";
import thailand from "../assets/images/hero_bg_1_2.jpg";
import goaImg from "../assets/images/hero_bg_2_3.jpg";
import malasia from "../assets/images/malasia2.jpg";
import srinagar from "../assets/images/hero_bg_2_1.jpg";
import dubai from "../assets/images/hero_bg_3_4.jpg";
import singapore from "../assets/images/singapore1.jpg";

const itineraries = [
  {
    place: "Rameshwaram",
    image: Rameswaram,
    description: "Rameshwaram’s spiritual tapestry",
    lat: 9.2875,
    lng: 79.3129,
  },
  {
    place: "Coimbatore",
    image: adigogiImg,
    description: "A 2-day sojourn to Coimbatore",
    lat: 11.0168,
    lng: 76.9558,
  },
  {
    place: "Srinagar",
    image: srinagar,
    description: "Gulmarg serenity escape",
    lat: 34.0837,
    lng: 74.7973,
  },
  {
    place: "Dubai",
    image: dubai,
    description: "Dehradun Delight",
    lat: 25.276987,
    lng: 55.296249,
  },
  {
    place: "Amritsar",
    image: amruthsarImg,
    description:
      "Amritsar, located in the northwestern state of Punjab, is a vibrant city rich in culture, spirituality, and history. It is home to the Golden Temple (Harmandir Sahib), the holiest shrine in Sikhism, attracting millions of pilgrims and tourists from around the world. The city's streets are filled with bustling bazaars, traditional Punjabi cuisine, and warm hospitality. Beyond its spiritual significance, Amritsar holds a deep place in India’s independence movement with the Jallianwala Bagh memorial and its proximity to the Wagah Border, where visitors can witness the iconic India–Pakistan flag-lowering ceremony.",
    lat: 31.63398,
    lng: 74.872261,
  },
  {
    place: "Maldivs",
    image: maldivs,
    description: "Explore the best of Singapore",
    lat: 3.2028,
    lng: 73.2207,
  },
  {
    place: "Singapore",
    image: singapore,
    description: "Explore Singapore",
    lat: 1.3521,
    lng: 103.8198,
  },
  {
    place: "Goa",
    image: goaImg,
    description: "A 2-day sojourn to Goa",
    lat: 15.2993,
    lng: 74.124,
  },
  {
    place: "Thailand",
    image: thailand,
    description: "Gulmarg serenity escape",
    lat: 15.87,
    lng: 100.9925,
  },
  {
    place: "Bali",
    image: Bali,
    description: "Dehradun Delight",
    lat: -8.3405,
    lng: 115.092,
  },
  {
    place: "Hyderabad",
    image: charminarImg,
    description: "Amritsar’s Golden getaway",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    place: "Malasia",
    image: malasia,
    description: "Explore the best of Singapore",
    lat: 4.2105,
    lng: 101.9758,
  },
];
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = ({ lat, lng, place }) => (
  <MapContainer
    center={[lat, lng]}
    zoom={10}
    style={{ height: "300px", width: "100%" }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="© OpenStreetMap contributors"
    />
    <Marker position={[lat, lng]}>
      <Popup>{place}</Popup>
    </Marker>
  </MapContainer>
);

const TripDetails = () => {
  const { name } = useParams();
  const trip = itineraries.find((item) => item.place === name);

  if (!trip) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        Trip not found!
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Image - 80% height with overlay */}
      <div className="relative h-[80vh] w-full flex items-center justify-center text-white text-8xl font-extrabold uppercase tracking-wider">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trip.image})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        {/* Text on top */}
        <span className="relative z-10">{trip.place}</span>
      </div>

      {/* Content Section with Gray BG */}
      <div className="relative py-20 px-4 bg-blue-50">
        {/* Map and Info */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-6 mb-20 relative -mt-28">
          {/* Map - 2/5 */}
          <div className="col-span-5 md:col-span-2 text-center h-full z-10">
            <MapComponent lat={trip.lat} lng={trip.lng} place={trip.place} />
          </div>

          {/* About - 3/5 */}
          <div className="col-span-5 md:col-span-3 p-6 text-center h-full mt-10">
            <h2 className="text-4xl font-bold text-gray-900 pb-4">
              About {trip.place}
            </h2>
            <p className="text-gray-700 text-lg pt-4">{trip.description}</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-black font-bold text-center mb-16 underline">
            Travel Plan
          </h2>

          <div className="relative border-l-4 border-dotted border-blue-500 pl-20">
            {/* --- Day 1 --- */}
            <div className="mb-24 relative">
              <div className="absolute left-[-115px] top-0 w-16 h-16 bg-blue-600 text-white text-lg flex items-center justify-center rounded-full font-bold shadow-md">
                Day 1
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 ">
                Exploring Spiritual Heritage
              </h2>
              <img
                src={trip.image}
                alt="Day 1"
                className="w-full h-[80vh] object-cover rounded-xl shadow-md mb-6 border border-black"
              />

              <div className="grid md:grid-cols-2 gap-6 border-2 rounded-xl p-6 shadow-md">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Experience the profound spiritual heritage of {trip.place}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Start your day with a visit to the Baidyanath Temple... You
                    can include more area-specific content.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Highlights
                  </h3>
                  <ul className="list-disc list-inside text-base text-gray-700">
                    <li>Baidyanath Temple</li>
                    <li>Nandan Pahar</li>
                    <li>Naulakha Mandir</li>
                    <li>Tapovan Caves</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* --- Day 2 --- */}
            <div className="mb-24 relative">
              <div className="absolute left-[-115px] top-0 w-16 h-16 bg-blue-600 text-white text-lg flex items-center justify-center rounded-full font-bold shadow-md">
                Day 2
              </div>
              
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Nature and Culture
              </h2>
              <img
                src={trip.image}
                alt="Day 2"
                className="w-full h-96 object-cover rounded-xl shadow-md mb-6 border border-black"
              />

              <div className="grid md:grid-cols-2 gap-6 border-2 rounded-xl p-6 shadow-md">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Journey through tranquil hills
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Begin your second day with a trek to Trikuta Hills, explore
                    the serene nature, and later visit local cultural landmarks.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Highlights
                  </h3>
                  <ul className="list-disc list-inside text-base text-gray-700">
                    <li>Trikuta Hills</li>
                    <li>Ramakrishna Mission Vidyapith</li>
                    <li>Satsang Ashram</li>
                    <li>Local Markets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Add more days similarly if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
