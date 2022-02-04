import React from 'react';
import TheoryItem from './TheoryItem';

export default function TheoriesList(props) {
  const theoriesEl = props.theories.map((theory, i) => {
    return (
      <TheoryItem key={`${theory.name} + ${i}`} name={theory.name} description={theory.description} plausibility={theory.plausibility} antisemitic={theory.antisemitic} />
    );
  }
  );
  return <ul>
    {theoriesEl}
  </ul>;
}