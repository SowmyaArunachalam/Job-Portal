//Require Statements
const express = require('express');
const cors    = require('cors');
const connectDb = require('./database/config/config')
const authRoutes = require('./database/routes/authRoutes')
const jobRoutes  = require('./database/routes/jobRoutes')
const jobApplicationRoutes = require('./database/routes/jobApplicationRoutes')
const dotenv  = require('dotenv')
require('colors')

//Dotenv Config
dotenv.config()

//Rest Object
const app = express();

//Middleware
app.use(cors())
app.use(express.json());

//Connecting Database To Server
connectDb();

//Routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/jobs',jobRoutes)
app.use('/api/v1/apply',jobApplicationRoutes)

//Port
const PORT = process.env.PORT || 8080


//Listen Port
app.listen(PORT,(req,res)=>{
    console.log(`Server Is Running At ${PORT}`.bgCyan.white)
})