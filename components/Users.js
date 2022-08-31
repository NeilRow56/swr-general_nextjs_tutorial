import React from 'react'
import useSWR from "swr"



const Users = () => {
    const { data, error } = useSWR('/api/users')
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
    <div>
        {data ? 
        data.map((user , i) => {
            return <h1 key={i}>{user}</h1>
        })
        : <h1>Loading....</h1>}
    </div>
    )
}

export default Users