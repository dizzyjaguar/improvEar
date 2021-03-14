import React, { useEffect, useRef, useState } from 'react';
import * as Tone from "tone";
import { keyCenters } from '../data/chords';
import { scaleTypes } from '../data/scales';


const Scale = ({ pianoSampler }) => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [scaleType, setScaleType] = useState(scaleTypes.major)
  const startingNote = keyCenter.concat(octave.toString());
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
  }, [scaleType, startingNote])

  
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
      <span>Octave</span>
      <button onClick={() => setOctave(octave + 1)}>Up</button>
      <button onClick={() => setOctave(octave - 1)}>Down</button>
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
    </>
  )
}

export default Scale;