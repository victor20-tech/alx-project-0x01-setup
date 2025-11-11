import React from 'react';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';


interface UsersPageProps {
    posts: UserProps[]; 
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
                User Directory
            </h1>

            <div className="flex flex-wrap justify-center gap-4">
                {posts.map((user) => (
                    <UserCard key={user.id} {...user} /> 
                ))}
            </div>
        </div>
    );
};

// Data Fetching Function 
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts 
    }
  }
}

export default Users;