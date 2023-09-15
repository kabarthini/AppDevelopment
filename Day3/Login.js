
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './Login.css';
import { Link } from 'react-router-dom';
export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] =  useState("");
  const [error,seterror]=useState(false);
  const navigate=useNavigate();
  const formHandler=(event)=>
    {
        event.preventDefault();
        if(email.length==0 && password.length==0)
    {
      alert("Enter emailid and password")
    }
    else if(email.length===0)
    {
      alert("Enter Emailid")
    }
    else if(password.length===0)
    {
      alert("Enter Password");
    }
    else
    {
      navigate("/home")
    }
      }
 return (
    
    <div className='body'>
    <div class="rectangle">
    <div className='head'><p><b>Login</b></p></div>
    <div className='pic'></div>
    <div className='form'>
    <form onSubmit={formHandler}>
    <label htmlFor="email"></label>
    <input type="email" placeholder='Enter your mail' value={email} onChange={ (e)=>setEmail(e.target.value)} name='email' required/><br/><br/>
    <label htmlFor="password"></label>
    <input type="Password" placeholder='Password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password' required/><br/><br/>
    <button type='submit' class='button'>submit</button>
    </form>
    <div className='kk'><p>or</p></div>
    <br/><Link to="/"><div className='para'><p>Register Here!</p></div></Link>
 
    </div>
   </div>
    </div>
   
  )
}
