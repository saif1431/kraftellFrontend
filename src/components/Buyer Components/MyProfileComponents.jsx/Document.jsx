import React, { useEffect, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import BASE_URL from "../../../config";

const Document = () => {
  const [documents, setDocuments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const fetchUserDocuments = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setDocuments(data.documents || []);
  };

  useEffect(() => {
    fetchUserDocuments();
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("documents", file);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/api/auth/update-profile`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to upload");
      toast.success("Document uploaded");
      fetchUserDocuments();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteDocument = async (docUrl) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/api/auth/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ $pull: { documents: docUrl } }),
      });
      if (!res.ok) throw new Error("Delete failed");
      toast.success("Document deleted");
      setDocuments((prev) => prev.filter((doc) => doc !== docUrl));
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    const input = document.getElementById("file-input");
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(droppedFile);
    input.files = dataTransfer.files;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Documents</h1>

      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-400"
        }`}
        onDragEnter={() => setIsDragging(true)}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input").click()}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <FiUpload className="text-3xl text-blue-500" />
          <p className="text-gray-600">Click or drag file to upload</p>
        </div>
      </div>

      <input
        id="file-input"
        type="file"
        onChange={handleFileUpload}
        className="hidden"
      />

      <div className="space-y-2">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center border px-3 py-2 rounded-lg"
          >
            <a
              href={BASE_URL + doc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {doc.split("/").pop()}
            </a>
            <MdDeleteOutline
              className="text-xl text-red-500 cursor-pointer"
              onClick={() => deleteDocument(doc)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Document;
