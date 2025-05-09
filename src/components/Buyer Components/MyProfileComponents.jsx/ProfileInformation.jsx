import React, { useState } from "react";
import BASE_URL from "../../../config";
import { toast } from "react-toastify";

function ProfileInformation({ userData }) {
  const { role, businessName, brandName, email } = userData;
  const displayName = role === "buyer" ? businessName : brandName;

  const [formData, setFormData] = useState({
    displayName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/api/auth/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          [role === "buyer" ? "businessName" : "brandName"]:
            formData.displayName,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(`Update failed: ${err.message}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Profile Information</h1>

      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="displayName">
          Business Name
        </label>
        <input
          id="displayName"
          name="displayName"
          className="text-lg w-full border border-gray-300 px-3 py-2 rounded-lg outline-none"
          type="text"
          value={formData.displayName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className="text-lg w-full border border-gray-300 px-3 py-2 rounded-lg outline-none bg-gray-100 cursor-not-allowed"
          type="email"
          value={email}
          readOnly
        />
      </div>

      <button
        className="bg-[#3977ED] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        onClick={handleUpdate}
      >
        Update Changes
      </button>
    </div>
  );
}

export default ProfileInformation;
