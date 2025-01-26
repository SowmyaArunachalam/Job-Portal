import React, { useState } from 'react'
import Layout from '../../components/layout/Layout';
import './LogIn.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const LogIn = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate()
  const handleLogIn=async(e)=>{
      e.preventDefault();
      try{
          const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
          if(response.data.success){
            console.log(response);
            localStorage.setItem('auth',JSON.stringify(response.data))
            toast.success("Welcome! Logged In Successfully")
            navigate('/homepage');
          }
      }catch(error){console.log(error)}
  }
  return (
    <Layout>
    <div className='login'>
       <div className='login-heading'>
        <h1>Job Nest </h1>
        <h2>India Leading Job Searching Platform</h2>
        <h3>Register Yourself Now To Start Your Journey</h3>
        <h4>5 Million + User's Already Registered</h4>
       </div>
       <div className='login-form'>
           <h1>Log In</h1>
           <input type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
           <input type='password' placeholder='Enter Your Password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} required/>
           <button onClick={handleLogIn}>Log In</button>
       </div>
    </div>
    </Layout>
  )
}

export default LogIn