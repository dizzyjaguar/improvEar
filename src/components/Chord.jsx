import React, { useEffect, useState } from 'react';
import * as Tone from "tone";
import { chordTypes } from '../data/chords'


const Chord = () => {
  const [currentChordType, setCurrentChordType] = useState('major')
  const [currentChord, setCurrentChord] = useState(['C4', 'E4', 'G4'])

  // synth stuff------------------------------
  const synth = new Tone.PolySynth().toDestination();
  
  const playChord = (chord) => {
    synth.triggerAttackRelease(chord, 1);
  };
  //this does work but returns a more complex value than just 'E4' 
  const changeKey = (chord, interval) => {
    const newChord = chord.map(note => Tone.Frequency(note).transpose(interval).toNote())
    setCurrentChord(newChord)
  };


  const chordNodes = Object.keys(chordTypes).map(chord => {
    return <option key={chord} value={chord}>{chord}</option>
  })

  const handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    event.persist();

    setCurrentChordType(value);
  
  };

  useEffect(() => {
    setCurrentChord(chordTypes[currentChordType])
  }, [currentChordType])


  return (
    <>
      <select id="chords" name="chords" onChange={(handleChange)}>
        {chordNodes}
      </select>
       {/* this doesnt work because the currentChord state is just a reference into the notes of the chord and the change key function returns the actual chord, but in difference reference ie: not 'C4', 'E4' */}
      <button onClick={() => changeKey(currentChord, 3)} >Change Key</button>
      <p>{currentChord[0].slice(0, -1)}  {currentChordType}</p>
      <button className="note" onClick={() => playChord(currentChord)}>
          Playchord
      </button>
    </>
  )
}

export default Chord;