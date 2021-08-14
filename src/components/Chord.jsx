import React, { useEffect, useRef, useState } from 'react';
import * as Tone from "tone";
import Button from '@material-ui/core/Button';
import { chordTypes, keyCenters } from '../data/chords'
import { MenuItem, Select } from '@material-ui/core';


const Chord = ({ pianoSampler, scaleLength }) => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [chordType, setChordType] = useState(chordTypes.major)
  const [duration, setDuration] = useState(2)
  const startingNote = keyCenter.concat(octave.toString());
  const chordEvent = useRef();
  
  console.log(chordType)
  // console.log(` this is the duration : ${duration}`)
  // console.log(` this is the scalelength : ${scaleLength}`)
  
  useEffect(() => {
    if(scaleLength > 7 && scaleLength < 10) {
      setDuration(2.5)
    } else if(scaleLength > 9) {
      setDuration(3.3)
    } else {
      setDuration(2)
    }
  }, [scaleLength])
  
  useEffect(() => {
    chordEvent.current = new Tone.ToneEvent(((time, chord) => {
      pianoSampler.triggerAttackRelease(chord, duration, time, 2.5);
    }), Tone.Frequency(startingNote).harmonize(chordType))
    chordEvent.current.start(0) 
  }, []);
  
  // (notes, duration, time, velocity)

  useEffect(() => {
    chordEvent.current.dispose();
    chordEvent.current = new Tone.ToneEvent(((time, chord) => {
      pianoSampler.triggerAttackRelease(chord, duration, time, 2.5);
    }), Tone.Frequency(startingNote).harmonize(chordType))
    chordEvent.current.start(0)
  }, [chordType, startingNote, duration])

  
  // this is just for loggin what the chord should be for checking
  // getKeyByValue(chordTypes, chordType)
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  const keyNodes = keyCenters.map(key => {
    return <MenuItem key={key.name} value={key.value}>{key.name}</MenuItem>
  })
  
  const chordNodes = Object.keys(chordTypes).map(chord => {
    return <option key={chord} value={chord}>{chord}</option>
  })
  
  const playChord = () => {
    pianoSampler.triggerAttackRelease(Tone.Frequency(startingNote).harmonize(chordType), "1n", Tone.now(), 2.5 );
  };
  
  const handleKeyChange = (event) => {
    const { target } = event;
    const { value } = target;
    event.persist();

    setKeyCenter(value);
  };

  const handleChordTypeChange = (event) => {
    const { target } = event;
    const { value } = target;
    event.persist();
    
    setChordType(chordTypes[value]);
  };

  console.log(chordNodes)
  return (
    <>
    
      <h3>Chord</h3>
      <span>Octave</span>
      <Button variant="outlined" color="primary" onClick={() => setOctave(octave + 1)}>Up</Button>
      <Button variant="outlined" color="primary" onClick={() => setOctave(octave - 1)}>Down</Button>
      <Select id="keys" name="keys" autoWidth value={keyCenter} onChange={(handleKeyChange)}>
        {keyNodes}
      </Select>
      {/* this has some shit that isnt working, possibly because the nodes actually make sure to use the key name and the initial state doesnt? */}
      <select id="chords" name="chords" value={chordType.name} onChange={(handleChordTypeChange)}>
        {chordNodes}
      </select>
      <Button variant="outlined" color="primary" className="note" onClick={() => playChord()}>
          PlayChord
      </Button> 
    </>
  )
}

export default Chord;