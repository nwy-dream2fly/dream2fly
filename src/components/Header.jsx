import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { useNavigate } from "react-router-dom";

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

  const handleSignOut = () => {
    localStorage.removeItem("dream2flyUser");
    setUser(null);
    navigate("/"); // redirect to home page
  };

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("dream2flyUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Handle delayed transparency after load
  useEffect(() => {
    initialTimerRef.current = setTimeout(() => setShowBg(false), 2000);
    return () => clearTimeout(initialTimerRef.current);
  }, []);

  // Desktop Destinations Dropdown Visibility
  useEffect(() => {
    if (destinationsOpen) {
      setPanelVisible(true);
    } else if (panelVisible) {
      const timer = setTimeout(() => setPanelVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [destinationsOpen, panelVisible]);

  // Scroll behavior
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

  // Focus input when search expands
  useEffect(() => {
    if (searchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [searchExpanded]);

  // Collapse search on outside click or ESC key
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
        <div className="mx-auto px-8 py-4 flex justify-between items-center">
          {/* Left: Logo - 30% */}
          <div className="w-1/3">
            <div className="text-2xl font-extrabold text-white">
              Dream<span className="text-red-500">2</span>Fly
            </div>
          </div>

          {/* Center: Navigation - 40% */}
          <div className="w-2/5 hidden md:flex justify-center space-x-8 text-white font-medium text-xl relative">
            <button
              onClick={toggleDestinations}
              className="hover:text-red-300 transition focus:outline-none flex items-center gap-1"
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
            <Link to="/experiences" className="hover:text-red-300 transition">
              Experiences
            </Link>
            <Link to="/plan" className="hover:text-red-300 transition">
              Plan Your Trip
            </Link>
          </div>

          {/* Right: Search + User - 30% */}
          <div className="w-1/3 flex items-center justify-end space-x-4 relative">
            {/* Search */}
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

            {/* Show full name before icon if user is logged in */}
            {user && (
              <div className="relative group ml-4">
                <span className="text-white font-bold hidden sm:inline-block truncate max-w-[120px] cursor-pointer">
                  {`Hello, ${user.name.firstname} ${user.name.lastname}`}
                </span>

                <button
                  onClick={handleSignOut}
                  className="absolute top-full mt-1 right-0 opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow text-sm transition-opacity duration-200"
                >
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"
                      />
                    </svg>
                    <span>Sign Out</span>
                  </div>
                </button>
              </div>
            )}

            {/* User icon */}
            <button
              onClick={() => setShowModal(true)}
              className="text-white hover:text-red-500 m-1"
              aria-label="Login or Register"
            >
              <User size={30} />
            </button>

            {/* Mobile menu toggle */}
            <button onClick={toggleMenu} className="md:hidden text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-sky-400 w-full fixed top-full left-0 px-4 py-3 space-y-3 text-white shadow-lg z-50">
            <button
              onClick={toggleMobileDest}
              className="w-full text-left flex justify-between items-center text-white font-semibold"
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
                mobileDestOpen ? "max-h-40" : "max-h-0"
              } pl-4 mt-1 space-y-1`}
            >
              <Link
                to="/destinations/europe"
                onClick={closeAllMenus}
                className="block hover:text-red-200"
              >
                Europe
              </Link>
              <Link
                to="/destinations/asia"
                onClick={closeAllMenus}
                className="block hover:text-red-200"
              >
                Asia
              </Link>
              <Link
                to="/destinations/america"
                onClick={closeAllMenus}
                className="block hover:text-red-200"
              >
                America
              </Link>
            </div>

            <Link
              to="/experiences"
              className="block hover:text-red-200"
              onClick={closeAllMenus}
            >
              Experiences
            </Link>
            <Link
              to="/plan"
              className="block hover:text-red-200"
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
          className={`fixed top-[64px] left-0 w-full bg-white shadow-lg z-40 px-8 py-6 transition-transform duration-300 ease-in-out ${
            destinationsOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0 pointer-events-none"
          }`}
          style={{ transformOrigin: "top" }}
        >
          <div className="grid grid-cols-3 gap-4 text-gray-800">
            <Link
              to="/destinations/europe"
              onClick={closeAllMenus}
              className="hover:text-red-600"
            >
              Explore Europe
            </Link>
            <Link
              to="/destinations/asia"
              onClick={closeAllMenus}
              className="hover:text-red-600"
            >
              Discover Asia
            </Link>
            <Link
              to="/destinations/america"
              onClick={closeAllMenus}
              className="hover:text-red-600"
            >
              Visit America
            </Link>
          </div>
          <div className="mt-6 text-right">
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLoginSuccess={(user) => setUser(user)} // <- this is key
      />
    </>
  );
};

export default Header;
