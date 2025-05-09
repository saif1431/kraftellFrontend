import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../config";

const ManufacturerForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const countryList = [
    { code: "AO", name: "Angola", phoneCode: "+244" },
    { code: "BD", name: "Bangladesh", phoneCode: "+880" },
    { code: "CY", name: "Cyprus", phoneCode: "+357" },
    { code: "DK", name: "Denmark", phoneCode: "+45" },
  ];

  useEffect(() => {
    if (selectedCountryCode && !phoneNumber.startsWith(selectedCountryCode)) {
      setPhoneNumber(selectedCountryCode);
      setFormData(prev => ({
        ...prev,
        phoneNumber: selectedCountryCode
      }));
    }
  }, [selectedCountryCode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setFormData(prev => ({
      ...prev,
      country: countryCode
    }));
    
    const selectedCountry = countryList.find(c => c.code === countryCode);
    if (selectedCountry) {
      setSelectedCountryCode(selectedCountry.phoneCode);
    } else {
      setSelectedCountryCode("");
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    
    if (selectedCountryCode) {
      if (value.startsWith(selectedCountryCode) || value === "") {
        setPhoneNumber(value);
        setFormData(prev => ({
          ...prev,
          phoneNumber: value
        }));
      }
    } else {
      setPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        phoneNumber: value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
      }));

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
          <div className="flex flex-col items-center mb-6">
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              ref={fileInputRef}
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

          <div className="rounded-md space-y-4">
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

            <div>
              <select
                id="country"
                name="country"
                required
                className="mt-1 block w-full px-3 py-3 bg-white text-gray-600 rounded-sm outline-none"
                value={formData.country}
                onChange={handleCountryChange}
              >
                <option value="">Country</option>
                {countryList.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                type="tel"
                required
                className="mt-1 block w-full px-3 py-3 bg-white rounded-sm outline-none"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              {selectedCountryCode && (
                <p className="text-xs  text-gray-500 mt-1">
                  Country code: {selectedCountryCode}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-end justify-end">
            <button
              type="submit"
              className="flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-600 hover:bg-indigo-700"
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