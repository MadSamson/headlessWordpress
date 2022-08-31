import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        getPosts()
    },[ ])
    
    function getPosts() {
        const url = `http://localhost:8888/wordpress/wp-json/wp/v2/posts`
        fetch(url)
        .then(res=>res.json())
        .then(data => {
          console.log(data)
          setPosts(data)
        })
    }
  return (
    <div>
        {posts.map((post,index) => (
            <div key={index}>
                <h1>{post.title.rendered}</h1>
                <div>{post.content.rendered}</div>
            </div>
        ))
        }
    </div>
  )
}
