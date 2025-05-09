import React, { useEffect, useState } from "react";
import DashBoardNavbar from "../../components/Reuseable Component/DashBoardNavbar";
import PrototypeApprovalForm from "../../components/Buyer Components/MyPrototypesComponent/PrototypeApprovalForm";
import PrototypeDecision from "../../components/Buyer Components/MyPrototypesComponent/PrototypeDecision";
import RevisionHistory from "../../components/Buyer Components/MyPrototypesComponent/RevisionHistory";
import Footer from "../../components/Reuseable Component/Footer";
import ManufacturerNavbar from "../../components/Reuseable Component/ManufacturerNavbar";
import axios from "axios";
import BASE_URL from "../../config";

function MyPrototypes() {
  const [prototypes, setPrototypes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/prototypes/my-requests`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setPrototypes(res.data || []);
        setSelected(res.data?.[0] || null);
      } catch (err) {
        console.error("Error fetching prototypes:", err);
      }
    };

    fetchRequests();
  }, []);

  if (!selected) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-primary">
        <ManufacturerNavbar />
        <p className="text-xl text-white">No prototype selected or found.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-primary">
      <ManufacturerNavbar />
      <div className="lg:px-18 px-4 py-14 space-y-6">
        <PrototypeApprovalForm data={selected} />
        <PrototypeDecision data={selected} />
        <RevisionHistory history={selected.revisions || []} />
      </div>
      <Footer />
    </div>
  );
}

export default MyPrototypes;
