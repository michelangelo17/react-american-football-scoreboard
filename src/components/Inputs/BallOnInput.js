import React from 'react';

const BallOnInput = props => {
  return(
    <div>
      <input type='number' onChange={e => props.setBallOn(e.target.value)} />
    </div>
  )
}

export default BallOnInput;