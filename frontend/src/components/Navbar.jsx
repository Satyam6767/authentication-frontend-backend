import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()

  const handlelogout = () =>{
    localStorage.removeItem('token');
    alert("logout successfully")
    navigate("/login")
  }
 
  return (
    <div >
        <Link to='/' >Home</Link>
        <Link to='/register' >Register</Link>
        <Link to='/login'>Login</Link>
        <Link to='/profile'>Profile</Link>

        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Navbar