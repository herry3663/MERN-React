import React from "react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [userData, setUserData] = useState({
    name:"",email:"",phone:"",message:""
  });
  const contactUs = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return contactUs();
  },[]);
  const handleInput=(e)=>{

    const{name,value}=e.target;
    setUserData({...userData,[name]:value})

  }
  // sending data to backend:
   const contactForm= async(e)=>{
    e.preventDefault();
    const{name,email,phone,message}=userData;
    const res=await fetch('/contact',{
      
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          name,email,phone,message
        })
    });
    const data=await res.json();
    if(!data){
      console.log("msg not send")
    }else{
      alert("message send successfully")
      setUserData({...userData,message:"" })
    }
   }
  return (
    <>
      <div className="contact-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between align-items-center my-5">
              {/* phone item */}
              <div className="contact-info-items d-flex justify-content-flex-start align-items-center mx-3">
                <img
                  src="https://img.icons8.com/fluency/50/000000/iphone.png"
                  alt="phone"
                />
                <div className="contact-info-content">
                  <div className="contact-info-title">Phone</div>
                  <div className="contact-info-text">+91 888 888 8888</div>
                </div>
              </div>
              {/* Email item */}
              <div className="contact-info-items d-flex justify-content-flex-start align-items-center mx-3">
                <img
                  src="https://img.icons8.com/color/48/000000/apple-mail.png"
                  alt="mail"
                />
                <div className="contact-info-content">
                  <div className="contact-info-title">Email Adress</div>
                  <div className="contact-info-text">herry1@.com</div>
                </div>
              </div>
              {/* Adress item */}
              <div className="contact-info-items d-flex justify-content-flex-start align-items-center mx-3">
                <img
                  src="https://img.icons8.com/color/48/000000/marker--v1.png"
                  alt="location"
                />
                <div className="contact-info-content">
                  <div className="contact-info-title">Adress</div>
                  <div className="contact-info-text">somewhere on earth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form */}
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-form-container py-2">
                <div className="contact-form-title d-flex justify-content-center my-3">
                  <h2>Get in Touch</h2>
                </div>
                <form id="contact-form" method="POST">
                  <div className="contact-form-name d-flex justify-content-between align-items-center">
                    <input
                      className="form-control mx-3"
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleInput}
                      placeholder="Enter Your name"
                      aria-label="default input example"
                    ></input>
                    <input
                      className="form-control mx-3 "
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInput}
                      placeholder="Enter Your email"
                      aria-label="default input example"
                    ></input>
                    <input
                      className="form-control mx-3"
                      type="number"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInput}
                      placeholder="Enter Your phone"
                      aria-label="default input example"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label mt-2"
                    >
                      Message your concern :-
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      name="message"
                      value={userData.message}
                      onChange={handleInput}
                      placeholder="Type here..."
                      cols="70"
                      rows="5"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary me-auto
                    "
                    onClick={contactForm}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
