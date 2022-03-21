import React from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext } from 'react';



export default function Navbar() {
  const {state,dispatch}=useContext(UserContext)

  const NavMenu=()=>{
    if (state){
      return(
        <>
                <li className="nav-item">
                 <Link exact activeClassName='active-page' className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                 <Link exact activeClassName='active-page' className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                 <Link exact activeClassName='active-page' className="nav-link" to="/contact">Contact</Link>
                </li>
               
                <li className="nav-item">
                 <Link exact activeClassName='active-page' className="nav-link" to="/logout">Logout</Link>
                </li>
        </>
      )
    }
    else{
      return(
        <>
                <li className="nav-item">
                 <Link exact activeClassName='active-page' className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                 <Link exact activeClassName='active-page' className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                 <Link exact  activeClassName='active-page'className="nav-link" to="/contact">Contact</Link>
                </li>  
                <li className="nav-item">
                 <Link exact activeClassName='active-page' className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                 <Link exact activeClassName='active-page' className="nav-link" to="/signup">Register</Link>
                </li>
        </>
      )
    }
  }
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand d-flex justify-content-start" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               
               <NavMenu />
               
            </ul>
            
            </div>
        </div>
</nav>
    </div>
  )
}
