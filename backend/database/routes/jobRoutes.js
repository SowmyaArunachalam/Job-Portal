//Require Statement
const express = require("express")
const {jobPostController,jobGetController,jobSearchController,jobDeleteController} = require('../controllers/jobController')

//Router Object
const router = express.Router();

//Job Posting Route Method:Post
router.post('/job-post', jobPostController)

//Get Job Route Method:Get
router.get('/get-jobs',jobGetController)

//Search Job Route Method:Get
router.get('/search/:key',jobSearchController)

//Delete Job Route Method:Delete
router.delete('/delete/:id',jobDeleteController)

//Export Statement
module.exports = router;