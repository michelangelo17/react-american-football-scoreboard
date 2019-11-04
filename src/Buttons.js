import React from 'react';
import HomeButtons from './HomeButtons';
import AwayButtons from './AwayButtons';

const Buttons = (props) => {
  return (
    <section className='buttons'>
      <HomeButtons
        lionsScore={props.lionsScore}
        setLionsScore={props.setLionsScore}
      />
      <AwayButtons
        tigersScore={props.tigersScore}
        setTigersScore={props.setTigersScore}
      />
    </section>
  );
};

export default Buttons;
