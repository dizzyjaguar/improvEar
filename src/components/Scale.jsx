import React, { useEffect, useState } from 'react';
import * as Tone from "tone";


const Scale = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  
  

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

  const scale1 = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']

  const seq = new Tone.Sequence((time, note) => {
    pianoSampler.triggerAttackRelease(note, 0.1, time);
    // subdivisions are given as subarrays
  }, scale1).start(0);

  const handleClick = () => {
    if (!isPlaying) {
      Tone.Transport.start()
      setIsPlaying(true)
    } else {
      Tone.Transport.stop()
      setIsPlaying(false)
    }
  }
  
  

  return (
    <>
      {
        isLoaded ? <button disabled={!isLoaded} onClick={handleClick}>PlayScale</button>
        : <p>loading...</p>
      }
      
    add a scale selector and a button to play the chord
    </>
  )
}

export default Scale;