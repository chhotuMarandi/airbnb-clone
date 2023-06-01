import React from 'react'

function DisplayPrice(){
 return (
  <div>
    <section className='displayPrice'>
       <h3>display total price</h3>
       <span></span>
       <p>include all fees, before taxes</p>
       <div className="toggle">
        <div className="toggle-btn"></div>
       </div>
    </section>
  </div>
 )
}

export default DisplayPrice