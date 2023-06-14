import React from "react";
import Card from './Card'
import data from './data.js'




function CardSection() {

  const cards = data.map((item) => {
    return (
      <Card
        image={item.image}
        location={item.location}
        distance={item.distance}
        date={item.date}
        price={item.price}
      />
    );
  })


  return (
    <div className='card-section'>
      {cards}
    </div>
  );
}

export default CardSection;
