import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Bali from "../assets/images/BaliImg.jpg";
import adigogiImg from "../assets/images/adiyogi.jpg";
import Rameswaram from "../assets/images/rameswaram.jpg";
import amruthsarImg from "../assets/images/amruthsar.jpg";
import charminarImg from "../assets/images/charminar.jpg";
import maldivs from "../assets/images/maldives.jpg";
import thailand from "../assets/images/thailand.jpg";
import goaImg from "../assets/images/goabeach.jpg";
import malasia from "../assets/images/malasia2.jpg";
import srinagar from "../assets/images/srinagar.jpg";
import dubai from "../assets/images/dubai1.jpg";
import singapore from "../assets/images/singapore1.jpg";
import bgImage from "../assets/images/bgyello.jpg";

const itineraries = [
  {
    days: "2 Days",
    place: "Rameshwaram",
    description: "Rameshwaram’s spiritual tapestry",
    image: Rameswaram,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Coimbatore",
    description: "A 2-day sojourn to Coimbatore",
    image: adigogiImg,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Srinagar",
    description: "Gulmarg serenity escape",
    image: srinagar,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "4 Days",
    place: "Dubai",
    description: "Dehradun Delight",
    image: dubai,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Amritsar",
    description: "Amritsar’s Golden getaway",
    image: amruthsarImg,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "4 Days",
    place: "Maldivs",
    description: "Explore the best of Singapore",
    image: maldivs,
    region: "International",
    length: "4 Days",
  },
  {
    days: "2 Days",
    place: "Singapore",
    description: "Explore Singapore",
    image: singapore,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Goa",
    description: "A 2-day sojourn to Goa",
    image: goaImg,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Thailand",
    description: "Gulmarg serenity escape",
    image: thailand,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "4 Days",
    place: "Bali",
    description: "Dehradun Delight",
    image: Bali,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Hyderabad",
    description: "Amritsar’s Golden getaway",
    image: charminarImg,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "4 Days",
    place: "Malasia",
    description: "Explore the best of Singapore",
    image: malasia,
    region: "International",
    length: "4 Days",
  },
];

const Itineraries = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedLength, setSelectedLength] = useState("All");

  const filtered = itineraries.filter((item) => {
    const regionMatch =
      selectedRegion === "All" || item.region === selectedRegion;
    const lengthMatch =
      selectedLength === "All" || item.length === selectedLength;
    return regionMatch && lengthMatch;
  });

  return (
    <section
      className="relative py-14 bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-white primary-header">
            Itineraries
          </h2>
          <p className="text-white mt-4 text-2xl font-medium">Made for every explorer</p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <select
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 rounded-lg text-sm border shadow focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">Region</option>
              <option value="Domestic">Domestic</option>
              <option value="International">International</option>
            </select>

            <select
              onChange={(e) => setSelectedLength(e.target.value)}
              className="px-4 py-2 rounded-lg text-sm border shadow focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">Trip Length</option>
              <option value="2 Days">2 Days</option>
              <option value="4 Days">4 Days</option>
              <option value="5 Days">5 Days</option>
            </select>
          </div>
        </div>

        {/* Swiper */}
        <div className="relative z-20 ">
          <Swiper
            className="itineraries-swiper"
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {filtered.map((item, idx) => (
              <SwiperSlide key={`${item.place}-${idx}`}>
                <Link to={`/trip/${encodeURIComponent(item.place)}`}>
                <div className="bg-white rounded-t-full overflow-hidden transition duration-300 transform hover:shadow-black hover:shadow-lg md:hover:scale-105 group">
                  <img
                    src={item.image}
                    alt={item.place}
                    className="w-full h-96 object-cover rounded-t-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="p-4 text-center">
                    <p className="text-red-600 font-semibold">{item.days}</p>
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.place}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Navigation Styling */}
          <style>{`
                .itineraries-swiper {
                  padding: 15px 15px 60px ;
                }

                .itineraries-swiper .swiper-button-prev {
                  color: white;
                  position:relative;
                  left: 42% !important;
                  top: 81px !important;
                }

                .itineraries-swiper .swiper-button-next {
                  color: white;
                  position:relative;
                  left: 56% !important;
                  top: 59px !important;
                }
              `}</style>
        </div>

        {/* Discover More Button */}
        <div className="text-center mt-10">
          <button className="btn-primary inline-block">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default Itineraries;
