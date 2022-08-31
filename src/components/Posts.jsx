import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
            <ul key={index} className='post-container'>
                <Link to={`/post/${post.id}`}><li className='title'>{post.title.rendered}</li></Link> 
            </ul>
        ))
        }
    </div>
  )
}
