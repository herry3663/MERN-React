import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../App';



export default function Login() {

  const {state,dispatch}=useContext(UserContext)

  const navigate =useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const OnLogin=async(e)=>{
   e.preventDefault();

  const res=await fetch('/signin',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})

  })
  const data=await res.json();
  if(res.status===400 || !data){
    window.alert("invalid credentials")
  }
  else{
    dispatch({type:"USER",payload:true})
    window.alert("LOgin Successful")
    navigate("/")
  }

  }
  return (
    <div className='container '>
    <div className="login-form">
        <form method='POST'>
            <h2>Login</h2>
            <input class="form-control" type="email"  name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" aria-label="default input example"></input>
            <input class="form-control" type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" aria-label="default input example"></input>
            <Link to='/login'> <button onClick={OnLogin}>Login</button></Link>
            <span>OR</span>
            <Link to='/signup'><button>Register</button></Link>
        </form>
    </div>
</div>
  )
}
