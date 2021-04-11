import React, { useEffect, useRef, useState } from 'react';
import * as Tone from "tone";
import { chordTypes, keyCenters } from '../data/chords'


const Chord = ({ pianoSampler, scaleLength }) => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [chordType, setChordType] = useState([0, 4, 7])
  const [duration, setDuration] = useState(2)
  const startingNote = keyCenter.concat(octave.toString());
  const chordEvent = useRef();

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