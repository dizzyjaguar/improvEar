import React from 'react';
import * as Tone from "tone";

const Home = () => {
  const synth = new Tone.PolySynth().toDestination();
  
  const playChord = (chord) => {
    synth.triggerAttackRelease(chord, 1);
  };

  synth.set({ detune: -1200 });

  const cmajor7 = ['C4', 'E4', 'G4']

  return (
    <>
      
        <button className="note" onClick={() => playChord(cmajor7)}>
          Cmaj7
        </button>
      
    </>
  )
}

export default Home;