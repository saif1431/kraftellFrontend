import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../pages/Admin Pages/AdminLayout";
import UsersPage from "../pages/Admin Pages/UsersPage";
import ProjectsPage from "../pages/Admin Pages/ProjectsPage";
import MessagePage from "../pages/Admin Pages/MessagePage";
import PaymentPage from "../pages/Admin Pages/PaymentPage";
import AnalyticsPage from "../pages/Admin Pages/AnalyticsPage";
import SettingPage from "../pages/Admin Pages/SettingPage";
import VerificationPage from "../pages/Admin Pages/VerificationPage";
import ToolingIntegrationsPage from "../pages/Admin Pages/ToolingIntegrationsPage";
import TestingPage from "../pages/Admin Pages/TestingPage";

function AdminPageRoute() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="users" element={<UsersPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="messages" element={<MessagePage />} />
        <Route path="payments" element={<PaymentPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="verification" element={<VerificationPage />} />
        <Route
          path="ToolingIntegrations"
          element={<ToolingIntegrationsPage />}
        />
        <Route path="Testing" element={<TestingPage />} />
      </Route>
    </Routes>
  );
}

export default AdminPageRoute;
