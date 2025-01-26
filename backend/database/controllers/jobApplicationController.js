//Require Statement
const jobApplicationModel = require("../models/jobApplicationModel");

//Apply Job Function
const applyJob=async(req,res)=>{
   try{
    const {jobTitle,employerId,userId, jobId, name, email,resume } =req.body;
    const application = await new jobApplicationModel({jobTitle,employerId,userId, jobId, name, email,resume }).save();
    res.status(200).send({success:true,message:"Application Sent Successfully",application})
   }
   catch(error){
    console.log(error);
   }
}

//Get Job Application Function
const getJobApplication=async(req,res)=>{
    try {
        const applications = await jobApplicationModel.find()
        res.status(200).json({ success: true, applications });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error fetching applications' });
      }
}


//Delete Job Application Function
const deleteJobApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await jobApplicationModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).send({ success: false, message: "Job application not found" });
    }

    res.status(200).send({ success: true, message: "Job application has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: "An error occurred while deleting the job application" });
  }
};

//Export Statements
module.exports = { applyJob, getJobApplication,deleteJobApplication };