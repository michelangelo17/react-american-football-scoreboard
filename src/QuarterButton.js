import React from 'react';

const QuarterButton = props => {
  const quarterHandler = () => {
    props.quarter === 4 ?
    props.setQuarter(1) :
    props.setQuarter(props.quarter + 1)
  }
  return (
    <div>
      <button 
        onClick={() => quarterHandler()}
        className="quarterButton"
      >
        Change Quarter
      </button>
    </div>
  )
}

export default QuarterButton;