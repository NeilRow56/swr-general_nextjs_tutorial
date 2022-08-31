import React from 'react'

const Users25 = ({ user }) => {
  return (
    
        <div >
            
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            
         </div>
  )
}

export default Users25
