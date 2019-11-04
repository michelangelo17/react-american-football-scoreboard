import React from 'react';
import HomeButtons from './HomeButtons';
import AwayButtons from './AwayButtons';
import QuarterButton from './QuarterButton';

const Buttons = props => {
  const handleScore = (team, amount) => {
    team === "lions" ? 
    props.setLionsScore(props.lionsScore + amount) :
    props.setTigersScore(props.tigersScore + amount);
  }
  return (
    <section className='buttons'>
      <HomeButtons
        lionsScore={props.lionsScore}
        handleScore={handleScore}
      />
      <QuarterButton 
        quarter={props.quarter}
        setQuarter={props.setQuarter}
      />
      <AwayButtons
        tigersScore={props.tigersScore}
        handleScore={handleScore}
      />
    </section>
  );
};

export default Buttons;
