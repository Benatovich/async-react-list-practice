import React from 'react';
import ColorItem from './ColorItem';

export default function ColorList(props) {
  const colorsEl = props.colors.map((color, i) => {
    return (
      <ColorItem key={`${color.name} + ${i}`} name={color.name} description={color.description} rating={color.rating} reason={color.reason} />
    );
  });
  return <div>{colorsEl}</div>;
}
