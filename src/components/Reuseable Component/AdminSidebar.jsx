import React, { useState } from "react";
import {
  Users,
  Briefcase,
  MessageSquare,
  CreditCard,
  BarChart2,
  Settings,
  Shield,
  PenTool as Tool,
  Search,
  LogOut, // Added the missing LogOut icon
} from "lucide-react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import ConfirmModal from "../Reuseable Component/ConfirmModal"; // Make sure path is correct

function AdminSidebar({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menuItems = [
    { path: "/admin/users", icon: <Users size={18} />, label: "Users" },
    { path: "projects", icon: <Briefcase size={18} />, label: "Projects" },
    { path: "messages", icon: <MessageSquare size={18} />, label: "Messages" },
    { path: "payments", icon: <CreditCard size={18} />, label: "Payments" },
    { path: "analytics", icon: <BarChart2 size={18} />, label: "Analytics" },
    { path: "settings", icon: <Settings size={18} />, label: "Settings" },
    { path: "verification", icon: <Shield size={18} />, label: "Verification" },
    { path: "ToolingIntegrations", icon: <Tool size={18} />, label: "Tooling & Integrations" },
    { path: "Testing", icon: <Search size={18} />, label: "Testing & QA" },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    setShowLogoutModal(false);
    navigate("/login"); // Example: redirect to login page
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 top-0 bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 h-full w-80 bg-white border-r border-gray-300 px-6 py-6 z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-6 px-6 py-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-[#3977ED] text-white hover:bg-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
              onClick={onClose}
            >
              <span className="w-5">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}

          {/* Logout Option */}
          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center gap-6 w-full px-6 py-3 text-red-600 hover:bg-red-50 rounded-md"
          >
            <LogOut size={18} />
            <span className="font-medium">Logout</span>
          </button>
        </div>

        {/* Logout Confirmation Modal */}
        <ConfirmModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
          title="Confirm Logout"
          message="Are you sure you want to logout?"
          confirmText="Logout"
          cancelText="Cancel"
        />
      </aside>
    </>
  );
}

export default AdminSidebar;