import React from 'react';

const ToGoInput = props => {
  return(
    <div>
      <input type='number' onChange={e => props.setToGo(e.target.value)} />
    </div>
  )
}

export default ToGoInput;