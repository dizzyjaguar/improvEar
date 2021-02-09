import React from 'react';
import * as Tone from "tone";
import chords from '../data/chords'

const Home = () => {
  const synth = new Tone.PolySynth().toDestination();
  
  const playChord = (chord) => {
    synth.triggerAttackRelease(chord, 1);
  };

  // this would be able to set the octave/tuning
  synth.set({ detune: -1200 });

  

  return (
    <>
      
        <button className="note" onClick={() => playChord(chords.cmajor7)}>
          Cmaj7
        </button>
      
    </>
  )
}

export default Home;