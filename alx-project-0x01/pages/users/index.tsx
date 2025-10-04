import Header from "@/components/layout/Header";

import React from "react";

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Users Page</h1>
      <p className="text-gray-700">Welcome to the users page!</p>
    </div>
  );
};

export default UsersPage;
