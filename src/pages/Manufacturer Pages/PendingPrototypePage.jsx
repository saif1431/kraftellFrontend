import React from "react";
import ManufacturerDashboard from "./ManufacturerDashboard";
import Footer from "../../components/Reuseable Component/Footer";
import PendingPrototype from "../../components/Manufacturer Components/PendingPrototype";
import ManufacturerNavbar from "../../components/Reuseable Component/ManufacturerNavbar";

function PendingPrototypePage() {
  return (
    <div className="bg-primary">
      <ManufacturerNavbar />
      <div className="lg:px-18 px-4 lg:py-14 py-8">
        <PendingPrototype />
      </div>
      <Footer />
    </div>
  );
}

export default PendingPrototypePage;
