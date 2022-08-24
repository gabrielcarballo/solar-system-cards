import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets.map((e) => (
            <PlanetCard
              name={ e.planetName }
              image={ e.planetImage }
              key={ e.planetName }
            />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
