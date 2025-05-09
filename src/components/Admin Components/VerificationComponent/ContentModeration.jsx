import { useState } from "react";

function ContentModeration({ data, onUploadClick }) {

  const users = [
    {
      id: 1,
      name: "TechPro GmbH",
      documentType: "ISO 9001",
      status: "pending",
      lastActive: "2024-01-20",
    },
    {
      id: 2,
      name: "MetalWorks Inc",
      documentType: "AS9100",
      status: "pending",
      lastActive: "2024-01-20",
    },


  ]

  return (

    <div className=" overflow-y-auto">
      <div className="flex flex-col md:flex-row justify-between lg:items-center lg:p-4 p-2 border-b border-gray-200">
    
    <h2 className="text-xl font-medium">Document Verification Dashboard</h2>
<button className="bg-[#3977ED] text-white py-2 px-4 rounded-md">Upload Now</button>
      </div>

      <table className="w-full overflow-y-auto mt-4">
        <thead>
          <tr className="text-left text-primary border-b border-gray-200">
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

      <td className="px-4 py-4 text-primary flex-col md:flex-row  flex md:items-center gap-3">
        {user.name}</td>
      <td className="px-4 py-4 text-primary">{user.documentType}</td>

      <td className="px-4 py-4 text-primary">{user.lastActive}</td>
      <td className="px-4 py-4">
        <StatusBadge status={user.status} />
      </td>
      <td className="px-4 py-4  flex items-center gap-4 flex-wrap">
        <button className=" rounded-md p-1 text-[#3977ED] ">View</button>

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


export default ContentModeration

