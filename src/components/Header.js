import React from "react";
import logo from '../logo/airbnb-logo.png'


function Header () {
 return (
   <div>
     <div className='logo'>
       <img src={logo} alt='' width={100} />
     </div>
     <div className='search-section'>
       <p>anywhere</p>
       <p>any week</p>
       <p>add guests</p>
       <i class='fa-solid fa-magnifying-glass'></i>
     </div>
   </div>
 );
}

export default Header