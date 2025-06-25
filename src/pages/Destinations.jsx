//import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ThailandImg from "../assets/images/thailand-1.jpg";
import SingaporeImg from "../assets/images/singapore-1.jpg";
import malasiaImg from "../assets/images/malasia.jpg";
import GoaImg from "../assets/images/GoaDestination.jpg";
import ManaliImg from "../assets/images/manaliDestination.jpg";
import MaldivesImg from "../assets/images/MaldivesDestination.jpg";
import JaipurImg from "../assets/images/Jaipur.jpg";

const destinations = [
  {
    name: "Thailand",
    image: ThailandImg,
    link: "/destinations/thailand",
  },
  {
    name: "Singapore",
    image: SingaporeImg,
    link: "/destinations/singapore",
  },
  {
    name: "Malasia",
    image: malasiaImg,
    link: "/destinations/malasia",
  },
  {
    name: "Goa",
    image: GoaImg,
    link: "/destinations/goa",
  },
  {
    name: "Manali",
    image: ManaliImg,
    link: "/destinations/manali",
  },
  {
    name: "Maldives",
    image: MaldivesImg,
    link: "/destinations/maldives",
  },
  {
    name: "Jaipur",
    image: JaipurImg,
    link: "/destinations/jaipur",
  },
];

export default function Destinations() {
  return (
    <>
      {/* Style for Swiper navigation buttons */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: #dc2626; /* red-600 */
            font-weight: 800;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: #b91c1c; /* red-700 */
          }
        `}
      </style>

      <div className="relative min-h-screen bg-black">
        <Swiper modules={[Navigation]} navigation loop className="h-screen">
          {destinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-center">
                  <h1 className="text-white text-4xl md:text-7xl lg:text-9xl font-bold uppercase">
                    Destinations
                  </h1>
                  <p className="text-white text-base md:text-xl mt-2 md:mt-4">
                    for every bucket list
                  </p>
                  <div className="mt-40">
                    <h2 className="text-white text-2xl md:text-4xl font-bold">
                      {destination.name}
                    </h2>
                    <Link
                      to={`/destinations/${destination.name.toLowerCase()}`}
                      className="mt-4 inline-block px-5 py-2 md:px-6 md:py-3 bg-red-600 text-white rounded-full text-sm md:text-lg hover:bg-red-700 transition-all"
                    >
                      Discover more
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
