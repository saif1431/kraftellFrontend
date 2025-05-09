import React, { useEffect, useState } from "react";
import profileImg from "/profileImg.svg";
import { toast } from "react-toastify";
import BASE_URL from "../../../config";

function ProfileName() {
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

  const { profilePicture, businessName, lastLogin } = userData;

  const profileSrc =
    profilePicture?.[0] && profilePicture[0].startsWith("/uploads")
      ? `${BASE_URL}${profilePicture[0]}`
      : profileImg;

  return (
    <div className="py-8 lg:px-12 px-4 bg-white flex lg:items-center items-start gap-4 w-[90%] mx-auto mt-12 rounded-lg shadow-md">
      <div className="w-16">
        <img src={profileSrc} alt="Profile" className="rounded-full" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="lg:text-3xl text-xl font-semibold">
          Welcome back, {businessName}!
        </h1>
        <span className="text-primary">
          Last login: {new Date(lastLogin).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

export default ProfileName;
