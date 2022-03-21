import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });

  const HandleOnChange=(e)=>{
    const{ name,value}=e.target
    setUser({ ...user, [name]:value})
      
  }
  const OnRegister=async(e)=>{
    e.preventDefault();
    const{ name,email,phone,work,password,cpassword}=user;
    const res =await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({ name,email,phone,work,password,cpassword})
    });
    const data=await res.json();
    if(res.status===422 || !data){
      window.alert("invalid input")
    }
    else{
      window.alert("successful")
      console.log("successful")
      navigate("/login");
    }

  }
  return (
    <div className='container'>
        <div className="register-form">
            <form method='POST'>
            <h2>Register</h2>
            <input class="form-control" type="text" name='name' value={user.name} onChange={HandleOnChange} placeholder="Enter Your name" aria-label="default input example"></input>
            <input class="form-control" type="email" name='email' value={user.email} onChange={HandleOnChange} placeholder="Enter Your Email" aria-label="default input example"></input>
            <input class="form-control" type="number" name='phone' value={user.phone} onChange={HandleOnChange} placeholder="Enter Your Phone" aria-label="default input example"></input>
            <input class="form-control" type="text" name='work' value={user.work} onChange={HandleOnChange} placeholder="Enter Your Work" aria-label="default input example"></input>
            <input class="form-control" type="password" name='password' value={user.password} onChange={HandleOnChange} placeholder="Enter Password" aria-label="default input example"></input>
            <input class="form-control" type="password" name='cpassword' value={user.cpassword} onChange={HandleOnChange} placeholder="Confirm Password" aria-label="default input example"></input>
            <Link to='/signup' onClick={OnRegister}> <button >Register </button></Link>
            <span>OR</span>
            <Link to='/login'>
                <button>
                    Login
                </button>
             </Link>
            </form>
        </div>
    </div>
  )
}
