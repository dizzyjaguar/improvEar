import React, { useState } from 'react';
import Chord from '../components/Chord';
import Scale from '../components/Scale';
import * as Tone from "tone";
import Metronome from '../components/Metronome';


const Home = () => {
  // possibly move all the time here so it can get passed as props to the chord and scale or move it into its own comp and then use react context to pass it around
  
  
  // add in some animation for colors corresponding to different scales and chords to make a cool animation when the scale over the chord is played
  return (
    <>
      {/* add a button to play both the scale and chord at the same time */}
        <Chord />
        <br />
        <Scale />
        <br />
        <Metronome />
      
    </>
  )
}

export default Home;