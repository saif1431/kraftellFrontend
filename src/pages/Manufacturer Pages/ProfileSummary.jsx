import React, { useEffect, useState } from "react";
import ManufacturerNavbar from "../../components/Reuseable Component/ManufacturerNavbar";
import ManufacturingCapabilities from "../../components/Manufacturer Components/ProfileSummary/ManufacturingCapabilities";
import Certificates from "../../components/Manufacturer Components/ProfileSummary/Certificates";
import Portfolio from "../../components/Manufacturer Components/ProfileSummary/Portfolio";
import Footer from "../../components/Reuseable Component/Footer";
import BASE_URL from "../../config";
import { toast } from "react-toastify";

function ProfileSummary() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        toast.error("Failed to load user profile");
      }
    };

    fetchUserData();
  }, []);

  if (!userData)
    return (
      <div className="text-white text-center py-10">Loading profile...</div>
    );

  return (
    <div className="bg-primary min-h-screen">
      <ManufacturerNavbar />
      <div className="flex flex-col gap-6 lg:px-18 px-4 lg:py-14 py-8">
        <ManufacturingCapabilities
          capabilities={userData.manufacturingCapabilities}
        />
        <Certificates certifications={userData.certifications} />
        <Portfolio portfolio={userData.documents} />
      </div>
      <Footer />
    </div>
  );
}

export default ProfileSummary;
