import React, { useEffect, useRef, useState } from 'react';
import * as Tone from "tone";


const Metronome = () => {
  const [tempoState, setTempoState] = useState(100)
  const [bars, setBars] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBars(Tone.Transport.position);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  // stops the transport after the first measure
  if(bars[0] === '1' ) Tone.Transport.stop();
  console.log(typeof bars)

  const theTempo = Tone.Transport.bpm.value = tempoState;
  
  return (
    <>
      <h3>Tempo</h3>
      <p>{theTempo}</p>
      <p>{bars}</p>
      <button onClick={() => setTempoState(tempoState - 1)}>lower</button>
      <button onClick={() => setTempoState(tempoState + 1)}>raise</button>
    </>
  )
}

export default Metronome;