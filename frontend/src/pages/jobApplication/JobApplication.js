import React, { useState } from 'react';
import axios from 'axios';
import './JobApplication.css'
import toast from 'react-hot-toast';
const JobApplication = ({ show, handleClose, jobId,employerId,jobTitle }) => {
    const [name,setName] = useState('')
    const[email,setEmail] = useState('')
    const [resume,setResume] =useState('')
   const auth = JSON.parse(localStorage.getItem('auth'))
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/apply/apply-job`,{jobTitle,employerId,userId:auth.user.id,jobId,name,email,resume});
            if (response.data.success) {
                toast.success('Application sent successfully');
                handleClose();
            }
        } catch (error) {
            console.log(error);
            alert('Error applying for job');
        }
    };
return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Apply for Job</h5>
                        <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                            </div>
                           <div className="form-group">
                                <label htmlFor="resume">Resume URL</label>
                                <input  type="text" className="form-control" id="resume" name="resume" value={resume} onChange={(e)=>setResume(e.target.value)} required/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApplication;
