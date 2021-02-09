import React from 'react';
import * as Tone from "tone";
import chords from '../data/chords'

const Home = () => {
  // move this into their respected components
  const synth = new Tone.PolySynth().toDestination();
  
  const playChord = (chord) => {
    synth.triggerAttackRelease(chord, 1);
  };

  // this would be able to set the octave/tuning
  synth.set({ detune: -1200 });

  

  return (
    <>
      {/* add a button to play both the scale and chord at the same time */}
        <button className="note" onClick={() => playChord(chords.cmajor7)}>
          Cmaj7
        </button>
      
    </>
  )
}

export default Home;