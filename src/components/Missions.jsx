import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="missions" />
        <Title headline="Missões" />
        {
          missions.map((e) => (
            <MissionCard
              name={ e.name }
              year={ e.year }
              country={ e.year }
              destination={ e.destination }
              key={ e.name }
            />
          ))
        }
      </div>
    );
  }
}

export default Missions;
