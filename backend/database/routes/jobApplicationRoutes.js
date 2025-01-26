//Require Statements
const express = require('express');
const {applyJob,getJobApplication,deleteJobApplication} = require('../controllers/jobApplicationController')

//Router Object
const router = express.Router();

//Apply Job Route Method:Post
router.post('/apply-job', applyJob);

//Get Job Route Method:Get
router.get('/job-applications', getJobApplication);

//Delete Job Route Method:Delete
router.delete('/delete-job/:id',deleteJobApplication)

//Export Statements
module.exports = router