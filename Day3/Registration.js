import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Registration.css';

export default function Registration() {
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] =  useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] =  useState('');

    const [error,seterror]=useState(false);
  const navigate=useNavigate();
  const formHandler=(event)=>
    {
        event.preventDefault();
        if(firstname.length==0)
    {
      alert("Enter firstname")
    }
    else if(lastname.length===0)
    {
      alert("Enter lastname");
    }
   
    else if(email.length===0)
    {
      alert("Enter email");
    }
    else if(password.length===0)
    {
      alert("Enter password");
    }
    else
    {
      navigate("/home")
    }
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
    <form onSubmit={formHandler}>
    <label htmlFor="text100"></label>
    <input type="text100" placeholder='FirstName' value={firstname} onChange={ (e)=>setFirstname(e.target.value)} name='firstname' required /><br/><br/>
    <label htmlFor="text201"></label>
    <input type="text201" placeholder='LastName' value={lastname} onChange={ (e)=>setLastname(e.target.value)} name='lastname' required/><br/><br/>
    <label htmlFor="email1"></label>
    <input type="email" placeholder='Email' value={email} onChange={ (e)=>setEmail(e.target.value)} name='email' required/><br/><br/>
    <label htmlFor="password"></label>
    <input type="Password" placeholder='Password' value={password} onChange={ (e)=>setPassword(e.target.value)} name='password' required/><br/><br/>
    <button type='submit' class='button'>Register</button>
    </form>
    <div className='rk'><p>or</p></div>
    <br/><Link to="/login"><div className='p1'><p>Log In</p></div></Link>
    </div>
    </div>
    </div>
  )
}
