import React from 'react';
import QuarterButton from '../../QuarterButton';
import DownButton from './DownButton';

const BoardInputs = props => {
  return (
    <>
      <div>
        <DownButton 
          down={props.down}
          setDown={props.setDown}
        />
        {/* <ToGoInput /> */}
      </div>
      <div>
        {/* <BallOnInput /> */}
        <QuarterButton 
          quarter={props.quarter}
          setQuarter={props.setQuarter}
        />
      </div>
    </>
  )
}

export default BoardInputs;