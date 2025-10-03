import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<UserProps> = ({ name, username, email, website }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 border border-gray-200 w-full max-w-sm">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-600 italic">@{username}</p>
      <div className="mt-4 border-t pt-4">
        <p className="text-sm text-gray-800">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-sm text-gray-800">
          <strong>Website:</strong>{" "}
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
