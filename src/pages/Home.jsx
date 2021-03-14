import React, { useState } from 'react';
import Chord from '../components/Chord';
import Scale from '../components/Scale';
import * as Tone from "tone";
import Metronome from '../components/Metronome';


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const pianoSampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  Tone.loaded().then(() => {
    setIsLoaded(true)
  })
  
  const handleClick = () => {
    Tone.Transport.start()
  }

  const handleStop = () => {
    Tone.Transport.stop()
  }
  
  // add in some animation for colors corresponding to different scales and chords to make a cool animation when the scale over the chord is played
  return (
    <>
        {    
          isLoaded ? <>
          <Chord pianoSampler={pianoSampler} />
          <br />
          <Scale pianoSampler={pianoSampler} />
          <br />
          <Metronome />
          <br/>
          <p>----------</p>
          <button disabled={!isLoaded} onClick={handleClick}>PlayTogether</button>
          </>
          : <p>loading...</p>
        }
        <button onClick={handleStop}>Stop</button>
      
    </>
  )
}

export default Home;