import React, { useEffect, useState } from 'react';
import * as Tone from "tone";
import { scaleTypes } from '../data/scales';


const Scale = () => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [scaleType, setScaleType] = useState()
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

  const majorScale = scaleTypes.major;
  // this should get me the notes that would be playable via the sequence
  

  const newScale = Tone.Frequency("C4").harmonize(majorScale)
  console.log(newScale)
  const scale1 = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']

  const testSequence = new Tone.Sequence((time, note) => {
    pianoSampler.triggerAttackRelease(note, 0.1, time, .5);
  }, newScale).start(0);



  const handleClick = () => {
      Tone.Transport.start()
  }
  
  const handleStop = () => {
    Tone.Transport.stop()
  }
  
  return (
    <>
      {
        isLoaded ? <button disabled={!isLoaded} onClick={handleClick}>PlayScale</button>
        : <p>loading...</p>
      }
      
      <button onClick={handleStop}>Stop</button>
    add a scale selector and a button to play the chord
    </>
  )
}

export default Scale;