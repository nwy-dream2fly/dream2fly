import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-[1538px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Dream2Fly</h2>
          <p className="text-sm">
            Experience the best journeys with Dream2Fly – your trusted partner
            in travel and discovery.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/flights" className="hover:text-white transition">
                Flights
              </Link>
            </li>
            <li>
              <Link to="/hotels" className="hover:text-white transition">
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Address, Map, Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <p className="mb-2">
            📍{" "}
            <a
              href="https://www.google.com/maps?q=no.8-3-903/9/4,+G1,+Nagarjuna+Nagar,+Road+No.1,+Ameerpet,+Hyderabad,+Telangana+500073"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              No. 8-3-903/9/4, G1, Nagarjuna Nagar, Road No.1, Ameerpet,
              Hyderabad, Telangana 500073
            </a>
          </p>

          <p className="mb-2">
            📞{" "}
            <a href="tel:+919390324322" className="hover:text-white transition">
              +91 93903 24322
            </a>
          </p>
          <p className="mb-4">
            ✉️{" "}
            <a
              href="mailto:ishaque@dream2fly.com"
              className="hover:text-white transition"
            >
              ishaque@dream2fly.com
            </a>
          </p>

          {/* Map Embed */}
          <div className="mb-4">
            <iframe
              title="Dream2Fly Location"
              src="https://www.google.com/maps?q=no.8-3-903/9/4,+G1,+Nagarjuna+Nagar,+Road+No.1,+Ameerpet,+Hyderabad,+Telangana+500073&output=embed"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Social Links */}
          <ul className="flex gap-4 mt-2">
            <li>
              <a
                href="https://facebook.com/dream2fly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/dream2fly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dream2fly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@dream2fly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-600 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Dream2Fly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
