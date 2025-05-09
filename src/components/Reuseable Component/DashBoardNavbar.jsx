import React, { useState } from "react";
import logo from "/logo.png";
import { LuMessageCircle } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function DashBoardNavbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const buyerLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Search Manufacturers", path: "/searchManufacturers" },
    { name: "Messages", path: "/Message" },
    { name: "Payment", path: "/BuyerPaymentForm" },
    { name: "My Profile", path: "/MyProfile" },
    { name: "MemberShip", path: "/MemberShip" },
  ];

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLogoutModal(true);
    setIsMenuOpen(false);
  };

  const confirmLogout = () => {
    localStorage.removeItem("token"); // Clear JWT token
    toast.success("You have been logged out.");
    setShowLogoutModal(false);
    navigate("/Login"); // Redirect to login page
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-md px-10 py-4 sticky top-0 z-50">
      <div className="w-42">
        <img src={logo} alt="Company Logo" />
      </div>

      <div className="flex items-center gap-4">
        <LuMessageCircle className="text-3xl cursor-pointer hover:text-gray-600" />
        <TfiMenuAlt
          className="text-3xl cursor-pointer hover:text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Menu Popup */}
      {isMenuOpen && (
        <div className="absolute right-0 top-full mt-2 mr-4 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <ul className="">
            {buyerLinks.map((link, index) => (
              <li
                className="bg-white rounded-md shadow-lg border border-gray-200"
                key={index}
              >
                <NavLink
                  to={link.path}
                  className="block px-4 py-4 text-lg text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 shadow-lg">
            <button
              onClick={handleLogoutClick}
              className="block text-gray-800 px-4 py-4 text-lg hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 shadow-2xl border border-gray-300 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white shadow-2xl border border-gray-300 rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to logout?</p>

            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              {/* Logout button using previous design */}
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashBoardNavbar;
