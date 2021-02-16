import React, { useState } from 'react';
import * as Tone from "tone";


const Metronome = () => {
  const [tempoState, setTempoState] = useState(100)
  const now = Tone.now()
  const theTempo = Tone.Transport.bpm.value = tempoState;
  
  return (
    <>
      <h3>Tempo</h3>
      <p>{theTempo}</p>
      <button onClick={() => setTempoState(tempoState - 1)}>lower</button>
      <button onClick={() => setTempoState(tempoState + 1)}>raise</button>
    </>
  )
}

export default Metronome;