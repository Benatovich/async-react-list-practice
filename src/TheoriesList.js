import React from 'react';
import TheoryItem from './TheoryItem';

export default function TheoriesList({ theories }) {
  return <div>
    {
      theories.map(({
        name,
        description,
        plausibility,
        antisemitic
      }, i) => <div key={name + i}>
        <p>{name}</p>
        <p>{description}</p>
        <p>{plausibility}</p>
        <p>{antisemitic}</p>
      </div>
      )
    }
  </div>;
}