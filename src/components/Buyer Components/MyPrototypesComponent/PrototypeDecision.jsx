import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

function PrototypeDecision({ data }) {
  const [revisionNote, setRevisionNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDecision = async (status) => {
    setIsSubmitting(true);
    try {
      await axios.put(
        `http://localhost:5000/api/prototypes/${data._id}/decision`,
        {
          status,
          revisionNote: status === "revision_requested" ? revisionNote : null,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert(`Prototype ${status.replace("_", " ")} successfully.`);
      window.location.reload(); // refresh the data after update
    } catch (error) {
      console.error("Error updating decision:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Prototype Decision</h1>

      {/* <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={() => handleDecision("approved")}
          disabled={isSubmitting}
          className="bg-[#3977ED] text-white px-6 py-4 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-4 text-xl disabled:opacity-50"
        >
          <TiTick />
          Approve Prototype
        </button>

        <button
          onClick={() => handleDecision("rejected")}
          disabled={isSubmitting}
          className="border border-gray-300 text-black px-6 py-4 rounded-lg flex items-center gap-4 text-xl hover:bg-[#3977ED] hover:text-white transition duration-300 disabled:opacity-50"
        >
          <RiCloseLine />
          Reject Prototype
        </button>
      </div> */}

      {/* Request Revision Section */}
      <div>
        <h1 className="text-2xl font-semibold">Request Revision</h1>
        <textarea
          placeholder="Describe the changes you want..."
          className="mt-4 bg-white w-full h-[200px] rounded-lg p-4 text-primary border border-gray-300"
          value={revisionNote}
          onChange={(e) => setRevisionNote(e.target.value)}
        />
        <button
          onClick={() => handleDecision("revision_requested")}
          disabled={!revisionNote || isSubmitting}
          className="mt-4 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 disabled:opacity-50"
        >
          Request Revision
        </button>
      </div>
    </div>
  );
}

export default PrototypeDecision;
