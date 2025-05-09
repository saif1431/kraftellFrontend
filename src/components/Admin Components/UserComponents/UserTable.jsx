export default function UserTable({ users = [], onEdit = () => {}, onDelete = () => {} }) {
  if (!users || users.length === 0) {
    return (
      <div className="text-center p-6 text-gray-500">
        No user records found.
      </div>
    );
  }

  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-black border-b border-gray-200">
          <th className="px-4 py-3 font-bold">Name</th>
          <th className="px-4 py-3 font-bold">Type</th>
          <th className="px-4 py-3 font-bold">Status</th>
          <th className="px-4 py-3 font-bold">Last Active</th>
          <th className="px-4 py-3 font-bold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

function UserRow({ user, onEdit, onDelete }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-4">{user.name}</td>
      <td className="px-4 py-4">{user.type}</td>
      <td className="px-4 py-4">
        <StatusBadge status={user.status} />
      </td>
      <td className="px-4 py-4">{user.lastActive}</td>
      <td className="px-4 py-4 space-x-2">
        <button
          onClick={() => onEdit(user)}
          className="text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

function StatusBadge({ status }) {
  const getStatusStyles = () => {
    switch (status) {
      case "Active":
        return "bg-green-500 text-white";
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Inactive":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}
    >
      {status}
    </span>
  );
}