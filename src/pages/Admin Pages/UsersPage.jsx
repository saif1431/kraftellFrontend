import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/Reuseable Component/AdminHeader";
import UserTable from "../../components/Admin Components/UserComponents/UserTable";
import UserModal from "../../components/Admin Components/UserComponents/UserModal";
import ConfirmModal from "../../components/Reuseable Component/ConfirmModal";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("adminUsers")) || [];
    setUsers(storedUsers);
  }, []);

  const saveUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem("adminUsers", JSON.stringify(updatedUsers));
  };

  const handleAdd = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleDeleteRequest = (id) => {
    setConfirmDeleteId(id);
  };

  const handleDeleteConfirm = () => {
    const updated = users.filter((u) => u.id !== confirmDeleteId);
    saveUsers(updated);
    setConfirmDeleteId(null);
  };

  const handleSave = (user) => {
    let updatedUsers;
    if (user.id) {
      updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    } else {
      user.id = Date.now();
      updatedUsers = [...users, user];
    }
    saveUsers(updatedUsers);
    setShowModal(false);
  };

  return (
    <div className="lg:px-6 py-12">
      <AdminHeader title="User Management" />

      <div className="bg-white overflow-y-auto rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">User Management</h2>
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Add User
          </button>
        </div>

        <UserTable
          users={users}
          onEdit={handleEdit}
          onDelete={handleDeleteRequest}
        />
      </div>

      {showModal && (
        <UserModal
          user={editingUser}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      <ConfirmModal
        isOpen={confirmDeleteId !== null}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setConfirmDeleteId(null)}
        title="Delete User"
        btnName="Delete"
        message="Are you sure you want to delete this user?"
      />
    </div>
  );
}

export default UsersPage;
