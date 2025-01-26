//Require Statement
const mongoose = require("mongoose");

//Job Application Schema
const jobApplicationSchema = mongoose.Schema({
  jobTitle: { type:String,required: true },
  employerId: { type:String,required: true },
  userId: { type:String, ref: 'User', required: true },
  jobId: { type:String, ref: 'Job', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  resume: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

//Job Application Model
const jobApplicationModel = mongoose.model('JobApplication', jobApplicationSchema)

//Export Statement
module.exports = jobApplicationModel;