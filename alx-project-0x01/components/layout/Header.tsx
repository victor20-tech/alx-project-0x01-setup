<<<<<<< HEAD
import Link from 'next/link'; 

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
     <Link href="/">Daily Contents</Link>
  </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
=======
import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white py-4 px-8 shadow-md">
            <h1 className="text-2xl font-bold">My Project Header</h1>
        </header>
    );
};

export default Header;
>>>>>>> d6379bda38db48aef684e355b519aaac22f9b304
