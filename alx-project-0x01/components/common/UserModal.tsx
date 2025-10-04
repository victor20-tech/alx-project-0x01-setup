import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    companyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: UserData = {
        ...user
    };
    
    onSubmit(newUser);
    onClose();
  };

  return (
    // Fixed overlay matching PostModal structure/style
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Add New User</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input type="text" id="name" name="name" value={user.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input type="text" id="username" name="username" value={user.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" value={user.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
            <input type="text" id="phone" name="phone" value={user.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-semibold mb-2">Website</label>
            <input type="text" id="website" name="website" value={user.website} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="mb-6">
            <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-2">Company Name</label>
            <input type="text" id="companyName" name="companyName" value={user.companyName} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 transition">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal