import React, { useEffect, useState } from "react";
import profileImg from "/profileImg.svg";
import { FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import BASE_URL from "../../../config";

function DashboardProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch the user profile from the API
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/auth/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        toast.error("Error fetching user data");
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { profilePicture, brandName, role, lastLogin } = userData;

  const profileSrc =
    profilePicture?.[0] && profilePicture[0].startsWith("/uploads")
      ? `${BASE_URL}${profilePicture[0]}`
      : profileImg;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center gap-2">
      <img className="w-20 rounded-full" src={profileSrc} alt="Profile" />
      <h1 className="text-2xl font-semibold">{brandName}</h1>
      <p className="text-primary">{role}</p>
      <span className="text-gray-500">
        Last login: {new Date(lastLogin).toLocaleDateString()}
      </span>
      <div className="flex items-center gap-2 text-primary mt-3">
        <NavLink to="/EditProfile" className="flex items-center gap-2">
          <FaEdit />
          <span>Edit Profile</span>
        </NavLink>
      </div>
    </div>
  );
}

export default DashboardProfile;
