//Require Statement
const bcrypt = require('bcrypt');

//Hashing Password Function
const hashPassword = async(password)=>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }
    catch(error){console.log(error)}
}

//Comparing Password Function
const comparePassword=async(password,hashedPassword)=>{
   return bcrypt.compare(password,hashedPassword);
}


//Export statements
module.exports={hashPassword,comparePassword}