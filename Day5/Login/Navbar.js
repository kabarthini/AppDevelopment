import React from 'react'
import './Navbar.css';
import Home from './Home';
import {useSelector} from 'react-redux'
import { selectUser } from './Redux/userSlice';
export default function Navbar() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div className="body67">
    <Home/>
    <div className="para">
    <p>Find Weather Forecast</p>
    {username}
    </div>
    <div className='rectangle1'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3phqicZUIp0GEt5oWWMNzRNY6vOLzKMfbDQ&usqp=CAU" height="90px" width="90px"/>
    <div className='p1'><p>Listen to the rythm of the falling rain</p></div>
    </div>
    <div className='rectangle2'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xbznbdIziamQo-5U24HcIW4r8HQAAGsNLQ&usqp=CAU" height="90px" width="90px"/>
    <div className='p2'><p>Summer time is always the best of what might be</p></div>
    </div>
    <div className='rectangle3'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7ydJxtkK7uI8dC_5Zva5i5bhGVefjvL5mA&usqp=CAU" height="90px" width="90px"/>
    <div className='p3'><p>Every leaf speaks bliss to me,fluttering from the autumn tree</p></div>
    </div>
    <div className='rectangle4'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yt108eLdJr0c2FsB27D803HNUn0XI3PK5Q&usqp=CAU" height="90px" width="90px"/>
    <div className='p4'>Every winter has its spring</div>
    </div>
    <div className='img66'>
    <img src="https://media.istockphoto.com/id/481122779/vector/weather-forecast.jpg?s=612x612&w=0&k=20&c=LtHlYiqjrXWsbAsAGgF3S87GRq-bUYVsVUWDTzqkO74=" height="1000px" width="1000px"/>
    </div>
    <div className='img77'>
    <img src="https://4kwallpapers.com/images/wallpapers/sunny-day-daytime-landscape-sun-rays-river-mountains-5k-8k-2048x2048-572.jpg" height="450px" width="450px"/>
    </div>
    <div className='img88'>
    <img src="https://cdn.pixabay.com/photo/2019/11/06/15/12/rainy-day-4606378_640.jpg" height="450px" width="450px"/>
    </div>
    <div className='img99'>
    <img src="https://t4.ftcdn.net/jpg/05/16/16/25/360_F_516162554_pUcdbmBlmobv0IS6G6Ke20WU9XjutCwq.jpg" height="450px" width="450px"/>
    </div>
    <div className="Footer">
    <div className="container text-center">
    <div className="row">
    <div className="col-md-6 col-lg-5 col-12 ft-1">
       <h3><span>WEATHER</span>CAST</h3>
       <p><br/>A Change in the Weather is sufficient to <br/>recreate the world and ourselves!</p> 
       <div className="footer-icons">
       <i class="fab fa-facebook"></i>
       <i class="fab fa-twitter"></i>
       <i class="fab fa-square-instagram"></i>
       <i class="fab fa-linkedin-in"></i>
       </div>
    </div>
    <div className="col-md-6 col-lg-3 col-12 ft-2">
    <h5>Quick Links</h5>
    <ul>
      <li className="nav-item"> 
      <a className="" href="/">Home</a>
      </li>
      <li className="nav-item"> 
      <a className="" href="/">Login</a>
      </li>
      <li className="nav-item"> 
      <a className="" href="/">Register</a>
      </li>
      <li className="nav-item"> 
      <a className="" href="/">Log Out</a>
      </li>
    </ul>
    </div>
    <div className="col-md-6 col-lg-4 col-12 ft-3">
     <h4>Contact Info</h4>
     <p><i class="fa-solid fa-phone-volume"></i> +91 9121324083</p>
     <p><i class="fa-solid fa-envelope"></i>weatherforecast36@gmail.com</p>
     <p><i class="fa-sharp fa-solid fa-paper-plane"></i>Coimbatore, India.</p>
    </div>
    </div>
    </div>
    <div className="Last-footer">
    <p>Design By Weather Cast</p>
    </div>
    </div>
    </div>
  )
}
