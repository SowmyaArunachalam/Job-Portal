import React, { useEffect, useState, useCallback } from 'react';
import './Profile.css';
import axios from 'axios';
import Layout from '../../components/layout/Layout';

const Profile = () => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  const [jobs, setJobs] = useState([]);

  const getJobs = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/jobs/get-jobs`);
      console.log('API Response:', response.data); // Log API response for debugging
      console.log('Auth User ID:', auth.user.id); // Log auth user ID for debugging

      if (response.data.jobs && response.data.jobs.length > 0) {
        const filteredJobs = response.data.jobs.filter((job) => {
          return job.employerId === auth.user.id || job.userId === auth.user.id;
        });

        if (filteredJobs.length > 0) {
          setJobs(filteredJobs);
          console.log('Filtered Jobs:', filteredJobs);
        } else {
          setJobs([]);
          console.log('No Job Applications Found for this Employer or User');
        }
      } else {
        setJobs([]);
        console.log('No Job Applications Found');
      }
    } catch (error) {
      console.log(error);
    }
  }, [auth.user.id]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API}/api/v1/jobs/delete/${_id}`);
      console.log('Job Application Deleted');
      getJobs(); // Refresh jobs after deletion
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="profile-box">
        {auth.user.role === 'Employer' ? (
          <>
            <div className="profile-info">
              <h1>Employers Profile 👨‍💼</h1>
              <p>Name: {auth.user.name}</p>
              <p>Email: {auth.user.email}</p>
              <p>Role: {auth.user.role}</p>
              <p>Contact: {auth.user.contact}</p>
            </div>
            <div className="jobs-posted">
              <h1>Posted Jobs</h1>
              <div className="job-box">
                {jobs.map((job, index) => (
                  <div key={index} className="job-card">
                    <p>Title: {job.title}</p>
                    <p>Description: {job.description}</p>
                    <p>Type: {job.type}</p>
                    <p>Salary: {job.salary}</p>
                    <p>Location: {job.location}</p>
                    <p>Posted on: {new Date(job.createdAt).toLocaleDateString()}</p>
                    <button onClick={() => handleDelete(job._id)}>Delete</button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="user-profile-info">
              <h1>User Profile 👤</h1>
              <p>Name: {auth.user.name}</p>
              <p>Email: {auth.user.email}</p>
              <p>Role: {auth.user.role}</p>
              <p>Contact: {auth.user.contact}</p>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
