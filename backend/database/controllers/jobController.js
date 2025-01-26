//Require Statement
const JobModel = require('../models/jobModel')


//Job Posting Function
const jobPostController = async (req, res) => {
    try {
        //Requesting Data From Client Side
        const { employerId,title, company, type, salary, description, qualification, location } = req.body;

        //Posting Job In Database
        const job = new JobModel({employerId,title, company, type, salary, description, qualification, location }).save()

        //Sending Ok response
        res.status(200).send({ success: true, message: "Job Successfully Posted", job:job})
    }
    catch (error) {
        console.log(error)
    }

}

//Job Get Function
const jobGetController=async(req,res)=>{
    try{
        const job = await JobModel.find();
        res.status(200).send({success:true,message:"Jobs Found",jobs:job});
    }
    catch(error){
        console.log(error)
    }

}


//Job Search Function
const jobSearchController=async(req,res)=>{
     const result = await JobModel.find({"$or":[
        {title:{$regex:req.params.key,$options: 'i'}},
        { company: { $regex:req.params.key,$options: 'i'} },
        { type: { $regex:req.params.key,$options: 'i'} },
        { description: { $regex: req.params.key,$options: 'i'} },
        { qualification: { $regex: req.params.key,$options: 'i'} },
        { location: { $regex:req.params.key,$options: 'i' } }
    ]})
     res.status(200).send(result);
}


//Job Delete Function
const jobDeleteController = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await JobModel.deleteOne({ _id: id });
  
      if (result.deletedCount === 0) {
        return res.status(404).send({ success: false, message: "Job application not found" });
      }
  
      res.status(200).send({ success: true, message: "Job application has been deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, message: "An error occurred while deleting the job application" });
    }
  };


//Export Statement
module.exports = {jobPostController,jobGetController,jobSearchController,jobDeleteController};