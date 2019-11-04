import React from 'react';

const AwayButtons = props => {
  return (
    <div className='awayButtons'>
      <button
        onClick={() => props.setTigersScore(props.tigersScore + 7)}
        className='awayButtons__touchdown'
      >
        Away Touchdown
      </button>
      <button
        onClick={() => props.setTigersScore(props.tigersScore + 3)}
        className='awayButtons__fieldGoal'
      >
        Away Field Goal
      </button>
    </div>
  );
}

export default AwayButtons;