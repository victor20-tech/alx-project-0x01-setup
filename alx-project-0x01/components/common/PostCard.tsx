import React from "react";

interface PostCardProps {
    title: string;
    content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto my-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{content}</p>
        </div>
    );
};

export default PostCard;