import React, { useEffect, useState } from 'react';
import * as Tone from "tone";
import { chordTypes, keyCenters } from '../data/chords'


const Chord = () => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [chordType, setChordType] = useState([0, 4, 8])
  const [currentChord, setCurrentChord] = useState()

  
  const synth = new Tone.PolySynth().toDestination();
  

  const playChord = () => {
    synth.triggerAttackRelease(Tone.Frequency(keyCenter.concat(octave.toString())).harmonize(chordType), 1);
  };
  
  //probably dont need this now 
  // const changeKey = (chord, interval) => {
  //   const newChord = chord.map(note => Tone.Frequency(note).transpose(interval).toNote())
  //   setKeyCenter(newKey)
  // };

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

  // const handleChordTypeChange = (event) => {
  //   const { target } = event;
  //   const { value } = target;
  //   event.persist();

  //   setCurrentChordType(value);
  // };

  // useEffect(() => {
  //   setCurrentChord(chordTypes[currentChordType])
  // }, [currentChordType])


  return (
    <>
      <select id="keys" name="keys" onChange={(handleKeyChange)}>
        {keyNodes}
      </select>
      {/* <button onClick={() => changeKey(currentChord, keyCenter)} >Change Key</button> */}
      {/* <select id="chords" name="chords" onChange={(handleChordTypeChange)}>
        {chordNodes}
      </select> */}
      {/* <p>{currentChord[0].slice(0, -1)}  {currentChordType}</p> */}
      <button className="note" onClick={() => playChord()}>
          Playchord
      </button>
    </>
  )
}

export default Chord;