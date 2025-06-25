import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function MyProfile() {
  const { user, setUser } = useAuth();
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    const updatedUser = { ...user, email, phone };
    localStorage.setItem("dream2flyUser", JSON.stringify(updatedUser));
    setUser(updatedUser); // Update context
    setEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-orange-600">My Profile</h2>
      {editing ? (
        <div className="space-y-3">
          <input
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full border rounded px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Save
            </button>
            <button
              onClick={() => {
                setEmail(user?.email || "");
                setPhone(user?.phone || "");
                setEditing(false);
              }}
              className="text-gray-600 px-4 py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <button
            onClick={() => setEditing(true)}
            className="text-orange-500 text-sm underline mt-2"
          >
            Edit Info
          </button>
        </div>
      )}
    </div>
  );
}
