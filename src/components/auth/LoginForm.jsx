// src/components/auth/LoginForm.jsx
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { HiEyeOff, HiEye } from "react-icons/hi";

export default function LoginForm({ onClose }) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post("https://fakestoreapi.com/auth/login", { username, password });
      const token = loginRes.data.token;
      if (!token) throw new Error("No token received");

      const usersRes = await axios.get("https://fakestoreapi.com/users");
      const userData = usersRes.data.find((u) => u.username === username);
      if (!userData) throw new Error("User not found");

      login(token, userData);
      toast.success("Login successful!");
      onClose?.();

    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} className="grid grid-cols-2 gap-4 w-full">
      <input type="text" placeholder="Username*" value={username} onChange={e => setUsername(e.target.value)} className="col-span-2 border p-2 rounded" required />
      <div className="col-span-2 relative">
        
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password*"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
        <span
          className="absolute top-3 right-4 cursor-pointer h-10 w-10"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <HiEyeOff /> : <HiEye />}
        </span>
        <div class="text-base mt-1">
            <a href="#" class="font-semibold text-gray-300 hover:text-white">Forgot password?</a>
          </div>
      </div>
      <button type="submit" className="col-span-2 mt-4 bg-red-600 text-white rounded-full py-2 text-xl hover:bg-red-700">Login</button>
    </form>
  );
}
