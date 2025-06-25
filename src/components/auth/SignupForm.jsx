// src/components/auth/SignupForm.jsx
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

export default function SignupForm({ onClose }) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirm) return toast.warning("Passwords do not match");

    try {
      await axios.post("https://fakestoreapi.com/users", {
        email, username, password,
        name: { firstname: "First", lastname: "Last" },
        address: { city: "City", street: "Street", number: 123, zipcode: "12345", geolocation: { lat: "0", long: "0" } },
        phone: "1234567890"
      });
      toast.success("Signup successful! Logging in...");
      // Auto-login after signup:
      const loginRes = await axios.post("https://fakestoreapi.com/auth/login", { username, password });
      const token = loginRes.data.token;
      const usersRes = await axios.get("https://fakestoreapi.com/users");
      const userData = usersRes.data.find(u => u.username === username);
      login(token, userData);

      onClose?.();

    } catch {
      toast.error("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup} className="grid grid-cols-2 gap-4 w-full">
      <input type="text" placeholder="Username*" value={username} onChange={e => setUsername(e.target.value)} className="col-span-2 border p-2 rounded" required />
      <input type="email" placeholder="Email*" value={email} onChange={e => setEmail(e.target.value)} className="col-span-2 border p-2 rounded" required />
      <div className="col-span-2 relative">
        <input type={showPassword ? "text" : "password"} placeholder="Password*" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 rounded w-full" required />
        <span className="absolute top-2 right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>👁</span>
      </div>
      <div className="col-span-2 relative">
        <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password*" value={confirm} onChange={e => setConfirm(e.target.value)} className="border p-2 rounded w-full" required />
        <span className="absolute top-2 right-4 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>👁</span>
      </div>
      <button type="submit" className="col-span-2 mt-4 bg-red-600 text-white rounded-full py-2 text-xl hover:bg-red-700">
        Signup
      </button>
    </form>
  );
}
