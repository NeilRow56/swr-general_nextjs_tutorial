import React from 'react'
import Users25 from '../components/Users25'

const UserList = ({ users }) => {
  return (
    <div>
      <h1>List of users</h1>
      {
        users.map((user, id) => {
            return (
            <div key={id}>
                
                <Users25  user={user} />
                
             </div>
            )
        })
      }
    </div>
  )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    //   console.log(data)
  
    return {
        
      props: {
        users: data
      }
    }
  }
    
