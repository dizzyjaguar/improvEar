import React, { useEffect, useState } from 'react';
import * as Tone from "tone";
import { chordTypes, keyCenters } from '../data/chords'


const Chord = () => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [chordType, setChordType] = useState([0, 4, 7])
  // const [currentChord, setCurrentChord] = useState()

  
  const synth = new Tone.PolySynth().toDestination();
  

  const playChord = () => {
    const startingNote = keyCenter.concat(octave.toString())
    console.log(startingNote)
    synth.triggerAttackRelease(Tone.Frequency(startingNote).harmonize(chordType), 1);
  };

  const keyNodes = keyCenters.map(key => {
    return <option key={key.name} value={key.value}>{key.name}</option>
  })

  const chordNodes = Object.keys(chordTypes).map(chord => {
    return <option key={chord} value={chord}>{chord}</option>
  })

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
  
  return (
    <>
      <select id="keys" name="keys" onChange={(handleKeyChange)}>
        {keyNodes}
      </select>
      
      <select id="chords" name="chords" onChange={(handleChordTypeChange)}>
        {chordNodes}
      </select>
      {/* <p>{currentChord[0].slice(0, -1)}  {currentChordType}</p> */}
      <button className="note" onClick={() => playChord()}>
          Playchord
      </button>
    </>
  )
}

export default Chord;