
import React, { useState } from 'react'

import './Registration.css';

export default function Registration() {
    const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] =  useState("");
  const [submitFirstname,setSubmitFirstname] = useState("");
   const [submitLastname,setSubmitLastname] = useState("");
   const [email,setEmail] = useState("");
  const [password,setPassword] =  useState("");
  const [submitMail,setSubmitMail] = useState("");
   const [submitPassword,setSubmitPassword] = useState("");
   

 
  const formHolder = (e) =>  {
     e.preventDefault();
     setSubmitFirstname(firstname);
     setSubmitLastname(lastname);
     setSubmitMail(email);
     setSubmitPassword(password);
     
     }
  return (
    <div className='body1'>
    <div className='predict'>
    <img src="https://ewscripps.brightspotcdn.com/dims4/default/dc9cb2b/2147483647/strip/true/crop/1920x1080+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F16%2F10%2F1430484545439deb0631e7bc7461%2F2020-weekend-forecast.png"></img>
    </div>
    <div className='rectangle2'>
    <div className='head2'>
    <p>Register Now</p>
    </div>
    <div className='form2'>
    <form onSubmit={formHolder}>
    <label htmlFor="text100"></label>
    <input type="text100" placeholder='FirstName' value={firstname} onChange={ (e)=>setFirstname(e.target.value)} name='firstname' required/><br/><br/>
    <label htmlFor="text201"></label>
    <input type="text201" placeholder='LastName' value={lastname} onChange={ (e)=>setLastname(e.target.value)} name='lastname'/><br/><br/>
    <label htmlFor="email1"></label>
    <input type="email" placeholder='Email' value={email} onChange={ (e)=>setEmail(e.target.value)} name='email' required/><br/><br/>
    <label htmlFor="password"></label>
    <input type="Password" placeholder='Password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password'/><br/><br/>
    <button type='submit' class='button'>Register</button>
    </form>
    <div className='p1'><p>Already have an account? Log In</p></div>
    </div>
    </div>
    </div>
  )
}
