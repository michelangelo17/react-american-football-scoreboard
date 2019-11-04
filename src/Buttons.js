import React from 'react';
import HomeButtons from './HomeButtons';
import AwayButtons from './AwayButtons';

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
      <AwayButtons
        tigersScore={props.tigersScore}
        handleScore={handleScore}
      />
    </section>
  );
};

export default Buttons;
