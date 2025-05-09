import { useState } from "react";

 function ReviewModeration({ data, onUploadClick }) {

      const users = [
        {
          id: 1,
          img: "/profileImg.svg",
          Content: "Premium CNC Machine XL-2000",
          submitBy: "TechPro Manufacturing",
          status: "pending",
          lastActive: "2024-01-20",
        },
        {
          id: 2,
          img: "/profileImg.svg",
          Content: "Industrial Grade Steel Bearings",
          submitBy: "MetalWorks Inc",
          status: "approved",
          lastActive: "2024-01-20",
        },
        {
          id: 3,
          img: "/profileImg.svg",
          Content: "Precision Measurement Tools",
          submitBy: "QualityTools GmbH",
          status: "rejected",
          lastActive: "2024-01-20",
        },

      ]
    
      return (

            <div className=" overflow-y-auto">
                   <div className="flex flex-col md:flex-row justify-between lg:items-center lg:p-4 p-2 border-b border-gray-200">
          <h2 className="text-lg font-medium">Review & Moderation</h2>
        </div>
          
          <div className="flex items-center gap-3 mt-4">
            <select className="border border-gray-300 py-2 px-6 rounded-lg">
              <option value="">Bulk Actions</option>
              <option value="">Bulk Actions</option>
              <option value="">Bulk Actions</option>
              <option value="">Bulk Actions</option>
              <option value="">Bulk Actions</option>
            </select>
          <button className="bg-[#3977ED] text-white py-2 px-4 rounded-md">Apply</button>
          </div>
        <table className="w-full overflow-y-auto">
          <thead>
            <tr className="text-left text-black border-b border-gray-200">
              <th className="px-4 py-3 font-bold">Content</th>
              <th className="px-4 py-3 font-bold">Submitted by</th>
              <th className="px-4 py-3 font-bold">Date</th>
              <th className="px-4 py-3 font-bold">Status</th>
              <th className="px-4 py-3 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
        </div>
      )
    }
    
    function UserRow({ user }) {
      return (
        <tr className="border-b border-gray-200 hover:bg-gray-50">
         
          <td className="px-4 py-4 flex-col md:flex-row  flex md:items-center gap-3">
            <img className="w-10 h-10 rounded-full" src={user.img} alt="" />
            {user.Content}</td>
          <td className="px-4 py-4">{user.submitBy}</td>
         
          <td className="px-4 py-4">{user.lastActive}</td>
          <td className="px-4 py-4">
            <StatusBadge status={user.status} />
          </td>
          <td className="px-4 py-4 flex items-center gap-2 flex-wrap">
            <button className="bg-[#DEF7EC] rounded-md p-1 text-[#03543F] ">✅Approve</button>
            <button className="bg-[#FDE8E8] rounded-md p-1 text-[#9B1C1C] ">❌Reject</button>
            <button className="bg-[#EBF5FF] rounded-md p-1 text-[#3977ED] ">📜Edit</button>
            <button className="bg-[#FEF3C7] rounded-md p-1 text-[#92400E] ">🚩Flag</button>
          </td>
        </tr>
      )
    }
    
    function StatusBadge({ status }) {
      const getStatusStyles = () => {
        switch (status) {
          case "pending":
            return "bg-[#FEF3C7] text-[#92400E]"
          case "approved":
            return "bg-[#DEF7EC] text-[#03543F]"
          case "rejected":
            return "bg-[#FDE8E8] text-[#9B1C1C]"
          default:
            return "bg-gray-200 text-gray-800"
        }
      }
    
      return <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}>{status}</span>
    }
    

    export default ReviewModeration




