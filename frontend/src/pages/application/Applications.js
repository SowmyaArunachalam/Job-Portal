import React, { useEffect, useState, useCallback } from 'react';
import './Applications.css';
import axios from 'axios';
import Layout from '../../components/layout/Layout';
import toast from 'react-hot-toast';

const Applications = () => {
  const [jobs, setJobs] = useState([]);
  const auth = JSON.parse(localStorage.getItem('auth'));

  const getApplications = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/apply/job-applications`);
      console.log('API Response:', response.data); // Log API response for debugging
      console.log('Auth User ID:', auth.user.id); // Log auth user ID for debugging

      if (response.data.applications.length > 0) {
        const filteredJobs = response.data.applications.filter(
          (job) => job.employerId === auth.user.id || job.userId === auth.user.id
        );

        if (filteredJobs.length > 0) {
          setJobs(filteredJobs);
          console.log('Filtered Jobs:', filteredJobs);
        } else {
          setJobs([]);
          console.log("No Job Applications Found for this Employer or User");
        }
      } else {
        setJobs([]);
        console.log("No Job Applications Found");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch applications. Please try again later.");
    }
  }, [auth.user.id]);

  useEffect(() => {
    getApplications();
  }, [getApplications]);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API}/api/v1/apply/delete-job/${_id}`);
      console.log("Job Application Deleted");
      toast.success("Application Deleted Successfully");
      getApplications();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the application. Please try again later.");
    }
  };

  return (
    <Layout>
      <div className="application">
        <h1>Applications</h1>
        {jobs.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          jobs.map((job, index) => (
            <div className="application-box" key={job._id || index}>
              <p>Applied For: {job.jobTitle}</p>
              <p>Name: {job.name}</p>
              <p>Email: {job.email}</p>
              <p>
                Resume:{" "}
                <a
                  href={job.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {job.resume}
                </a>
              </p>
              <button onClick={() => handleDelete(job._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default Applications;
