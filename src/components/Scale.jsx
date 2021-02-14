import React, { useEffect, useState } from 'react';
import * as Tone from "tone";


const Scale = () => {
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

  const handleClick = () => pianoSampler.triggerAttack("C4");
  
  return (
    <>
      {
        isLoaded ? <button disabled={!isLoaded} onClick={handleClick}>click</button>
        : <p>loading...</p>
      }
      
    add a scale selector and a button to play the chord
    </>
  )
}

export default Scale;