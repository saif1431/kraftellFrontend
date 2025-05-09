import React from "react";
import DashBoardNavbar from "../../components/Reuseable Component/DashBoardNavbar";
import Footer from "../../components/Reuseable Component/Footer";
import BuyerPrototypeHeader from "../../components/Buyer Components/BuyerPrototypeComponents/BuyerPrototypeHeader";

function BuyerPrototypePage() {
  return (
    <div className="bg-primary">
      <DashBoardNavbar />
      <div className="lg:px-18 px-4 py-14 space-y-6">
        <BuyerPrototypeHeader />
      </div>
      <Footer />
    </div>
  );
}

export default BuyerPrototypePage;
