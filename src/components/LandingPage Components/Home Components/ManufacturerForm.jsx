import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../config"; // make sure it's correct

const ManufacturerForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    brandName: "",
    email: "",
    password: "",
    country: "",
    phoneNumber: "",
    profileImage: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  // Limited country list with only 4 countries
  const countryList = [
    { code: "AO", name: "Angola" },
    { code: "BD ", name: "Bangladesh" },
    { code: "CY", name: "Cyprus" },
    { code: "DK", name: "Denmark" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("role", "manufacture");
    data.append("brandName", formData.brandName);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("location", formData.country);
    data.append("phoneNumber", formData.phoneNumber);
    if (formData.profileImage) {
      data.append("profilePicture", formData.profileImage);
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/auth/register`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(
        response.data.message || "Manufacturer registered successfully!"
      );
      navigate("/Login");
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong!";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-[#EAEAEA] p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-2xl font-semibold text-gray-900">
            Register As Manufacturer
          </h2>
        </div>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center mb-6">
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <label htmlFor="profileImage" className="cursor-pointer">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Profile preview"
                  className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </label>
          </div>

          {/* Form Fields */}
          <div className="rounded-md space-y-4">
            {/* Full Name */}
            <div>
              <input
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-3 bg-white rounded-sm outline-none"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Brand Name */}
            <div>
              <input
                id="brandName"
                name="brandName"
                placeholder="Brand Name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-3 bg-white rounded-sm outline-none"
                value={formData.brandName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-3 bg-white rounded-sm outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-3 bg-white rounded-sm outline-none"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Country (Now with only 4 options) */}
            <div>
              <select
                id="country"
                name="country"
                required
                className="mt-1 block w-full px-3 py-3 bg-white text-gray-600 rounded-sm outline-none"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Country</option>
                {countryList.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                type="tel"
                required
                className="mt-1 block w-full px-3 py-3 bg-white rounded-sm outline-none"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-end justify-end">
            <button
              type="submit"
              className="flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManufacturerForm;
