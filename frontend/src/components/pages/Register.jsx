import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css"

 
const Register = () => {


   const navigate = useNavigate()
const [user, setuser] = useState({name:"", number:"", email:"", password:""})

    const handlesubmit = async(e)=>{
        e.preventDefault();
        try{

            const res = await axios.post('http://localhost:3000/api/auth/register', user)
            toast.success(res.data.message, {
                position:"top-right"
            })
            // navigate('/login')
            setTimeout(()=>navigate("/login"),1000)

        }
        catch(error){
            toast.error(error.res.data.message  || 'something went wrong', {
                position:"top-right"
            })
            
        }


    }
    
    return (
        <div>
            <form onSubmit={handlesubmit }>
                <h2>Register</h2>
                <input type="text" placeholder='Enter name' onChange={e=>setuser({...user, name:e.target.value})}/>
                <input type="number"  placeholder='Enter number' onChange={e=>setuser({...user, number:e.target.value})}/>
                <input type="email" placeholder='Enter email' onChange={e=>setuser({...user, email:e.target.value})}/>
                <input type="password" placeholder='Enter password' onChange={e=>setuser({...user, password:e.target.value})}/>
                <button type='submit'>Register</button>
            </form>


            <ToastContainer />
        </div>
    )
}

export default Register