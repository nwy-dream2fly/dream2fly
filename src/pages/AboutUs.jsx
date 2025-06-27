import React from "react";
import { MapPin, ShieldCheck, Users } from "lucide-react";
import Dream2fly from '../assets/images/dream2fly logo horizontal (blue).png'

import about1 from "../assets/images/cameraTaking.jpg"; // full-height main image
import about2 from "../assets/images/touristGuide.jpg"; // top small
import about3 from "../assets/images/tourgroup.jpg"; // bottom small
import bgImage from "../assets/images/bg-full.jpg";

const AboutUs = () => {
  return (
    <section
      className="relative min-h-screen flex bg-cover bg-center px-6 py-5"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-2 max-w-[1400px] mx-auto items-center">
        {/* Left Content */}
        <div className="text-left">
          <p className="text-4xl text-teal-600 font-mystery mb-3">Let’s Fly Together</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            About <img src={Dream2fly} alt="Dream2Fly Logo" className="h-10 md:h-12 inline-block ml-2" />
          </h2>
          <p className="text-gray-600 mb-8">
            Dream2Fly helps you plan perfect trips — adventure, leisure or luxury.<br/>
            We offer curated experiences, top safety, and professional guidance<br/> for a memorable journey.
          </p>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="bg-teal-100 text-teal-600 p-3 rounded-full">
                <MapPin size={24} />
              </span>
              <div>
                <h4 className="text-lg font-semibold">Exclusive Destinations</h4>
                <p className="text-sm text-gray-600">Discover hidden gems and premium spots across the world.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-teal-100 text-teal-600 p-3 rounded-full">
                <ShieldCheck size={24} />
              </span>
              <div>
                <h4 className="text-lg font-semibold">Safety First Always</h4>
                <p className="text-sm text-gray-600">We ensure your safety with certified partners and standards.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="bg-teal-100 text-teal-600 p-3 rounded-full">
                <Users size={24} />
              </span>
              <div>
                <h4 className="text-lg font-semibold">Professional Guides</h4>
                <p className="text-sm text-gray-600">Trained, friendly, and multilingual travel companions.</p>
              </div>
            </div>
          </div>

          <button className="mt-10 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all">
            Learn More
          </button>
        </div>

        {/* Right - Image Layout */}
        <div className="flex gap-6 items-center">
          {/* Full Height Main Image */}
          <div className="h-[600px] w-1/2 rounded-l-full overflow-hidden shadow-lg">
            <img src={about1} alt="Main Travel" className="w-full h-full object-cover" />
          </div>

          {/* Two stacked small images */}
          <div className="flex flex-col gap-6 w-1/2">
            <div className="h-[290px] w-full rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-md">
              <img src={about2} alt="Top Small" className="w-full h-full object-cover" />
            </div>
            <div className="h-[290px] w-full rounded-bl-3xl rounded-tr-3xl overflow-hidden shadow-md">
              <img src={about3} alt="Bottom Small" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
