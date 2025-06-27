// src/components/auth/AuthModal.jsx
import backgroundImage from "../../assets/images/login.jpg";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState, useEffect } from "react";
import bgImage from '../../assets/images/login-2.jpg'

export default function AuthModal({ isOpen, onClose }) {
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg shadow-xl flex w-full max-w-6xl max-h-[80vh] overflow-hidden">
        <div className="hidden lg:block w-1/2">
          <img src={backgroundImage} alt="Travel" className="h-full w-full object-cover" />
        </div>

        <div className="w-full lg:w-1/2 p-10 relative flex flex-col justify-center overflow-y-auto bg-cover bg-center bg-black"
            style={{ backgroundImage: `url(${bgImage})` }}>
          <button onClick={onClose} className="absolute top-4 right-4 text-2xl font-bold">×</button>
          <h2 className="text-3xl text-white font-bold mb-4 text-center mt-3">
            {isSignup ? "Create an account" : "Login"}
          </h2>

          <div className="flex justify-center gap-6 mb-4">
            <button onClick={() => setIsSignup(true)} className={isSignup ? "text-red-600 font-semibold" : "text-gray-800"}>Signup</button>
            <button onClick={() => setIsSignup(false)} className={!isSignup ? "text-black font-semibold" : "text-gray-800"}>Login</button>
          </div>

          {isSignup ? <SignupForm onClose={onClose} /> : <LoginForm onClose={onClose} />}
        </div>
      </div>
    </div>
  );
}
