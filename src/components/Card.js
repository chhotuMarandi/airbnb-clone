import React from 'react'

function Card (props) {
 return (
     <section className='card'>
       <div className='image-section'>
         <img
           src= {props.image}/>
         <i className='fa-regular fa-heart'></i>
       </div>
       <h4 className='location'>{props.location}</h4>
      <p className='distance'>{props.distance}</p>
      <p className='date'>{props.date}</p>
       <p className='price'>{props.price}</p>
       <p className='night'>night</p>
     </section>
 );
}

export default Card