import Link from 'next/link'
import React from 'react'


const Post = ({ post }) => {
  return (
    
        <div >
            
            <Link href={`posts/${post.id}`} >
            <p>{post.id} {post.title}</p>
            </Link>
            
            <hr />
         </div>
  )
}

export default Post