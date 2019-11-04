import React from 'react';

const DownButton = props => {
  const downHandler = () => {
    console.log(props.down)
    props.down === 4 ?
    props.setDown(1) :
    props.setDown(props.down + 1)
  }
  return (
    <div>
      <button 
        onClick={() => downHandler()}
        className="DownButton"
      >
        Change Down
      </button>
    </div>
  )
}

export default DownButton;