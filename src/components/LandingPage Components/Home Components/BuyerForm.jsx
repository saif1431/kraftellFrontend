import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BuyerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
    companyType: "",
    productType: "",
    country: "",
    phoneNumber: "",
    profileImage: null,
    portfolioFile: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const portfolioInputRef = useRef(null);

  // Country list
  const countryList = [
    { code: "AO", name: "Angola" },
    { code: "BD", name: "Bangladesh" },
    { code: "CY", name: "Cyprus" },
    { code: "DK", name: "Denmark" },
  ];

  const companyTypes = [
    { name: "Startup" },
    { name: "Solo Creator" },
    { name: "SME" },
    { name: "Other" },
  ];

  const productTypes = [
    { name: "Fashion" },
    { name: "Accessories" },
    { name: "Crafts" },
    { name: "Others" },
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

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePortfolioChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        portfolioFile: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("role", "buyer");
    data.append("businessName", formData.businessName);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("location", formData.country);

    // Ensure productCategories is an array
    const categories = Array.isArray(formData.productType)
      ? formData.productType
      : [formData.productType];
    categories.forEach((cat) => data.append("productCategories[]", cat));

    if (formData.profileImage) {
      data.append("profilePicture", formData.profileImage);
    }

    if (formData.portfolioFile) {
      data.append("portfolio", formData.portfolioFile);
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/auth/register`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(response.data.message || "Registered successfully!");
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
            Register As Buyer
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
                id="businessName"
                name="businessName"
                placeholder="Business Name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-3 bg-white rounded-sm outline-none"
                value={formData.businessName}
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

            {/* Company Type */}
            <div>
              <select
                id="companyType"
                name="companyType"
                required
                className="mt-1 block w-full px-3 py-3 bg-white text-gray-500 rounded-sm outline-none"
                value={formData.companyType}
                onChange={handleChange}
              >
                <option value="">Company Type</option>
                {companyTypes.map((company, index) => (
                  <option key={index} value={company.name}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Country */}
            <div>
              <select
                id="country"
                name="country"
                required
                className="mt-1 block w-full px-3 py-3 bg-white text-gray-500 rounded-sm outline-none"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Location</option>
                {countryList.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Product Type */}
            <div>
              <select
                id="productType"
                name="productType"
                required
                className="mt-1 block w-full px-3 py-3 bg-white text-gray-500 rounded-sm outline-none"
                value={formData.productType}
                onChange={handleChange}
              >
                <option value="">Product Category</option>
                {productTypes.map((product, index) => (
                  <option key={index} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Portfolio Upload */}
            <div>
              <input
                type="file"
                id="portfolioFile"
                name="portfolioFile"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handlePortfolioChange}
                ref={portfolioInputRef}
              />

              <button
                type="button"
                onClick={() => portfolioInputRef.current.click()}
                className="w-full px-3 py-3 bg-white rounded-sm text-gray-500 outline-none border border-gray-300 text-left"
              >
                {formData.portfolioFile?.name || "Portfolio Upload (optional)"}
              </button>
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

export default BuyerForm;
