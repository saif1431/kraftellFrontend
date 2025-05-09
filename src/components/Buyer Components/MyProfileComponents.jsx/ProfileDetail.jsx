import React from "react";
import profileImg from "/profileImg.svg";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxQuestionMarkCircled } from "react-icons/rx";
import BASE_URL from "../../../config";

function ProfileDetail({ onTabChange, userData }) {
  if (!userData) return <div>Loading...</div>;

  const { profilePicture, businessName, brandName, role } = userData;
  const displayName = role === "buyer" ? businessName : brandName;

  const profileSrc =
    profilePicture?.[0] && profilePicture[0].startsWith("/uploads")
      ? `${BASE_URL}${profilePicture[0]}`
      : profileImg;

  const tabs = [
    { id: "profile", label: "Profile", icon: <CgProfile /> },
    {
      id: "notifications",
      label: "Notifications",
      icon: <IoMdNotificationsOutline />,
    },
    { id: "security", label: "Security", icon: <RxQuestionMarkCircled /> },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center gap-2">
        <img
          className="w-20 h-20 object-cover rounded-full"
          src={profileSrc}
          alt="Profile"
        />
        <h1 className="text-2xl font-semibold">
          {displayName || "Unnamed User"}
        </h1>
        <p className="capitalize">{role}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-3 px-4 flex items-center gap-4 text-lg font-medium focus:outline-none transition-colors ${
                tab.id === userData.activeTab
                  ? "text-black border-l-4 border-black"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              <div>{tab.icon}</div>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
