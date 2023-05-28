import React from "react";
import logo from '../logo/airbnb-logo.png'


function Header () {
 return (
  <div>
   <div className="logo">
    <img src={logo} alt="" width={100}/>
   </div>
  </div>
 )
}

export default Header