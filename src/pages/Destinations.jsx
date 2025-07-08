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
                style={{
                  backgroundImage: `url(${destination.image})`
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.80) 10%, rgba(0,0,0,0) 100%)'
                  }}
                ></div>


                <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 text-center w-full">
                  <h1 className="text-white primary-header">
                    Dream Getaways
                  </h1>
                  <p className="text-white text-2xl font-medium mt-3">
                    Top Travel Goals
                  </p>
                  <div className="mt-40">
                    <h2 className="text-white text-2xl md:text-4xl font-bold">
                      {destination.name}
                    </h2>
                    <Link
                      to={`/destinations/${destination.name.toLowerCase()}`}
                      className="btn-primary mt-6 inline-block text-center"
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
