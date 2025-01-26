import React from "react";
import Layout from '../../components/layout/Layout'
import Typewriter from "react-typewriter-effect";
import "./Homepage.css";
// import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
const Homepage = () => {
  const jobs = [
    "Web Developer",
    "UI/UX Designer",
    "Sales Manager",
    "Software Engineer",
    "Java Developer",
    "BackEnd Developer",
    "DevOps Engineer",
    "Cloud Architect",
  ];
  return (
    <Layout>
    <div className="homepage">
      <div className="homepage-container">
      <Fade left> <div className="homepage-box">
          <h1>Next Hire</h1>
          <p>India's Leading Destination for Career Opportunities </p>
          <div className="homepage-numbers">
            <p>10 Lakh Jobs |</p>
            <p>5 Lakh Internships</p>
          </div>
        </div></Fade> 
       <Fade right> <div className="homepage-box-two">
          <h2>Find 🔎 Jobs Nearby You </h2>
          <p>Jobs Available In Almost Every Region Of India</p>
        </div></Fade>
      </div>
      <div className="homepage-jobs">
        <div className="homepage-job-name">
           <div>
           <h2>Get Jobs In These Fields</h2>
           {/* <h3>1 Million + Jobs Delivered Till Now 🎉</h3> */}
           </div>
         <p><Typewriter text={jobs.join(" | ")} cursorColor="beige" typeSpeed={100} eraseSpeed={50} delaySpeed={1000}  multiTextLoop={true} multiText={jobs}  multiTextDelay={1500}  deleteSpeed={50}loop={true}/></p>
         </div>
      </div>
    </div>
    </Layout>
  );
};

export default Homepage;
