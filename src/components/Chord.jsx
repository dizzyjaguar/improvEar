import React, { useEffect, useRef, useState } from 'react';
import * as Tone from "tone";
import { chordTypes, keyCenters } from '../data/chords'


const Chord = () => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [chordType, setChordType] = useState([0, 4, 7])
  const [isLoaded, setIsLoaded] = useState(false)
  // const [currentChord, setCurrentChord] = useState()


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

  const startingNote = keyCenter.concat(octave.toString());
  
  const chordEvent = useRef();
  
  useEffect(() => {
    chordEvent.current = new Tone.ToneEvent(((time, chord) => {
      pianoSampler.triggerAttackRelease(chord, 2, time, .3);
    }), Tone.Frequency(startingNote).harmonize(chordType))
    chordEvent.current.start(0)
  }, []);

  useEffect(() => {
    chordEvent.current.dispose();
    chordEvent.current = new Tone.ToneEvent(((time, chord) => {
      pianoSampler.triggerAttackRelease(chord, 2, time, .3);
    }), Tone.Frequency(startingNote).harmonize(chordType))
    chordEvent.current.start(0)
  }, [chordType])

  useEffect(() => {
    chordEvent.current.dispose();
    chordEvent.current = new Tone.ToneEvent(((time, chord) => {
      pianoSampler.triggerAttackRelease(chord, 2, time, .3);
    }), Tone.Frequency(startingNote).harmonize(chordType))
    chordEvent.current.start(0)
    // needs to be startingNote, not keyCenter otherwize doesnt change upon octave change
  }, [startingNote])
  
  // console.log(chordEvent)
  // console.log(Tone.Transport._scheduledEvents)
  
  // this is just for loggin what the chord should be for checking
  // getKeyByValue(chordTypes, chordType)
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  const playChord = () => {
    pianoSampler.triggerAttackRelease(Tone.Frequency(startingNote).harmonize(chordType), "1n", Tone.now(), 2.5 );
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
      <span>Ocatave</span>
      {
        isLoaded ? 
        <>
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
        : <p>loading...</p>
      }
    </>
  )
}

export default Chord;