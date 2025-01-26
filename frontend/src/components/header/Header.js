import React from 'react'
import {NavLink, useNavigate}  from 'react-router-dom'
import './Header.css'
import toast from 'react-hot-toast'
const Header = () => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  const navigate = useNavigate()

  const handleLogOut=()=>{
     localStorage.removeItem('auth');
     toast.success("You have been logged out ")
     navigate("/")
  }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink className="navbar-brand">Job Nest</NavLink>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       {auth? (<><li className="nav-item">
          <NavLink to="/homepage" className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        {auth.user.role==="Employee"?<li className="nav-item">
          <NavLink to='/jobs' className="nav-link"  >Jobs</NavLink>
        </li>:
        <><li className="nav-item">
          <NavLink to='/post-jobs' className="nav-link"  >Post Jobs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/application' className="nav-link"  >Applications</NavLink>
        </li></>
    }
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link " >Profile</NavLink>
        </li>
        <button onClick={handleLogOut}>Log Out</button>
        </>):
         (<><li className="nav-item">
          <NavLink to='/signup' className="nav-link ">Sign Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link " >Log In</NavLink>
        </li></>)}
        
          
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header