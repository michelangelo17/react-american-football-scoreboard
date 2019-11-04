import React from 'react';
import HomeScore from './HomeScore';
import AwayScore from './AwayScore';
import BottomRow from './BottomRow';

const Scoreboard = (props) => {
  return (
    <section className='scoreboard'>
      <div className='topRow'>
        <HomeScore lionsScore={props.lionsScore} />
        <div className='timer'>00:03</div>
        <AwayScore tigersScore={props.tigersScore} />
      </div>
      <BottomRow />
    </section>
  );
};

export default Scoreboard;
