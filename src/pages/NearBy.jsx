import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Bali from "../assets/images/BaliImg.jpg";
import Kanchanaburi from "../assets/images/Kanchanaburi.jpg";
import Pattaya from "../assets/images/pattaya.jpg";
import Lampang from "../assets/images/Lampang.jpg";
import Lopburi from "../assets/images/Lopburi.jpg";
import Bangkok from "../assets/images/Bangkok.jpg";
import thailand from "../assets/images/thailand.jpg";
import Phetchaburi from "../assets/images/Phetchaburi.jpg";
import malasia from "../assets/images/malasia2.jpg";
import HuaHin from "../assets/images/Hua Hin.jpg";
import KhaoYaiNationalPark from "../assets/images/Khao Yai National Park.jpg";
import SafariPark from "../assets/images/SafariPark.jpg";
import bgImage from "../assets/images/background.jpg";

const nearby = [
  {
    days: "2 Days",
    place: "Pattaya",
    description: "Rameshwaram’s spiritual tapestry",
    image: Pattaya,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Kanchanaburi",
    description: "A 2-day sojourn to Coimbatore",
    image: Kanchanaburi,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Hua Hin",
    description: "Gulmarg serenity escape",
    image: HuaHin,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "4 Days",
    place: "Khao Yai National Park",
    description: "Dehradun Delight",
    image: KhaoYaiNationalPark,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Lampang",
    description: "Amritsar’s Golden getaway",
    image: Lampang,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "4 Days",
    place: "Bangkok",
    description: "Explore the best of Singapore",
    image: Bangkok,
    region: "International",
    length: "4 Days",
  },
  {
    days: "2 Days",
    place: "Safari Park",
    description: "Explore Singapore",
    image: SafariPark,
    region: "Domestic",
    length: "2 Days",
  },
  {
    days: "2 Days",
    place: "Phetchaburi",
    description: "A 2-day sojourn to Goa",
    image: Phetchaburi,
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
    place: "Lopburi",
    description: "Amritsar’s Golden getaway",
    image: Lopburi,
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

const Nearby = () => {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedLength, setSelectedLength] = useState("All");

  const filtered = nearby.filter((item) => {
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
         {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-sky-500 primary-header">
            Nearby Wonders
          </h2>
          <p className="text-sky-400 mt-4 text-2xl font-semibold">Your Next Adventure Starts Just Nearby.</p>
        </div>

        {/* Swiper */}
        <div className="relative z-20 ">
          <Swiper
            className="nearby-swiper"
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
                <div className="overflow-hidden transition duration-300 transform hover:shadow-black hover:shadow-lg md:hover:scale-105 group">
                  <img
                    src={item.image}
                    alt={item.place}
                    className="w-full h-96 object-cover rounded-3xl transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between bg-black bg-opacity-50 text-white rounded-lg px-3 py-2">
                    <h3 className="text-base sm:text-lg font-bold">
                      {item.place}
                    </h3>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Navigation Styling */}
          <style>{`
                .nearby-swiper {
                  padding: 15px 15px 60px ;
                }

                .nearby-swiper .swiper-button-prev {
                  color: text-sky-600;
                  position:relative;
                  left: 42% !important;
                  top: 81px !important;
                }

                .nearby-swiper .swiper-button-next {
                   color: text-sky-600;
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

export default Nearby;
