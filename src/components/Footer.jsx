import React from "react";
import whiteLogo from "../assets/images/dream2fly logo horizontal (white).png";
import FooterImg from "../assets/images/footer-1.jpg";
import VisaIcon from "../assets/images/visa.svg";
import MastercardIcon from "../assets/images/master.svg";
import PaypalIcon from "../assets/images/paypal.svg";
import ApplyIcon from "../assets/images/apple-pay.svg";
import insta1 from "../assets/images/insta1.jpg";
import insta2 from "../assets/images/insta8.jpg";
import insta3 from "../assets/images/insta3.jpg";
import insta4 from "../assets/images/insta4.jpg";
import insta5 from "../assets/images/insta5.jpg";
import insta6 from "../assets/images/insta7.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const images = [insta1, insta2, insta3, insta4, insta5, insta6];

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${FooterImg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Get Updated With The Latest Newsletter
          </h2>
          <div className="flex justify-center items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 rounded-full border border-[#525454] focus:outline-none"
            />
            <button className="btn-primary">Subscribe Now</button>
          </div>
        </div>

        {/* Footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 border-t border-gray-300">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={whiteLogo}
                alt="Dream2Fly Logo"
                className="h-9 w-auto"
              />
            </div>
            <p className="text-lg">
              Fly beyond boundaries. Experience the world the way you’ve always
              dreamed.
            </p>
            <div className="flex gap-4 mt-7 text-white text-3xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-base">
              <li>
                <a href="/" className="hover:underline">
                  › Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  › About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  › Our Service
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  › Terms of Service
                </a>
              </li>
              <li>
                <a href="/booking" className="hover:underline">
                  › Tour Booking Now
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact</h3>

            <p className="mb-4 flex items-start">
              <span className="text-lg leading-none mt-1">📍</span>
              <a
                href="https://www.google.com/maps?q=no.8-3-903/9/4,+G1,+Nagarjuna+Nagar,+Road+No.1,+Ameerpet,+Hyderabad,+Telangana+500073"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 hover:text-[#e63f3f] transition-colors"
              >
                No. 8-3-903/9/4, G1, Nagarjuna Nagar, Road No.1, Ameerpet,
                Hyderabad, Telangana 500073
              </a>
            </p>

            <p className="mb-4 flex items-center">
              <span className="text-lg mr-3">📞</span>
              <a
                href="tel:+919390324322"
                className="hover:text-[#e63f3f] transition-colors"
              >
                +91 93903 24322
              </a>
            </p>

            <p className="mb-6 flex items-center">
              <span className="text-lg mr-3">✉️</span>
              <a
                href="mailto:ishaque@dream2fly.com"
                className="hover:text-[#e63f3f] transition-colors"
              >
                ishaque@dream2fly.com
              </a>
            </p>

            {/* Map Embed */}
            <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Dream2Fly Location"
                src="https://www.google.com/maps?q=no.8-3-903/9/4,+G1,+Nagarjuna+Nagar,+Road+No.1,+Ameerpet,+Hyderabad,+Telangana+500073&output=embed"
                width="100%"
                height="150"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>

          {/* Instagram Gallery */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Instagram Post</h4>
            <div className="grid grid-cols-2 gap-2">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="w-full h-28 bg-gray-200 rounded-md overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Insta ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-4 text-sm flex flex-col md:flex-row items-center justify-between text-center text-white-600">
          <p className="text-sm text-white">
            © 2025 Dream2Fly.{" "}
            <span className="text-red-600 font-semibold">Designed by</span>{" "}
            <br />
            <a
              href="https://nwy.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 font-medium text-base transition-colors"
            >
              NWY Creative Communications
            </a>
          </p>
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <span>We Accept</span>
            <img src={VisaIcon} alt="Visa" className="h-14" />
            <img src={MastercardIcon} alt="Mastercard" className="h-16" />
            <img src={PaypalIcon} alt="Paypal" className="h-16" />
            <img src={ApplyIcon} alt="Applepay" className="h-14" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
