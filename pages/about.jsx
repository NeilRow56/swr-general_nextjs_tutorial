import React from 'react'
import useSWR from "swr"
import { SWRConfig } from 'swr'
import Users from '../components/Users'

const fetcher = (...args) => fetch(...args).then((response) => response.json())




const About = () => {
    const { data, error } = useSWR('/api/users',fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
    <>  
    {/* <div>
        {data ? 
        data.map((user , i) => {
            return <h1 key={i}>{user}</h1>
        })
        : <h1>Loading....</h1>}
    </div> */}
    <div>
        <h1>ABOUT PAGE</h1>
    </div>
    <SWRConfig value={{fetcher}}>
        <Users />
    </SWRConfig>
    </>  
    )
}



export default About
