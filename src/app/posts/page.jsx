
import React from 'react';
import { allPost } from '../postAPI/api';
import Link from 'next/link';

export const metadata = {
    title: "Posts",
    description: "Post Page",
    keywords: ["all", "post"]
}

const PostPage = async() => {
    const data =await allPost()
    
    return (
        <div className='grid grid-cols-4 gap-5 '>
            {
             data && data?.map(post=><div className='border p-3' key={post.id}>
                <h1>Title: {post.title}</h1>
                <p>Body: {post.body}</p>
                <button className='bg-orange-300 p-3'><Link href={`/posts/${post.id}`}>Details</Link></button>
            </div>) 
            }

        </div>
    );
};

export default PostPage;