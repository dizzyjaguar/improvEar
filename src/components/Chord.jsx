import React, { useEffect, useRef, useState } from 'react';
import * as Tone from "tone";
import { chordTypes, keyCenters } from '../data/chords'


const Chord = ({ pianoSampler, scaleLength }) => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [chordType, setChordType] = useState([0, 4, 7])
  const startingNote = keyCenter.concat(octave.toString());
  const chordEvent = useRef();

  //------------------------------
  //CREATE SOME LOGIC TO CHANGE WHEN THE CHORD STOPS DEPENDING ON THE SCALE LENGTH
  //------------------------------
  
  useEffect(() => {
    chordEvent.current = new Tone.ToneEvent(((time, chord) => {
      pianoSampler.triggerAttackRelease(chord, 2, time, 2.5);
    }), Tone.Frequency(startingNote).harmonize(chordType))
    chordEvent.current.start(0)
  }, []);

  useEffect(() => {
    chordEvent.current.dispose();
    chordEvent.current = new Tone.ToneEvent(((time, chord) => {
      pianoSampler.triggerAttackRelease(chord, 2, time, 2.5);
    }), Tone.Frequency(startingNote).harmonize(chordType))
    chordEvent.current.start(0)
  }, [chordType, startingNote])

  
  // this is just for loggin what the chord should be for checking
  // getKeyByValue(chordTypes, chordType)
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  
  const keyNodes = keyCenters.map(key => {
    return <option key={key.name} value={key.value}>{key.name}</option>
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
  
  return (
    <>
      <h3>Chord</h3>
      <span>Octave</span>
      <button onClick={() => setOctave(octave + 1)}>Up</button>
      <button onClick={() => setOctave(octave - 1)}>Down</button>
      <select id="keys" name="keys" onChange={(handleKeyChange)}>
        {keyNodes}
      </select>
      <select id="chords" name="chords" onChange={(handleChordTypeChange)}>
        {chordNodes}
      </select>
      <button className="note" onClick={() => playChord()}>
          PlayChord
      </button> 
    </>
  )
}

export default Chord;