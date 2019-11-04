import React, { useState } from 'react';
import './App.css';
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';

const App = () => {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  return (
    <div className='container'>
      <Scoreboard lionsScore={lionsScore} tigersScore={tigersScore} quarter={quarter} />
      <Buttons
        lionsScore={lionsScore}
        tigersScore={tigersScore}
        setLionsScore={setLionsScore}
        setTigersScore={setTigersScore}
        quarter={quarter}
        setQuarter={setQuarter}
      />
    </div>
  );
};

export default App;
