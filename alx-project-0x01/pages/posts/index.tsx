import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts: initialPosts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [post, setPost] = useState<PostData | null>(null);

    // Function to handle adding a new post
    const handleAddPost = (newPost: PostData) => {
        setPost({ ...newPost, id: initialPosts.length + 1 }); 
    };

    return (
        <section>
            <Header />
            <h1>Post Content</h1>

            <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-700 px-4 py-2 rounded-full text-white"
            >
                Add Post
            </button>

            {/* Displaying the list of posts */}
            <div>
              {/* Mapping through initial posts */}
                {
                    initialPosts?.map(({ title, body, userId, id }: PostProps, key: number) => (
                        <PostCard key={id || key} title={title} body={body} userId={userId} id={id} />
                    ))
                }

                {/* Conditionally display the newly added post above */}
                {post && <PostCard title={post.title} body={post.body} userId={post.userId} id={post.id!} />} 
            </div>

            {/* Conditional Rendering of the Modal */}
            {isModalOpen && (
                <PostModal 
                    onClose={() => setModalOpen(false)} 
                    onSubmit={handleAddPost} 
                />
            )}
        </section>
    )
}

// Fetching posts data at build time
export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    return {
        props: {
            posts
        }
    }
}

export default Posts;