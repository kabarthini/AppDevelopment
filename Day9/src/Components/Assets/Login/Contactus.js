import React from 'react'
import './Contactus.css';
import Home from './Home';
export default function Contactus() {
  return (
    <div>
    <Home/>
    <div className='contactfull'>
    <div className='am'>
    <img src="https://img.freepik.com/free-photo/flat-lay-chat-bubbles-with-telephone-receiver-copy-space_23-2148796079.jpg?w=1060&t=st=1695447042~exp=1695447642~hmac=d8ae468450da9d18a0321a9c1825213036c7a4d13ac931ca0f0de48c6534f314" height="1000px" width="1500px"/>
    </div>
    <div className='classy'>
       <form>
           <h1>Contact Us</h1>
           <input type="text" id="firstName" placeholder="First Name" required/>
           <input type="text" id="lastName" placeholder="Last Name" required/>
           <input type="email" id="email" placeholder="Email" required/>
           <input type="text" id="mobile" placeholder="Mobile Number" required/>
           <h4>Type Your Message Here...</h4>
           <textarea required></textarea>
           <input type="submit" value="send" id="contact_button"/>
       </form>
       </div>
    </div>
    </div>
  )
}
