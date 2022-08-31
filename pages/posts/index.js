import React from 'react'
import Post from '../../components/Post'



const PostList = ({ posts }) => {
  return (
    <div>
      <h1>List of Posts</h1>
      {
        posts.map((post, id) => {
            return (
            <div key={id}>
                
                <Post  post={post} />
               
             </div>
            )
        })
      }
    </div>
  )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    //   console.log(data)
  
    return {
        
      props: {
        posts: data
      },
      // revalidate: 10,
    }
  }