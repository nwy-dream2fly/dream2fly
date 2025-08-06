import React from "react";
import { MapPin, ShieldCheck, Users, ListCheck } from "lucide-react";
import Dream2fly from "../assets/images/dream2fly logo horizontal (blue).png";
import { Link } from "react-router-dom";

import about1 from "../assets/images/cameraTaking.jpg";
import about2 from "../assets/images/touristGuide.jpg";
import about3 from "../assets/images/tourgroup.jpg";
import bgImage from "../assets/images/bg-full.jpg";

const AboutUs = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center px-4 sm:px-6 pt-16 pb-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <p className="text-4xl sm:text-5xl text-teal-600 mb-4 font-extrabold text-center md:text-left">
            Let’s Get to Know
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 leading-tight text-center md:text-left">
            About{" "}
            <img
              src={Dream2fly}
              alt="Dream2Fly Logo"
              className="h-6 sm:h-8 md:h-9 inline-block ml-2"
            />
          </h2>
          <p className="text-gray-600 mb-6 text-base sm:text-lg text-center md:text-left">
            Dream2Fly helps you plan perfect trips — adventure, leisure or luxury.
            <br />
            We offer curated experiences, top safety, and professional guidance
            <br /> for a memorable journey.
          </p>

          {/* Features */}
          <div className="space-y-6">
            {[
              {
                icon: <MapPin size={24} />,
                title: "Exclusive Destinations",
                text: "Discover hidden gems and premium spots across the world.",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Safety First Always",
                text: "We ensure your safety with certified partners and standards.",
              },
              {
                icon: <Users size={24} />,
                title: "Professional Guides",
                text: "Trained, friendly, and multilingual travel companions.",
              },
              {
                icon: <ListCheck size={24} />,
                title: "Flexible Itineraries",
                text: "Personalize your journey with plans that adapt to your pace and preferences.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="bg-teal-100 text-teal-600 p-3 rounded-full">
                  {item.icon}
                </span>
                <div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-base text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center md:justify-start">
            <Link
              to="/about"
              className="mt-8 inline-block bg-teal-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-700 transition"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Right Image Layout */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch">
          {/* Main Image */}
          <div className="h-[300px] sm:h-[400px] md:h-[600px] w-full md:w-1/2 rounded-full overflow-hidden shadow-lg">
            <img
              src={about1}
              alt="Main Travel"
              className="w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>

          {/* Side Images */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-6 w-full md:w-1/2">
            <div className="h-[140px] sm:h-[160px] md:h-[290px] w-1/2 md:w-full rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-md hover:scale-110 transition duration-300">
              <img
                src={about2}
                alt="Top Small"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[140px] sm:h-[160px] md:h-[290px] w-1/2 md:w-full rounded-bl-3xl rounded-tr-3xl overflow-hidden shadow-md hover:scale-110 transition duration-300">
              <img
                src={about3}
                alt="Bottom Small"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
