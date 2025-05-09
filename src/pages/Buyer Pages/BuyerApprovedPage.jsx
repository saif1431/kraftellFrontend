import React from "react";
import DashBoardNavbar from "../../components/Reuseable Component/DashBoardNavbar";
import Footer from "../../components/Reuseable Component/Footer";
import PrototypePreview from "../../components/Buyer Components/BuyerApprovalComponents/PrototypePreview";
import ReviewDecision from "../../components/Buyer Components/BuyerApprovalComponents/ReviewDecision";
import BuyerRevisionHistory from "../../components/Buyer Components/BuyerApprovalComponents/BuyerRevisionHistory";

function BuyerApprovedPage() {
  return (
    <div className="bg-primary">
      <DashBoardNavbar />
      <div className="lg:px-18 px-4 py-14 space-y-6">
        <PrototypePreview />
        <ReviewDecision />
        <BuyerRevisionHistory />
      </div>
      <Footer />
    </div>
  );
}

export default BuyerApprovedPage;
