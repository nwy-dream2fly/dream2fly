import { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "../assets/images/login.jpg";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export default function AuthModal({ isOpen, onClose }) {
  const { setUser } = useAuth();  // <-- get setUser from context

  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      if (password !== confirmPassword) {
        toast.warning("Passwords do not match");
        return;
      }

      try {
        const res = await axios.post("https://fakestoreapi.com/users", {
          email,
          username,
          password,
          name: { firstname: "First", lastname: "Last" },
          address: {
            city: "City",
            street: "Street",
            number: 123,
            zipcode: "12345-6789",
            geolocation: { lat: "0", long: "0" },
          },
          phone: "123-456-7890",
        });

        toast.success("Signup successful!");
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
      try {
        const loginRes = await axios.post(
          "https://fakestoreapi.com/auth/login",
          { username, password }
        );

        if (loginRes.data?.token) {
          localStorage.setItem("token", loginRes.data.token);

          const usersRes = await axios.get("https://fakestoreapi.com/users");
          const matchedUser = usersRes.data.find(
            (u) => u.username === username
          );

          if (matchedUser) {
            localStorage.setItem(
              "dream2flyUser",
              JSON.stringify(matchedUser)
            );
            toast.success("Login successful!");

            // Updated part: use setUser and close modal
            setUser(matchedUser);
            onClose();
          } else {
            toast.error("User details not found");
          }
        } else {
          toast.error("Login failed");
        }
      } catch (err) {
        console.error(err);
        toast.error("Invalid login credentials");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg shadow-xl flex w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Left image */}
        <div className="hidden lg:block w-1/2">
          <img
            src={backgroundImage}
            alt="Travel"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/2 p-10 relative flex flex-col justify-center max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl font-bold"
          >
            ×
          </button>

          <h2 className="text-3xl font-bold mb-4 text-center">
            {isSignup ? "Create an account" : "Login"}
          </h2>

          <div className="flex justify-center gap-6 mb-4">
            <button
              onClick={() => setIsSignup(true)}
              className={`font-semibold text-lg ${
                isSignup ? "text-red-600" : "text-gray-500"
              }`}
            >
              Signup
            </button>
            <button
              onClick={() => setIsSignup(false)}
              className={`font-semibold text-lg ${
                !isSignup ? "text-black" : "text-gray-500"
              }`}
            >
              Login
            </button>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-full">
            {isSignup ? (
              <>
                <input
                  type="text"
                  placeholder="First Name*"
                  className="col-span-1 border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="col-span-1 border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Username*"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="col-span-2 border p-2 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-2 border p-2 rounded"
                  required
                />
                <div className="col-span-2 relative">
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
                <div className="col-span-2 relative">
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
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Username*"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="col-span-2 border p-2 rounded"
                  required
                />
                <div className="col-span-2 relative">
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

            <div className="col-span-2 mt-4 text-center text-sm text-gray-500 bg-gray-100 py-3 rounded">
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
