//Require Statement
const mongoose = require("mongoose")


//Job Schema
const JobSchema = new mongoose.Schema(
    {
        employerId: { type: String, required: true, trim: true },
        title: { type: String, required: true, trim: true },
        company: { type: String, required: true, unique: true },
        type: { type: String, required: true },
        salary: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        qualification: { type: String, required: true, trim: true },
        location: { type: String, required: true, trim: true },
      },
      { timestamps: true }
)


//Job Model
const JobModel  = mongoose.model('jobs',JobSchema)


//Export Statement
module.exports = JobModel;