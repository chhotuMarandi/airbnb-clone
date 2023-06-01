import React from 'react'

function Card () {
 return (
   <div className='card-section'>
     <section className='card'>
       <img
         src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
         width={400}
         alt=''
       />
       <h4 className='location'>lonavla,india</h4>
       <p className='distance'>63 kilometers away</p>
       <p className='date'>11-16 jun</p>
       <p className='price'>₹9600</p>
       <p>night</p>
     </section>
   </div>
 );
}

export default Card