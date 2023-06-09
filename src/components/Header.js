import React from "react";
// import ReactDOM from 'react-dom'
import logo from '../logo/airbnb-logo.png'


function Header () {
 return (
   <div className='header'>
     <div className='logo'>
       <img src={logo} alt='' width={100} />
     </div>
     <div className='search-section'>
       <p className='p'>anywhere</p>
       <span></span>
       <p className='p'>any week</p>
       <span></span>
       <p>add guests</p>
       <i className='fa-solid search-icon fa-magnifying-glass'></i>
     </div>
     <div className='profile-section'>
       <p>airbnb your home</p>
       <i className='fa-solid fa-globe'></i>
       <div className='profile-menu'>
         <i className='fa-solid fa-bars'></i>
         <i className='fa-solid fa-user'></i>
       </div>
     </div>
   </div>
 );
}

export default Header