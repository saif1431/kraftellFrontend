import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

function AdminLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Dummy hardcoded login check
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/users");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-blue-800">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-700 flex items-center justify-center">
            <FiLock className="mr-2" /> Admin Login
          </h2>
        </div>

        {/* Username Field */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 font-medium mb-1">
            Username
          </label>
          <div className="flex items-center border rounded-lg px-3">
            <FiUser className="text-gray-400" />
            <input
              type="text"
              className="w-full px-2 py-2 focus:outline-none"
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6 relative">
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <div className="flex items-center border rounded-lg px-3">
            <FiLock className="text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-2 py-2 focus:outline-none"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default AdminLoginPage;
