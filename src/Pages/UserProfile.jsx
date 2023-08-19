import React, { useEffect, useState } from 'react'
import { useParams , useNavigate , useLocation} from 'react-router-dom'

export default function UserProfile({users}) {
    const navigate=useNavigate();
    const params = useParams();
    const location = useLocation();
    const [user , setUser] = useState({});
    const newUser = users.find(e=>e.username===params.username) ; 
    useEffect(()=>{
        
        newUser===undefined ? navigate("/") : setUser(newUser) 
    })

  return (
    <div>
        <h1>{user.username}</h1> 
        <p>{user.bio}</p>
        <div>
           {user.posts && user.posts.map(e=>(<p>{e.content}</p>)) }
        </div>
        
        </div>
  )
}
