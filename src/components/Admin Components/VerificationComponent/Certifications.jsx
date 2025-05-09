import { useState } from "react";

 function Certifications({ data, onUploadClick }) {

      const users = [
        {
          id: 1,
          name: "John Smith",
          type: "Buyer",
          status: "pending",
          lastActive: "2024-01-20",
        },
        {
          id: 2,
          name: "Sarah Corp",
          type: "Supplier",
          status: "approved",
          lastActive: "2024-01-19",
        },
        {
          id: 3,
          name: "Sarah Corp",
          type: "Supplier",
          status: "rejected",
          lastActive: "2024-01-19",
        },
      ]
    
      return (

            <div className=" overflow-y-auto">
                   <div className="flex flex-col md:flex-row justify-between lg:items-center lg:p-4 p-2 border-b border-gray-200">
          <h2 className="text-lg font-medium">Supplier Certifications</h2>
          <button 
          onClick={onUploadClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Upload Now
          </button>
        </div>
          
        <table className="w-full overflow-y-auto">
          <thead>
            <tr className="text-left text-black border-b border-gray-200">
              <th className="px-4 py-3 font-bold">Company</th>
              <th className="px-4 py-3 font-bold">Certification</th>
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
          <td className="px-4 py-4">{user.name}</td>
          <td className="px-4 py-4">{user.type}</td>
         
          <td className="px-4 py-4">{user.lastActive}</td>
          <td className="px-4 py-4">
            <StatusBadge status={user.status} />
          </td>
          <td className="px-4 py-4">
            <button className="text-blue-500 hover:text-blue-700">Edit</button>
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
    

    export default Certifications
