// src/components/auth/AuthModal.jsx
import backgroundImage from "../../assets/images/login-1.jpg";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState, useEffect } from "react";
import bgImage from '../../assets/images/flight.jpg'
import Dream2flyLogo from '../../assets/images/dream2fly only logo.png'

export default function AuthModal({ isOpen, onClose }) {
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg shadow-xl flex w-full max-w-6xl max-h-[85vh] overflow-hidden border border-gray-500">
        <div className="hidden lg:block w-1/2">
          <img src={backgroundImage} alt="Travel" className="h-full w-full object-cover" />
        </div>

        <div
          className="w-full lg:w-1/2 p-10 relative flex flex-col items-center justify-center overflow-y-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 0z-0" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl font-bold text-white"
          >
            ×
          </button>

          {/* Content */}
          <div className="relative z-10 w-full max-w-md">


            <img src={Dream2flyLogo} alt="Dream2Fly Logo" className="mx-auto mb-4 w-28" />

            <h2 className="text-3xl text-gray-50 font-semibold mb-4 text-center mt-3">
              {isSignup ? "Create an account" : "Login"}
            </h2>

            <div className="flex justify-center gap-6 mb-4">
              <button
                onClick={() => setIsSignup(true)}
                className={isSignup ? "text-gray-50 text-2xl font-bold" : "text-black font-medium"}
              >
                Signup
              </button>
              <button
                onClick={() => setIsSignup(false)}
                className={!isSignup ? "text-gray-50 text-2xl font-bold" : "text-black font-medium"}
              >
                Login
              </button>
            </div>

            {isSignup ? <SignupForm onClose={onClose} /> : <LoginForm onClose={onClose} />}
          </div>
        </div>
      </div>
    </div>
  );
}
