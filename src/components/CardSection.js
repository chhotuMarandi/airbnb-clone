import React from "react";
import Card from './Card'

function CardSection() {
  return (
    <div className='card-section'>
      <Card
        image='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        location='benglore,india'
        distance='20km away'
        date='12 jun'
        price='$343'
      />
    </div>
  );
}

export default CardSection;
