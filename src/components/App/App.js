import React, { useState } from 'react';
import './App.css';
import Scoreboard from '../Scoreboard/Scoreboard';
import AllInputs from '../Inputs/AllInputs';

const App = () => {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(20);
  return (
    <div className='container'>
      <Scoreboard 
        lionsScore={lionsScore} 
        tigersScore={tigersScore} 
        quarter={quarter} 
        down={down}
        toGo={toGo}
        ballOn={ballOn}
      />
      <AllInputs
        lionsScore={lionsScore}
        tigersScore={tigersScore}
        setLionsScore={setLionsScore}
        setTigersScore={setTigersScore}
        quarter={quarter}
        setQuarter={setQuarter}
        down={down}
        setDown={setDown}
        setToGo={setToGo}
        setBallOn={setBallOn}
      />
    </div>
  );
};

export default App;
