import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import SignUp from './pages/signup/SignUp';
import LogIn from './pages/login/LogIn';
import Jobs from './pages/jobs/Jobs';
import PostJob from './pages/postJobs/PostJob';
import Profile from './pages/profile/Profile';
import Applications from './pages/application/Applications';
function App() {
  return (
    <>
      <Routes>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/post-jobs' element={<PostJob />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/application" element={<Applications/>} />
        <Route path='/' element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
