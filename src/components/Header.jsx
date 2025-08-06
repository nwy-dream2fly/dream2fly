import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AuthModal from "../components/auth/AuthModal";
import BlueLogo from "../assets/images/dream2fly logo horizontal (white).png";
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
  const { setUser } = useAuth();

  // Sign out
  const handleSignOut = () => {
    localStorage.removeItem("dream2flyUser");
    setUser(null);
    navigate("/");
  };

  // Delay hiding background after 15 seconds
  useEffect(() => {
    initialTimerRef.current = setTimeout(() => setShowBg(false), 15000);
    return () => clearTimeout(initialTimerRef.current);
  }, []);

  // Dropdown logic
  useEffect(() => {
    if (destinationsOpen) {
      setPanelVisible(true);
    } else if (panelVisible) {
      const timer = setTimeout(() => setPanelVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [destinationsOpen, panelVisible]);

  // Scroll-based background toggle
  useEffect(() => {
    let lastScrollTop = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop || scrollTop > 0) {
        setShowBg(true);
        clearTimeout(scrollTimerRef.current);
      } else {
        scrollTimerRef.current = setTimeout(() => setShowBg(false), 15000);
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(scrollTimerRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Expand search
  useEffect(() => {
    if (searchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [searchExpanded]);

  // Collapse search on outside click or ESC
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
      if (e.key === "Escape") setSearchExpanded(false);
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

  const toggleMobileDest = () => setMobileDestOpen(!mobileDestOpen);
  const closeAllMenus = () => {
    setIsOpen(false);
    setDestinationsOpen(false);
    setMobileDestOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-[15000ms] ${
          showBg
            ? "bg-blue-600"
            : "bg-transparent"
        }`}
      >
        <div className="mx-0 sm:mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="w-1/3">
            <img
              src={BlueLogo}
              alt="Dream2Fly Logo"
              className="h-5 sm:h-6 ml-0 sm:ml-2 sm:m-0 w-auto"
            />
          </div>

          {/* Nav Center */}
          <div className="w-3/5 hidden md:flex justify-center space-x-8 text-white font-medium text-base relative">
            <Link to="/home" className="hover:text-red-300 transition">Home</Link>

            <button
              onClick={toggleDestinations}
              className="hover:text-red-300 transition flex items-center gap-1 font-medium"
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

            <Link to="/experiences" className="hover:text-red-300 transition">Experiences</Link>
            <Link to="/plan" className="hover:text-red-300 transition">Plan Your Trip</Link>
            <Link to="/businesstrip" className="hover:text-red-300 transition">Business Trip</Link>
          </div>

          {/* Right: Search & User */}
          <div className="w-1/3 flex items-center justify-end space-x-4 relative">
            {!searchExpanded && (
              <button
                onClick={() => setSearchExpanded(true)}
                className="text-white focus:outline-none"
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

            <button onClick={toggleMenu} className="md:hidden text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-sky-400 w-full fixed top-full left-0 px-4 py-4 space-y-3 text-white shadow-lg z-50">
            <Link to="/home" onClick={closeAllMenus} className="block hover:text-red-200">Home</Link>
            <button onClick={toggleMobileDest} className="flex justify-between w-full">
              <span>Destinations</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  mobileDestOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`transition-all pl-4 mt-1 space-y-1 ${
                mobileDestOpen ? "max-h-96" : "max-h-0 overflow-hidden"
              }`}
            >
              <h4 className="text-sm font-semibold">International</h4>
              <Link to="/destinations/thailand" onClick={closeAllMenus}>Thailand</Link>
              <Link to="/destinations/singapore" onClick={closeAllMenus}>Singapore</Link>
              <Link to="/destinations/europe" onClick={closeAllMenus}>Europe</Link>

              <h4 className="text-sm font-semibold mt-3">Domestic</h4>
              <Link to="/destinations/goa" onClick={closeAllMenus}>Goa</Link>
              <Link to="/destinations/kerala" onClick={closeAllMenus}>Kerala</Link>
              <Link to="/destinations/himachal" onClick={closeAllMenus}>Himachal Pradesh</Link>
            </div>

            <Link to="/experiences" onClick={closeAllMenus} className="block hover:text-red-200">Experiences</Link>
            <Link to="/plan" onClick={closeAllMenus} className="block hover:text-red-200">Plan Your Trip</Link>

            <input
              type="text"
              placeholder="Search..."
              className="mt-2 w-full px-3 py-1 rounded-full bg-white text-gray-700 focus:outline-none"
            />
          </div>
        )}
      </header>

      {/* Dropdown Panel */}
      {panelVisible && (
        <div
          className={`fixed top-[64px] left-0 w-full bg-white shadow-lg z-40 px-[50px] py-6 transition-transform duration-300 ${
            destinationsOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url(${bgDestination})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-2 gap-8 text-gray-800 min-h-[200px]">
            <div className="text-center">
              <h3 className="text-3xl text-blue-800 font-semibold mb-4 border-b pb-2">International Trips</h3>
              <ul className="space-y-2">
                <li><Link to="/destinations/thailand" onClick={closeAllMenus}>Thailand</Link></li>
                <li><Link to="/destinations/singapore" onClick={closeAllMenus}>Singapore</Link></li>
                <li><Link to="/destinations/europe" onClick={closeAllMenus}>Europe</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-3xl text-blue-800 font-semibold mb-4 border-b pb-2">Domestic Trips</h3>
              <ul className="space-y-2">
                <li><Link to="/destinations/goa" onClick={closeAllMenus}>Goa</Link></li>
                <li><Link to="/destinations/kerala" onClick={closeAllMenus}>Kerala</Link></li>
                <li><Link to="/destinations/himachal" onClick={closeAllMenus}>Himachal Pradesh</Link></li>
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

      {/* Login Modal */}
      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLoginSuccess={(user) => {
          setUser(user);
          localStorage.setItem("dream2flyUser", JSON.stringify(user));
        }}
      />
    </>
  );
};

export default Header;
