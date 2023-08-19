import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({users}) {
    
  return (
    <div>
        {
            users.map(e=>(
                <div key={e.id}>
                   <Link to={`/${e.username}`} state={{userData:e}}>{e.username}</Link> 

                </div>
            ))
        }
        </div>
  )
}
