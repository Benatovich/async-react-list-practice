import React from 'react';

export default function TheoryItem({ name, description, plausibility, antisemitic }) {
  return (
    <><div className='theory'>
      <p className='name'>Conspiracy Theory: {name}</p>
      <p className='description'>Description: {description}</p>
      <p className='plausibility'>Plausibility: {plausibility}</p>
      <p className='antisemitic'>Is it antisemitic? {antisemitic}</p>
    </div><hr>
    </hr></>
  );
}
