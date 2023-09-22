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
            <Link to="/weather">Weather Today</Link>
            <span className="icon">
            <i class="fa-solid fa-cloud"></i>
            </span>
            
            
  
          </li>
          <li>
            <Link to="/countries">Countries</Link>
            <span className="icon">
            <i class="fa-solid fa-map-pin"></i>
            </span>
          </li>
          <li>
            <Link to="/report">Report</Link>
            <span className="icon">
            <i class="fa-regular fa-flag"></i>
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

