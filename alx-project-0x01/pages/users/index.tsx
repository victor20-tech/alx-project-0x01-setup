import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal'; 
import Header from '@/components/layout/Header';
import { UserProps, UserData } from '@/interfaces';
import React, { useState } from 'react';

const Users: React.FC<{ posts: UserProps[] }> = ({ posts: initialUsers }) => {
  const [users, setUsers] = useState<UserProps[]>(initialUsers);
  const [isModalOpen, setModalOpen] = useState(false); 

  const handleAddUser = (newUserPartial: UserData) => {
    const newUser: UserProps = {
      id: users.length + 1, 
      name: newUserPartial.name,
      username: newUserPartial.username,
      email: newUserPartial.email,
      phone: newUserPartial.phone,
      website: newUserPartial.website,
      address: { street: 'N/A', suite: 'N/A', city: 'N/A', zipcode: 'N/A', geo: { lat: '0', lng: '0' } },
      company: { name: newUserPartial.companyName, catchPhrase: 'Custom Entry', bs: 'Custom Entry' },
    };
    
    setUsers([newUser, ...users]); 
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center my-8">
          <h1 className="text-4xl font-bold">Our Users</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {users?.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
        {isModalOpen && (
          <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
        )}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: {
      posts: users,
    },
  };
}

export default Users;
