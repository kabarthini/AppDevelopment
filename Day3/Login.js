
import React, { useState } from 'react'


import './Login.css';
export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] =  useState("");
  const [submitMail,setSubmitMail] = useState("");
   const [submitPassword,setSubmitPassword] = useState("");
  

  const formHolder = (e) =>  {
     e.preventDefault();
     setSubmitMail(email);
     setSubmitPassword(password);
  }
  return (
    
    <div className='body'>
    <div class="rectangle">
    <div className='head'><p><b>Login</b></p></div>
    <div className='pic'></div>
    <div className='form'>
    <form onSubmit={formHolder}>
    <label htmlFor="email"></label>
    <input type="email" placeholder='Enter your mail' value={email} onChange={ (e)=>setEmail(e.target.value)} name='email' required/><br/><br/>
    <label htmlFor="password"></label>
    <input type="Password" placeholder='Password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password'/><br/><br/>
    <button type='submit' class='button'>submit</button>
    </form>
    <div className='para'><p>Don't have an account?Register Here!</p></div>

    </div>
   </div>
    </div>
   
  )
}
