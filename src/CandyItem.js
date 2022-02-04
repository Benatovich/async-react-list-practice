import React from 'react';

export default function CandyItem({ name, description, kosher, rating }) {
  return (
    <><div className='candy'>
      <p className='name'>Candy: {name}</p>
      <p className='description'>Description: {description}</p>
      <p className='kosher'>Is it kosher? {kosher}</p>
      <p className='rating'>Rating: {rating} stars</p>
    </div><hr>
    </hr></>
  );
}
