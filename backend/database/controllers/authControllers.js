//Require Statements
const userModel = require('../models/userModel');
const {hashPassword,comparePassword} = require('../helpers/authHelpers')
const  JWT = require('jsonwebtoken');
require('colors')


//User Registration Function
const registerController = async(req,res)=>{
     try{
        //Requesting data from client side
        const{name,email,password,contact,role} = req.body;

        //Checking for existing user
        const existingUser = await userModel.findOne({email:email})
        if(existingUser){return res.status(200).send({success:true,message:"User already exist Please! login"})}

        //Passing User's Password To Bcrypt For Hashing Password
        const hashedPassword = await hashPassword(password);

        //Registering a new user in database
        const user = new userModel({name,email,password:hashedPassword,contact,role}).save();
         res.status(200).send({success:true,message:"User Registered Successfully",user})
        console.table(`New User Registered To Database`.bgYellow.white)

     }
     catch(error){ res.status(404).send({success:false,message:"Error in registering user"})}
}

//User LogIn Function
const loginController=async(req,res)=>{
      try{
         //Requesting data from client side
         const{email,password} =req.body;

         //Checking for existing user
         const user  = await userModel.findOne({email:email});

         //If user not found in database
         if(!user){return res.status(404).send({success:false,message:"User not found please signup first"})}

         //Matching user password and hashed password
         const match = await comparePassword(password,user.password)
         if(!match){ return res.status(401).send({success:true,message:"Invalid Password"})}

         //Generating jsonwebtoken for user
         const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"})

         //Sending ok response if everything goes well
          res.status(200).send({success:true,message:"LoggedIn Successfully",user:{id:user._id,name:user.name,email:user.email,contact:user.contact,role:user.role},token})
         
      }
      catch(error){ return res.status(404).send({success:false,message:"Error in login"})}
}


//Export Statements
module.exports = {registerController,loginController}