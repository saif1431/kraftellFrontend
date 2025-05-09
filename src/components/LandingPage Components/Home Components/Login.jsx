import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../config";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, formData);
      const { token } = res.data;

      // Store token
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Decode token to get expiration
      const decoded = jwtDecode(token);

      const expirationTime = decoded.exp * 1000;

      // Auto logout when token expires
      setTimeout(() => {
        localStorage.removeItem("token");
        toast.info("Session expired. Please log in again.");
        navigate("/Login");
      }, expirationTime - Date.now());

      toast.success("Login successful!");
      navigate(
        `/${decoded.role === "buyer" ? "dashboard" : "ManufacturerDashboard"}`
      );
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-primary p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">Login</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full px-3 py-3 rounded-md bg-white outline-none sm:text-sm"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full px-3 py-3 rounded-md bg-white outline-none sm:text-sm"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Sign In Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-indigo-700"
            >
              Sign in
            </button>
          </div>

          {/* Forgot password centered below */}
          <div className="text-center mt-2">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
