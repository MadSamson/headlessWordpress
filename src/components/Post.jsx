import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Posts() {
    const [post, setPost] = useState(null)
    const params = useParams()
    useEffect(()=>{
        getPosts()
    },[])
    
    function getPosts() {
        const url = `http://localhost:8888/wordpress/wp-json/wp/v2/posts/${params.id}`
        fetch(url)
        .then(res=>res.json())
        .then(data => {
          console.log(data)
          setPost(data)
        })
    }
  return (
    <div>
        {post && (
            <>
            <h1>{post.title.rendered}</h1>
            <div>{post.content.rendered}</div>
            </>
        )}
    </div>
  )
}
