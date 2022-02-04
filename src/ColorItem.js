import React from 'react';

export default function ColorItem({ name, description, rating, reason }) {
  return (
    <><div className='color'>
      <p className='name'>Color: {name}</p>
      <p className='description'>Description: {description}</p>
      <p className='rating'>Rating: {rating}</p>
      <p className='reason'>Reason: {reason}</p>
    </div><hr>
    </hr></>
  );
}
