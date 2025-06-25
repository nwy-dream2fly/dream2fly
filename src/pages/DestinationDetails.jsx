import { useParams } from "react-router-dom";
import destinations from "../data/destinationsData";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/background.jpg";
import BookingButton from "../components/BookingButton";

const DestinationDetails = () => {
  const { slug } = useParams();

  const destination = destinations.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-2xl">
        Destination not found
      </div>
    );
  }

  // Fake gallery and packages (you can later fetch these from backend)
  const galleryImages = [
    destination.image,
    "https://source.unsplash.com/featured/?beach",
    "https://source.unsplash.com/featured/?island",
    "https://source.unsplash.com/featured/?hotel",
  ];

  const packages = [
    {
      title: "Budget Package",
      price: "₹15,000",
      duration: "3 Days / 2 Nights",
      includes: "Stay, Sightseeing, Breakfast",
    },
    {
      title: "Standard Package",
      price: "₹25,000",
      duration: "5 Days / 4 Nights",
      includes: "Flight, Stay, Meals, Sightseeing",
    },
    {
      title: "Luxury Package",
      price: "₹45,000",
      duration: "7 Days / 6 Nights",
      includes: "5-Star Stay, All Meals, Cruise",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-8"
          style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Hero Banner */}
      <div className="relative h-[550px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase">{destination.name}</h1>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          {destination.description}
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${destination.name} ${i + 1}`}
              className="rounded-lg h-64 object-cover w-full shadow"
            />
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Available Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-gray-600 mb-1">{pkg.duration}</p>
              <p className="text-gray-600 mb-1">Includes: {pkg.includes}</p>
              <p className="text-red-600 font-bold text-lg mb-4">{pkg.price}</p>
              <Link
                to={`/booking?destination=${slug}&package=${pkg.title}`}
                className="inline-block mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
   <BookingButton />
    </div>
  );
};

export default DestinationDetails;
