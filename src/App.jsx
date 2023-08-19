import React,{ useState } from 'react'
import { Routes , Route , Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import UserProfile from './Pages/UserProfile'

export default function App() {
  const [users,setUsers]=useState([
    {
        id:0 , 
        username:"mark",
        bio:"this is my bio" , 
        posts:[{id:0,content:"my first post" , }],

    },
    {
        id:1 , 
        username:"john",
        bio:"this is my bio user 2" , 
        posts:[{id:0,content:"this is my first post" , },{id:1,content:"this is my second post" , }],
        
    }
])
  return (
    <div>
      <ul style={{display:"flex"  , justifyContent:"space-around" }}>
        <li style={{margin:"1rem"}} > <Link to="/">Home</Link></li>
        <li style={{margin:"1rem"}}><Link to="/About">About</Link></li>
        <li style={{margin:"1rem"}}><Link to="/Contact">Contact</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home users={users}/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/:username' element={<UserProfile users={users}/>} />

      </Routes>


    </div>
  )
}
