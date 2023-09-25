import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Home.css';
export default function Home() {
  const navRef = useRef();

  const showNavbar = ()=> {
       navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <div>
    
    <header>
   <div className="head"> <h6>Weather Cast</h6></div>
    <nav ref={navRef}>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/login">Logout</Link>
    <Link to="/weatherapp">Track Your Weather</Link>
    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
    </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
       <FaBars/>
    </button>
    </header>
   
    <div>
  <div className="primary-nav">
    <button href="#" className="hamburger open-panel nav-toggle">
      <span className="screen-reader-text">Menu</span>
    </button>
    <nav role="navigation" className="menu">
      <a href="#" className="logotype">
        DASH<span>BOARD</span>
      </a>
      <div className="overflow-container">
        <ul className="menu-dropdown">
          <li>
            <Link to='/about'>AboutUS</Link>
            <span className="icon">
            <i class="fa-solid fa-user"></i>
            </span>
          </li>
          <li className="menu-hasdropdown">
            <Link to="/contactus">Contact Us</Link>
            <span className="icon">
            <i class="fa-solid fa-phone-volume"></i>
            </span>
            
            
  
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
            <span className="icon">
            <i class="fa-solid fa-pen"></i>
            </span>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
            <span className="icon">
            <i class="fa-solid fa-question"></i>
            </span>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
            <span className="icon">
            <i class="fa-solid fa-lock"></i>
            </span>
          </li>
          <li>
            <Link to="/policy">Terms</Link>
            <span className="icon">
            <i class="fa-solid fa-check"></i>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  

</div>

 
    </div>
    
  )
}

