import React from "react";
import Dream2FlyLogo from "../assets/images/dream2fly logo horizontal (blue).png";
import TopImage from "../assets/images/aboutUs.png";

// Images for features (replace with your actual image imports)
import ExclusiveDestinationsImg from "../assets/images/exclusive-destinations.jpg";
import SafetyFirstImg from "../assets/images/safety-first.jpg";
import ProfessionalGuidesImg from "../assets/images/professional-guides.jpg";
import FlexibleItinerariesImg from "../assets/images/flexible-itineraries.jpg";
import hudyImg from '../assets/images/hudy.jpg'

const AboutUsDetails = () => {
  const features = [
    {
      title: "Exclusive Destinations",
      description: "At Dream2Fly, we take you beyond the usual. From hidden beaches to serene towns and luxury stays in nature, our handpicked destinations offer immersive, unforgettable travel experiences.",
      image: ExclusiveDestinationsImg,
      reverse: false,
    },
    {
      title: "Safety First Always",
      description: "Your safety is our priority at Dream2Fly. We work only with certified partners who meet top safety standards, from vetted stays to reliable local guides. Enjoy your journey with peace of mind — we handle the details, so you can focus on the adventure.",
      image: SafetyFirstImg,
      reverse: true,
    },
    {
      title: "Professional Guides",
      description: "At Dream2Fly, our expert guides are more than travel pros — they’re passionate storytellers who bring every destination to life. With deep knowledge, friendly support, and personalized attention, they ensure your journey is insightful, comfortable, and truly unforgettable.",
      image: ProfessionalGuidesImg,
      reverse: false,
    },
    {
      title: "Flexible Itineraries",
      description: "Every traveler is unique, and so is every journey. Dream2Fly crafts flexible itineraries tailored to your pace and interests, giving you the freedom to explore your way—without compromising on comfort or quality.",
      image: FlexibleItinerariesImg,
      reverse: true,
    },
    {
      title: "Seamless Travel",
      description: "We handle all the details—from flights to transfers—ensuring your journey flows smoothly from start to finish.",
      image: hudyImg,
      reverse: false,
    },
  ];

  return (
    <div className="about-page">
      {/* Top full-width image */}
      <div className="relative w-full h-64 md:h-[90vh] overflow-hidden">
        <img src={TopImage} alt="Travel adventure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-7xl font-bold uppercase tracking-wide">Let’s Get to Know</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-20">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-center gap-6 mb-20 border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
          <img src={Dream2FlyLogo} alt="Dream2Fly Logo" className="w-32 md:w-48 object-contain" />
          <p className="text-gray-700 text-lg md:text-lg font-medium leading-relaxed max-w-xl">
            Dream2Fly helps you plan perfect trips — adventure, leisure or luxury.
            We offer curated experiences, top safety, and professional guidance for a memorable journey.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-20">
          {features.map(({ title, description, image, reverse }, idx) => (
            <FeatureItem
              key={idx}
              title={title}
              description={description}
              image={image}
              reverse={reverse}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ title, description, image, reverse }) => (
  <div
    className={`flex flex-col md:flex-row items-center gap-8 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Text side */}
    <div className="md:w-1/2 border-l-4 border-blue-600 pl-6">
      <h3 className="text-2xl font-bold text-red-600 underline mb-4">{title}</h3>
      <p className="text-gray-700 text-lg font-normal">{description}</p>
    </div>

    {/* Image side */}
    <div className="md:w-1/2">
      <img src={image} alt={title} className="rounded-lg object-cover w-full h-80 md:h-80 shadow-lg transition duration-300 transform hover:shadow-black hover:shadow-lg md:hover:scale-105" />
    </div>
  </div>
);

export default AboutUsDetails;
