import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import toast from 'react-hot-toast';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate()

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, contact,role });
      if (response.data.success) {
        console.log(response);
        localStorage.setItem('auth', JSON.stringify(response.data));
        toast.success("You have been registered")
        navigate('/homepage')
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
    <div className='signup'>
      <div className='signup-heading'>
        <h1>Job Nest </h1>
        <h2>India Leading Job Searching Platform</h2>
        <h3>Register Yourself Now To Start Your Journey</h3>
        <h4>5 Million + User's Already Registered</h4>
      </div>
      <div className='signup-form'>
        <h1>Register</h1>
        <input type='text' placeholder='Enter Your Name'  value={name}  onChange={(e) => setName(e.target.value)} />
        <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
        <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)}  />
        <input type='number' placeholder='Enter Your Contact' value={contact} onChange={(e) => setContact(e.target.value)}  />
        <input type='text' placeholder='Enter Employee Or Employer?' value={role} onChange={(e) => setRole(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </Layout>
  )
}

export default SignUp