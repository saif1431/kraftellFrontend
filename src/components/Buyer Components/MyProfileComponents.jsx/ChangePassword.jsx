import React, { useState } from "react";
import { toast } from "react-toastify";
import BASE_URL from "../../../config";

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { currentPassword, newPassword, confirmPassword } = formData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      return toast.error("All fields are required.");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("New passwords do not match.");
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/api/auth/update-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      toast.success("Password updated successfully!");

      // Optionally clear the form
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Change Password</h1>

      <div className="flex flex-col gap-2 mt-6">
        <label className="text-lg">Current Password</label>
        <input
          type="password"
          name="currentPassword"
          className="text-lg border border-gray-300 px-3 py-2 rounded-lg outline-none"
          placeholder="Your Current Password"
          value={formData.currentPassword}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg">New Password</label>
        <input
          type="password"
          name="newPassword"
          className="text-lg border border-gray-300 px-3 py-2 rounded-lg outline-none"
          placeholder="Enter New Password"
          value={formData.newPassword}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg">Confirm New Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="text-lg border border-gray-300 px-3 py-2 rounded-lg outline-none"
          placeholder="Confirm New Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <button
        className="bg-[#3977ED] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        onClick={handleSubmit}
      >
        Save Changes
      </button>
    </div>
  );
}

export default ChangePassword;
