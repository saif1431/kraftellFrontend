import React, { useEffect, useState } from "react";
import DashBoardNavbar from "../../components/Reuseable Component/DashBoardNavbar";
import ProfileDetail from "../../components/Buyer Components/MyProfileComponents.jsx/ProfileDetail";
import ProfileInformation from "../../components/Buyer Components/MyProfileComponents.jsx/ProfileInformation";
import Document from "../../components/Buyer Components/MyProfileComponents.jsx/Document";
import ChangePassword from "../../components/Buyer Components/MyProfileComponents.jsx/ChangePassword";
import NotificationsPage from "../Manufacturer Pages/NotificationsPage";
import BASE_URL from "../../config";
import { toast } from "react-toastify";

function MyProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
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
        toast.error("Failed to fetch profile");
      }
    };

    fetchUserData();
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  if (!userData) return <div>Loading profile...</div>;

  return (
    <div className="bg-[#F5F5F5] h-fit">
      <DashBoardNavbar />
      <div className="flex flex-col lg:flex-row items-start lg:px-18 px-4 py-14 gap-4">
        <div className="lg:w-[20%] w-full">
          <ProfileDetail onTabChange={handleTabChange} userData={userData} />
        </div>
        <div className="flex-1 w-full space-y-8">
          {activeTab === "profile" && (
            <>
              <ProfileInformation userData={userData} />
              <Document userData={userData} />
            </>
          )}

          {activeTab === "notifications" && <NotificationsPage />}
          {activeTab === "security" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
