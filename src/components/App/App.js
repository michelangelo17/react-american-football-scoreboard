import React, { useState } from 'react';
import './App.css';
import Scoreboard from '../Scoreboard/Scoreboard';
import Buttons from '../Inputs/Buttons';

const App = () => {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  return (
    <div className='container'>
      <Scoreboard 
        lionsScore={lionsScore} 
        tigersScore={tigersScore} 
        quarter={quarter} 
        down={down}
      />
      <Buttons
        lionsScore={lionsScore}
        tigersScore={tigersScore}
        setLionsScore={setLionsScore}
        setTigersScore={setTigersScore}
        quarter={quarter}
        setQuarter={setQuarter}
        down={down}
        setDown={setDown}
      />
    </div>
  );
};

export default App;
