import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import JobApplication from '../jobApplication/JobApplication'
import './Jobs.css'
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [employerId,setSelectedEmployerId] = useState(null);
  const [jobTitle,setJobTitle] = useState(null);

  useEffect(() => {
    geTJobs();
  }, [])

  const geTJobs = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/jobs/get-jobs`)
      if (response.data.success) {
        setJobs(response.data.jobs);
        console.log(response.data.jobs);
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  const handleApplyClick = (jobId,employerId,jobTitle) => {
    setSelectedJobId(jobId);
    setSelectedEmployerId(employerId);
    setJobTitle(jobTitle)
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEmployerId(null)
    setSelectedJobId(null);
  };


  const handleSearch=async(e)=>{
    const key = e.target.value
    if (!key) {
      geTJobs()
      return;
    }
     try{
      let result = await axios.get(`${process.env.REACT_APP_API}/api/v1/jobs/search/${key}`)
      if(result.data){
        setJobs(result.data);
      }
      
     }
     catch(error){
      console.log(error);
     }
  }

  return (
    <Layout>
      <div className='job-container'>
           <div className='job-search-box'>
            <input type='search' placeholder='Search for jobs ,e.g type job title' onChange={handleSearch} />
           </div>

        {jobs.map((job, index) => (
          <div key={job._id} className='job-info'>
            <h1>{job.title}</h1>
            <p>Company: {job.company}</p>
            <p>Type: {job.type}</p>
            <p>Salary: {job.salary}</p>
            <p>Description: {job.description}</p>
            <p>Qualification: {job.qualification}</p>
            <p>Location: {job.location}</p>
            <p>EmployerId:{job.employerId}</p>
            <p>Posted on: {new Date(job.createdAt).toLocaleDateString()}</p>
            <button onClick={() => handleApplyClick(job._id,job.employerId,job.title)}>Apply</button>
          </div>
        ))}
        {showModal && (
        <JobApplication
          show={showModal}
          handleClose={handleCloseModal}
          jobId={selectedJobId}
          employerId = {employerId}
          jobTitle={jobTitle}
        />
      )}
      </div>
    </Layout>
  )
}

export default Jobs