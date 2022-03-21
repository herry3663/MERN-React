import React from 'react'
import herry from '../images/herry.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function About() {
  const navigate=useNavigate();
  const [userData, setUserData] = useState({})
  const callAboutPage=async()=>{
    try {
      const res=await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      })
      const data=await res.json();
      console.log(data);
      setUserData(data)
      if(!res.status===200){throw new Error(res.error)}
    } catch (error) {
      console.log(error)
      navigate('/login');
    }
  }

  useEffect(() => {
    return callAboutPage(); 
  })
  
  return (
    <>
        <div className="profile">
          <form method='GET'>
          <div className="container mt-5 align-items-start">
            <div className="row justify-content-between">
              <div className="col-md-2 mt-2">
                <img src={herry} alt="pic" />
              </div>
              <div className="col-md-6 mx-1 mt-4">
                <h4>{userData.name}</h4>
                <h5>{userData.work}</h5>
              </div>
              <div className="col-md-2 mt-4">
                <input type="submit" className='profile-edit-btn' value='Edit Profile' />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="profile-work d-flex flex-column">
                  <p>Wrok Link</p>
                  <Link to="https://icons8.com/icons/set/upload-image" target='_blank'>icons8</Link>
                  <Link to="https://icons8.com/icons/set/upload-image" target='_blank'>icons8</Link>
                  <Link to="https://icons8.com/icons/set/upload-image" target='_blank'>icons8</Link>
                  <Link to="https://icons8.com/icons/set/upload-image" target='_blank'>icons8</Link>
                </div>
              </div>
              <div className="col-md-8 px-5">
                <div className="about-content">
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-between">
                      <label>User Id</label>
                      <strong>:</strong>
                    </div>
                    <div className="col-md-6">
                      <p>123456</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-between">
                      <label>Name</label>
                      <strong>:</strong>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-between">
                      <label>profession</label>
                      <strong>:</strong>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-between">
                      <label>email</label>
                      <strong>:</strong>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-between">
                      <label>city</label>
                      <strong>:</strong>
                    </div>
                    <div className="col-md-6">
                      <p>mumbai</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-between">
                      <label>phone no</label>
                      <strong>:</strong>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </form>
        </div>
    </>
  )
}
