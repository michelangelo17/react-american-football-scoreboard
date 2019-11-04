import React from 'react';
import HomeButtons from './HomeButtons';
import AwayButtons from './AwayButtons';
import BoardInputs from './BoardInputs';

const AllInputs = props => {
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
      <BoardInputs 
        quarter={props.quarter}
        setQuarter={props.setQuarter}
        down={props.down}
        setDown={props.setDown}
        setToGo={props.setToGo}
        setBallOn={props.setBallOn}
      />
      <AwayButtons
        tigersScore={props.tigersScore}
        handleScore={handleScore}
      />
    </section>
  );
};

export default AllInputs;
