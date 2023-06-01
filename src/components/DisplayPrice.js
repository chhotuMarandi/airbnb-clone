import React from 'react'

function DisplayPrice(){
 return (
   <div className='displayPrice-section'>
     <section className='displayPrice'>
     <div className='left'>
       <h3>display total price</h3>
       <span></span>
       <p>include all fees, before taxes</p>
     </div>
       <div className='toggle'>
         <div className='toggle-btn'></div>
       </div>
     </section>
   </div>
 );
}

export default DisplayPrice