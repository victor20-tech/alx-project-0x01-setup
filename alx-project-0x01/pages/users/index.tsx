import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { UserProps } from '@/interfaces';
import React from 'react';

const UsersPage: React.FC<{ posts: UserProps[] }> = ({ posts: users }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Our Users</h1>
        <div className="flex flex-wrap justify-center">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: {
      posts: users, // Prop named 'posts' as per instructions
    },
  };
}

export default UsersPage;
