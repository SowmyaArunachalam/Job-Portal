import React, { useState } from 'react'
import Layout from '../../components/layout/Layout';
import './PostJob.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const PostJob = () => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [salary, setSalary] = useState('')
  const [description, setDescription] = useState('')
  const [qualification, setQualification] = useState('')
  const [location, setLocation] = useState('')
  const [company, setCompany] = useState('')
  const navigate = useNavigate()

  const employerAuth = JSON.parse(localStorage.getItem('auth'))
  const employerId = employerAuth.user.id;
  const handleJobSubmit=async(e)=>{
      e.preventDefault();
      try{
          const result = await axios.post(`${process.env.REACT_APP_API}/api/v1/jobs/job-post`,{employerId,title,type,salary,description,qualification,location,company})
          if(result.data.success){
            console.log(result);
            toast.success("Job Posted SuccessFully")
            navigate('/homepage');
          }
      }
      catch(error){console.log(error)}
  }

  return (
    <Layout>
    <div className='post-job'>
      <div className='post-job-heading'>
        <h1>Job Nest </h1>
        <h2>India Leading Job Searching Platform</h2>
        <h3>Register Yourself Now To Start Your Journey</h3>
        <h4>Post Job's Now And Hire Desired Employees</h4>
      </div>
      <div className='post-job-form'>
        <h1>Post A Job</h1>
        <input type='text' placeholder='Enter Job Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type='text' placeholder='Enter Company Name' value={company} onChange={(e) => setCompany(e.target.value)} />
        <input type='text' placeholder='Enter Job Type' value={type} onChange={(e) => setType(e.target.value)} />
        <input type='number' placeholder='Enter Job Salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
        <input type='text' placeholder='Enter Job Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type='text' placeholder='Enter Job Qualification' value={qualification} onChange={(e) => setQualification(e.target.value)} />
        <input type='text' placeholder='Enter Job Location' value={location} onChange={(e) => setLocation(e.target.value)} />
        <button onClick={handleJobSubmit}>Post</button>
      </div>
    </div>
    </Layout>

  )
}

export default PostJob