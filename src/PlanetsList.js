import React from 'react';
import PlanetItem from './PlanetItem';

export default function PlanetsList(props) {
  const planetsEl = props.planets.map((planet, i) => {
    return (
      <PlanetItem key={`${planet.name} + ${i}`} name={planet.name} residents={planet.residents} environment={planet.environment} star={planet.star} />
    );
  });
  return <div>{planetsEl}</div>;
}
