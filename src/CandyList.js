import React from 'react';
import CandyItem from './CandyItem';

export default function CandyList(props) {
  const candiesEl = props.candies.map((candy, i) => {
    return (
      <CandyItem key={`${candy.name} + ${i}`} name={candy.name} description={candy.description} kosher={candy.kosher} rating={candy.rating} />
    );
  }
  );
  return <ul>{candiesEl}</ul>;
}
