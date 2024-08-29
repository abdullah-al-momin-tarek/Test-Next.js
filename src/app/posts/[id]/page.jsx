import React from 'react';

const post = async (id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export const generateMetadata = async({params}) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json()
   return {
    title: postData.title,
    description: postData.body,
    keywords: postData.body.split(" ")
   } 
}

const DetailsPage = async({params}) => {
    const data = await post(params.id)
    return (
        <div>
            <h2>Title: {data.title}</h2>
            <p>body: {data.body}</p>
        </div>
    );
};

export default DetailsPage;