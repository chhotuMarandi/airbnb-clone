import React from 'react'

function Card () {
 return (
     <section className='card'>
       <div className='image-section'>
         <img
           src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           alt=''
         />
         <i class='fa-regular fa-heart'></i>
       </div>
       <h4 className='location'>lonavla,india</h4>
       <p className='distance'>63 kilometers away</p>
       <p className='date'>11-16 jun</p>
       <p className='price'>₹9600</p>
       <p>night</p>
     </section>
 );
}

export default Card