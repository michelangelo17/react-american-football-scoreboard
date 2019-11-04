import React from 'react';
import QuarterButton from './QuarterButton';
import DownButton from './DownButton';
import BallOnInput from './BallOnInput';
import ToGoInput from './ToGoInput';

const BoardInputs = props => {
  return (
    <>
      <div>
        <DownButton 
          down={props.down}
          setDown={props.setDown}
        />
        <ToGoInput 
          setToGo={props.setToGo}
        />
      </div>
      <div>
        <BallOnInput 
          setBallOn={props.setBallOn}
        />
        <QuarterButton 
          quarter={props.quarter}
          setQuarter={props.setQuarter}
        />
      </div>
    </>
  )
}

export default BoardInputs;