import React from 'react'
import { useState, useEffect } from 'react';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false)
  
  const HomePage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return HomePage();
  },[]);
 
  return (
    <>
       <div className="home-page d-flex align-items-center justify-content-center">
         <div className="home-div">
           <p className='text-center'>Welcome</p>
           <h1>{userName}</h1>
           <h3>{show? "happy to see you...!!":"We are MERN developers"}</h3>
          </div>
        </div> 
    </>
  )
}
