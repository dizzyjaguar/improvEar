import React, { useEffect, useState } from 'react';
import * as Tone from "tone";
import { keyCenters } from '../data/chords';
import { scaleTypes } from '../data/scales';


const Scale = () => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [scaleType, setScaleType] = useState(scaleTypes.major)
  const [isLoaded, setIsLoaded] = useState(false)

  const startingNote = keyCenter.concat(octave.toString());

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

  const selectedScale = Tone.Frequency(startingNote).harmonize(scaleType);
  
  const scaleSequence = new Tone.Sequence((time, note) => {
    pianoSampler.triggerAttackRelease(note, 0.1, time, .5);
  }, selectedScale).start(0);

  const handleClick = () => {
      Tone.Transport.start()
  }
  
  const handleStop = () => {
    Tone.Transport.stop()
  }
  
  const keyNodes = keyCenters.map(key => {
    return <option key={key.name} value={key.value}>{key.name}</option>
  })

  const scaleNodes = Object.keys(scaleTypes).map(chord => {
    return <option key={chord} value={chord}>{chord}</option>
  })

  const handleKeyChange = (event) => {
    const { target } = event;
    const { value } = target;
    event.persist();

    setKeyCenter(value);
  };

  const handleScaleTypeChange = (event) => {
    const { target } = event;
    const { value } = target;
    event.persist();
    
    setScaleType(scaleTypes[value]);
  };
  
  return (
    <>
      <h3>Scale</h3>
      <select id="keys" name="keys" onChange={(handleKeyChange)}>
        {keyNodes}
      </select>
      <select id="chords" name="chords" onChange={(handleScaleTypeChange)}>
        {scaleNodes}
      </select>
      
    
      <br/>
      {
        isLoaded ? <button disabled={!isLoaded} onClick={handleClick}>PlayTogether</button>
        : <p>loading...</p>
      }
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default Scale;