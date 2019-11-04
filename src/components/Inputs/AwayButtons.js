import React from 'react';

const AwayButtons = props => {
  return (
    <div className='awayButtons'>
      <button
        onClick={() => props.handleScore("tigers", 7)}
        className='awayButtons__touchdown'
      >
        Away Touchdown
      </button>
      <button
        onClick={() => props.handleScore("tigers", 3)}
        className='awayButtons__fieldGoal'
      >
        Away Field Goal
      </button>
    </div>
  );
}

export default AwayButtons;