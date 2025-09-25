import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const [data, setdata] = useState({email:"", password:""})
const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        try{

            // const res = await axios.post('http://localhost:3000/api/auth/login', data)
            const res = await axios.post('https://authentication-frontend-backend.onrender.com/api/auth/login', data)
            localStorage.setItem('token', res.data.token)
            alert("login successful")
            navigate('/profile')

        }
        catch(error){
            alert(error.res.data.message)
        }


    }
    
    return (
        <div>
            <form onSubmit={handleLogin }>
                <h2>Login</h2>
              
                <input type="email" placeholder='Enter email' onChange={e=>setdata({...data, email:e.target.value})}/>
                <input type="password" placeholder='Enter password' onChange={e=>setdata({...data, password:e.target.value})}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login