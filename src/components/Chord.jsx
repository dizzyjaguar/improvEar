import React, { useEffect, useState } from 'react';
import * as Tone from "tone";
import { chordTypes, keyCenters } from '../data/chords'


const Chord = () => {
  const [keyCenter, setKeyCenter] = useState('C')
  const [octave, setOctave] = useState(4)
  const [chordType, setChordType] = useState([0, 4, 7])
  const [isLoaded, setIsLoaded] = useState(false)
  // const [currentChord, setCurrentChord] = useState()

  
  // const synth = new Tone.PolySynth().toDestination();
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

  const startingNote = keyCenter.concat(octave.toString())
  
  const chordEvent = new Tone.ToneEvent(((time, chord) => {
	// the chord as well as the exact time of the event
	// are passed in as arguments to the callback function
	pianoSampler.triggerAttackRelease(chord, 2, time, .3);
  }), Tone.Frequency(startingNote).harmonize(chordType));
  // start the chord at the beginning of the transport timeline
  chordEvent.start(0);
  
  
  // console.log(Tone.Transport)

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  // getKeyByValue(chordTypes, chordType)
  
  console.log(`the current playing chord should be ${keyCenter} ${getKeyByValue(chordTypes, chordType)}`)

  const playChord = () => {
    // const startingNote = keyCenter.concat(octave.toString())
    console.log(startingNote)
    pianoSampler.triggerAttackRelease(Tone.Frequency(startingNote).harmonize(chordType), "1n", Tone.now(), 2.5 );
  };

  // need to get the chord to start with the transport just like the scale
  // const testSequence = new Tone.Sequence((time, note) => {
  //   playChord(note, 0.1, time);
  // }).start(0);

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