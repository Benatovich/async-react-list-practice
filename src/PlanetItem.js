import React from 'react';

export default function PlanetItem({ name, residents, environment, star }) {
  return (
    <><div className='planet'>
      <p className='name'>Planet: {name}</p>
      <p className='residents'>Residents: {residents}</p>
      <p className='environment'>Environment: {environment}</p>
      <p className='star'>Star: {star}</p>
    </div><hr>
    </hr></>
  );
}