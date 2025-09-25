import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {


  const [user, setUser] = useState(null)

  useEffect(()=>{
      const token = localStorage.getItem('token')
      axios.get("http://localhost:3000/api/auth/profile",{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      .then(res => setUser(res.data.user))
      .catch(()=> alert("Unaothorized or token expired"))
  }, [])


  if(!user) return <h4>Loading.....</h4> 


  return (
    <div>
      <h1>Welcome: {user.name}</h1>
      <h2>Email: {user.email} </h2>
    </div>
  )
}

export default Profile