import React from "react";
import ManufacturerNavbar from "../../components/Reuseable Component/ManufacturerNavbar";
import Footer from "../../components/Reuseable Component/Footer";
import ChatManufacture from "../Manufacturer Pages/Manufaxrue_Chat";

function ManufacturerMessage() {
  return (
    <div>
      <ManufacturerNavbar />
      <ChatManufacture />
      <Footer />
    </div>
  );
}

export default ManufacturerMessage;
