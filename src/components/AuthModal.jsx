import { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "../assets/images/login.jpg";
import { toast } from "react-toastify";


export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message] = useState("");

  // Lock scroll on modal open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      // Validate fields
      if (password !== confirmPassword) {
        toast.warning("Passwords do not match");
        return;
      }

      // FakeStore Signup API
      try {
        const res = await axios.post("https://fakestoreapi.com/users", {
          email,
          username,
          password,
          name: {
            firstname: "First",
            lastname: "Last",
          },
          address: {
            city: "City",
            street: "Street",
            number: 123,
            zipcode: "12345-6789",
            geolocation: {
              lat: "0",
              long: "0",
            },
          },
          phone: "123-456-7890",
        });

        toast.success(`Signup success! ID: ${res.data.id}`);
        onClose();
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (err) {
        console.error(err);
        toast.error("Signup failed");
      }
    } else {
      // Login: Fetch all users and check match
      try {
        const res = await axios.get("https://fakestoreapi.com/users");
        const matchedUser = res.data.find(
          (user) => user.email === email && user.password === password
        );

        if (matchedUser) {
          toast.success(`Login successfully`);
          localStorage.setItem("dream2flyUser", JSON.stringify(matchedUser));
          if (onLoginSuccess) {
            onLoginSuccess(matchedUser);
          }
          onClose(); // Close modal
        } else {
          toast.error("Invalid username or password");
        }
      } catch (err) {
        toast.error("Login failed, please try again");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-6xl max-h-[85vh] overflow-hidden">
        {/* Left Image Panel */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={backgroundImage}
            alt="heritage"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form Panel */}
        <div className="w-full lg:w-1/2 p-10 relative flex flex-col justify-center items-center max-h-[85vh] overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-2xl font-bold"
            onClick={onClose}
          >
            ×
          </button>

          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSignup ? "Create an account" : "Login"}
          </h2>

          {/* Login / Signup Toggle */}
          <div className="flex justify-center mb-4">
            <button
              className={`mr-6 font-semibold text-lg ${
                isSignup ? "text-red-600" : "text-gray-500"
              }`}
              onClick={() => setIsSignup(true)}
            >
              Signup
            </button>
            <button
              className={`font-semibold text-lg ${
                !isSignup ? "text-black" : "text-gray-500"
              }`}
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>
          </div>

          {message && (
            <p className="text-sm text-center mb-4 text-red-600">{message}</p>
          )}

          {/* Form */}

          <form
            className="grid grid-cols-2 gap-4 w-full"
            onSubmit={handleSubmit}
          >
            {isSignup ? (
              <>
                <input
                  type="text"
                  placeholder="First Name*"
                  className="border p-2 rounded col-span-1"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="border p-2 rounded col-span-1"
                  required
                />
                <input
                  type="text"
                  placeholder="Username*"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border p-2 rounded col-span-2"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 rounded col-span-2"
                  required
                />
                <div className="relative col-span-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                  />
                  <span
                    className="absolute top-2 right-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    👁
                  </span>
                </div>
                <div className="relative col-span-2">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password*"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                  />
                  <span
                    className="absolute top-2 right-4 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    👁
                  </span>
                </div>
                <select className="border p-2 rounded col-span-2" required>
                  <option value="">Country*</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
              </>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 rounded col-span-2"
                  required
                />
                <div className="relative col-span-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                  />
                  <span
                    className="absolute top-2 right-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    👁
                  </span>
                </div>
              </>
            )}

            <div className="col-span-2 mt-4 bg-gray-100 rounded text-center py-4 text-sm text-gray-500">
              [reCAPTCHA placeholder]
            </div>

            <button
              type="submit"
              className="col-span-2 mt-4 bg-red-600 text-white rounded-full py-2 text-xl hover:bg-red-700"
            >
              {isSignup ? "Signup" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
