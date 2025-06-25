import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "../components/auth/AuthModal";
import BlueLogo from "../assets/images/dream2fly logo horizontal (blue).png";
import bgDestination from "../assets/images/bg-full.jpg";
import { useAuth } from "../context/AuthContext";
import UserDropdown from "../components/Common/UserDropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const [showBg, setShowBg] = useState(true);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const initialTimerRef = useRef(null);
  const scrollTimerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Initialize user state from localStorage
  const { user, setUser } = useAuth();

  // Sign out handler clears localStorage and state, then navigates home
  const handleSignOut = () => {
    localStorage.removeItem("dream2flyUser");
    setUser(null);
    navigate("/");
  };

  // Hide background after 2 seconds on load
  useEffect(() => {
    initialTimerRef.current = setTimeout(() => setShowBg(false), 2000);
    return () => clearTimeout(initialTimerRef.current);
  }, []);

  // Manage dropdown visibility delay for smooth hide/show
  useEffect(() => {
    if (destinationsOpen) {
      setPanelVisible(true);
    } else if (panelVisible) {
      const timer = setTimeout(() => setPanelVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [destinationsOpen, panelVisible]);

  // Scroll logic for background visibility
  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        setShowBg(true);
        if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      } else if (scrollTop === 0) {
        scrollTimerRef.current = setTimeout(() => {
          setShowBg(false);
        }, 2000);
      } else {
        setShowBg(true);
        if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(scrollTimerRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Focus search input when expanded
  useEffect(() => {
    if (searchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [searchExpanded]);

  // Collapse search on outside click or ESC key press
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchExpanded &&
        searchInputRef.current &&
        !searchInputRef.current.contains(e.target)
      ) {
        setSearchExpanded(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSearchExpanded(false);
      }
    };

    if (searchExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [searchExpanded]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDestinationsOpen(false);
  };

  const toggleDestinations = () => {
    setDestinationsOpen(!destinationsOpen);
    setIsOpen(false);
  };

  const toggleMobileDest = () => {
    setMobileDestOpen(!mobileDestOpen);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setDestinationsOpen(false);
    setMobileDestOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          showBg
            ? "bg-gradient-to-r from-orange-400 to-sky-400"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-8 py-3 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="w-1/3">
            <img
              src={BlueLogo}
              alt="Dream2Fly Logo"
              className="h-8 w-auto ml-2"
            />
          </div>

          {/* Center: Navigation */}
          <div className="w-2/5 hidden md:flex justify-center space-x-8 text-white font-medium text-xl relative">
            <Link to="/home" className="hover:text-red-300 transition">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <button
              onClick={toggleDestinations}
              className="hover:text-red-300 text-xl transition focus:outline-none flex items-center gap-1 font-medium"
            >
              Destinations
              <ChevronDown
                className={`transition-transform duration-300 ${
                  destinationsOpen ? "rotate-180" : "rotate-0"
                }`}
                size={18}
                strokeWidth={3}
              />
            </button>
            <Link
              to="/experiences"
              className="hover:text-red-300 transition text-xl font-medium"
            >
              Experiences
            </Link>
            <Link
              to="/plan"
              className="hover:text-red-300 transition text-xl font-medium"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Right: Search + User */}
          <div className="w-1/3 flex items-center justify-end space-x-4 relative">
            {!searchExpanded && (
              <button
                onClick={() => setSearchExpanded(true)}
                className="text-white focus:outline-none"
                aria-label="Open search"
              >
                <Search size={24} />
              </button>
            )}
            {searchExpanded && (
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-full border border-white bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400 w-48 transition-all duration-300"
              />
            )}

           
             <UserDropdown setShowModal={setShowModal} />

            {/* Mobile menu toggle */}
            <button onClick={toggleMenu} className="md:hidden text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-sky-400 w-full fixed top-full left-0 px-4 py-4 space-y-3 text-white shadow-lg z-50">
            <Link
              to="/home"
              className="block hover:text-red-200 text-lg font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>

            <button
              onClick={toggleMobileDest}
              className="w-full text-left flex justify-between items-center font-medium"
              aria-expanded={mobileDestOpen}
            >
              <span>Destinations</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  mobileDestOpen ? "rotate-180" : "rotate-0"
                }`}
                size={20}
                strokeWidth={3}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileDestOpen ? "max-h-96" : "max-h-0"
              } pl-4 mt-1 space-y-1`}
            >
              {/* International */}
              <h4 className="text-sm font-semibold text-black-800">
                International
              </h4>
              <Link
                to="/destinations/thailand"
                onClick={closeAllMenus}
                className="block hover:text-red-200"
              >
                Thailand
              </Link>
              <Link
                to="/destinations/singapore"
                onClick={closeAllMenus}
                className="block hover:text-red-200"
              >
                Singapore
              </Link>
              <Link
                to="/destinations/europe"
                onClick={closeAllMenus}
                className="block hover:text-red-200"
              >
                Europe
              </Link>

              {/* Domestic */}
              <h4 className="text-sm font-semibold mt-3 text-white/80">
                Domestic
              </h4>
              <Link
                to="/destinations/goa"
                onClick={closeAllMenus}
                className="block hover:text-red-200"
              >
                Goa
              </Link>
              <Link
                to="/destinations/kerala"
                onClick={closeAllMenus}
                className="block hover:text-red-200"
              >
                Kerala
              </Link>
              <Link
                to="/destinations/himachal"
                onClick={closeAllMenus}
                className="block hover:text-red-200"
              >
                Himachal Pradesh
              </Link>
            </div>

            <Link
              to="/experiences"
              className="block hover:text-red-200 text-lg font-medium"
              onClick={closeAllMenus}
            >
              Experiences
            </Link>

            <Link
              to="/plan"
              className="block hover:text-red-200 text-lg font-medium"
              onClick={closeAllMenus}
            >
              Plan Your Trip
            </Link>

            <input
              type="text"
              placeholder="Search..."
              className="mt-2 w-full px-3 py-1 rounded-full border border-white bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
        )}
      </header>

      {/* Desktop Dropdown Panel */}
      {panelVisible && (
        <div
          className={`fixed top-[64px] left-0 w-full bg-white shadow-lg z-40 px-[50px] py-6 transition-transform duration-300 ease-in-out ${
            destinationsOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0 pointer-events-none"
          }`}
          style={{
            transformOrigin: "top",
            backgroundImage: `url(${bgDestination})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-2 gap-8 text-gray-800 min-h-[200px]">
            {/* International Trips */}
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl text-blue-800 font-semibold mb-4 border-b pb-2">
                International Trips
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/destinations/thailand"
                    onClick={closeAllMenus}
                    className="hover:text-red-600 transition text-xl font-semibold"
                  >
                    Thailand
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations/singapore"
                    onClick={closeAllMenus}
                    className="hover:text-red-600 transition text-xl font-semibold"
                  >
                    Singapore
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations/europe"
                    onClick={closeAllMenus}
                    className="hover:text-red-600 transition text-xl font-semibold"
                  >
                    Europe
                  </Link>
                </li>
                {/* Add more if needed */}
              </ul>
            </div>

            {/* Domestic Trips */}
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl text-blue-800 font-semibold mb-4 border-b pb-2">
                Domestic Trips
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/destinations/goa"
                    onClick={closeAllMenus}
                    className="hover:text-red-600 transition text-xl font-semibold"
                  >
                    Goa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations/kerala"
                    onClick={closeAllMenus}
                    className="hover:text-red-600 transition text-xl font-semibold"
                  >
                    Kerala
                  </Link>
                </li>
                <li>
                  <Link
                    to="/destinations/himachal"
                    onClick={closeAllMenus}
                    className="hover:text-red-600 transition text-xl font-semibold"
                  >
                    Himachal Pradesh
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-right">
            <button
              onClick={() => setDestinationsOpen(false)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLoginSuccess={(user) => {
          setUser(user);
          // Also save user info in localStorage here for persistence
          localStorage.setItem("dream2flyUser", JSON.stringify(user));
        }}
      />
    </>
  );
};

export default Header;
