import React, { useEffect, useRef, useState } from 'react';
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

  const scaleEvent = useRef();

  const selectedScale = Tone.Frequency(startingNote).harmonize(scaleType);
  console.log(selectedScale)

  useEffect(() => {
    scaleEvent.current = new Tone.Sequence((time, note) => {
      pianoSampler.triggerAttackRelease(note, 0.1, time, .5);
    }, selectedScale).start(0)
  }, []);

  useEffect(() => {
    scaleEvent.current.dispose();
    scaleEvent.current = new Tone.Sequence((time, note) => {
      pianoSampler.triggerAttackRelease(note, 0.1, time, .5);
    }, selectedScale).start(0)
  }, [scaleType, keyCenter])

  // const scaleSequence = new Tone.Sequence((time, note) => {
  //   pianoSampler.triggerAttackRelease(note, 0.1, time, .5);
  // }, selectedScale).start(0);

  const handleClick = () => {
      Tone.Transport.start()
  }
  
  const handleStop = () => {
    Tone.Transport.stop()
  }

  
  // this is still playing at the same time, either write out a bunch of triggerAttackRelease or need to find another way via sequence or pattern but doesnt go to the Transport.
  const playScale = () => {
    const mappedScale = selectedScale.map(note => note._val)
    console.log(mappedScale)
    pianoSampler.triggerAttackRelease(mappedScale, '4n', Tone.now(), 2.5)
  };
  
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
      <button className="note" onClick={() => playScale()}>
        PlayScale
      </button>
      
    
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