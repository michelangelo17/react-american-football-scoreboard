import React from 'react';

const HomeScore = props => {
  return (
    <div className='home'>
      <h2 className='home__name'>Lions</h2>
      <div className='home__score'>{props.lionsScore}</div>
    </div>
  );
}

export default HomeScore;