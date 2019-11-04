import React from 'react';

const HomeButtons = props => {
  return (
    <div className='homeButtons'>
      <button
        onClick={() => props.setLionsScore(props.lionsScore + 7)}
        className='homeButtons__touchdown'
      >
        Home Touchdown
      </button>
      <button
        onClick={() => props.setLionsScore(props.lionsScore + 3)}
        className='homeButtons__fieldGoal'
      >
        Home Field Goal
      </button>
    </div>
  );
}

export default HomeButtons;