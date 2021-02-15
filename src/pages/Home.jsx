import React from 'react';
import Chord from '../components/Chord';
import Scale from '../components/Scale';
import * as Tone from "tone";


const Home = () => {
  // possibly move all the time here so it can get passed as props to the chord and scale or move it into its own comp and then use react context to pass it around
  const now = Tone.now()
  Tone.Transport.bpm.value = 60;

  // add in some animation for colors corresponding to different scales and chords to make a cool animation when the scale over the chord is played
  return (
    <>
      {/* add a button to play both the scale and chord at the same time */}
        <Chord />
        <br />
        <Scale />
      
    </>
  )
}

export default Home;