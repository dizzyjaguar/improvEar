import React, { useState } from 'react';
import * as Tone from "tone";
import { chords, chordTypes } from '../data/chords'


const Chord = () => {
  const [currentChord, setCurrentChord] = useState('major')

  // synth stuff------------------------------
  const synth = new Tone.PolySynth().toDestination();
  
  
  const playChord = (chord) => {
    synth.triggerAttackRelease(chord, 1);
  };

  //this does work but returns a more complex value than just 'E4' 
  const changeKey = (chord, interval) => {
    const newChord = chord.map(note => Tone.Frequency(note).transpose(interval))
    setCurrentChord(newChord)
  };

  console.log(currentChord)


  const chordNodes = Object.keys(chordTypes).map(chord => {
    return <option key={chord} value={chord}>{chord}</option>
  })

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    event.persist();

    setCurrentChord(value);
  };


  return (
    <>
      <select id="chords" name="chords" onChange={(handleChange)}>
        {chordNodes}
      </select>
       {/* this doesnt work because the currentChord state is just a reference into the notes of the chord and the change key function returns the actual chord, but in difference reference ie: not 'C4', 'E4' */}
      {/* <button onClick={() => changeKey(chordTypes[currentChord], 3)} >Change Key</button> */}
      <button className="note" onClick={() => playChord(chordTypes[currentChord])}>
          Playchord
      </button>
    </>
  )
}

export default Chord;