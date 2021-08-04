import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Chord from '../components/Chord';
import Scale from '../components/Scale';
import * as Tone from "tone";
import Metronome from '../components/Metronome';
import { scaleTypes } from '../data/scales';


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scaleKeyCenter, setScaleKeyCenter] = useState('C')
  const [scaleOctave, setScaleOctave] = useState(4)
  const [scaleType, setScaleType] = useState(scaleTypes.major)
  const scaleStartingNote = scaleKeyCenter.concat(scaleOctave.toString());
  const selectedScale = Tone.Frequency(scaleStartingNote).harmonize(scaleType);
  const scaleLength = selectedScale.length


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
  
  const handleClick = () => {
    // added this because wasn't playing on initial load
    Tone.start()
    Tone.Transport.start()
  }

  const handleStop = () => {
    Tone.Transport.stop()
  }

  const handleScaleOctave = (direction) => {
    if (direction === 'up') {
      setScaleOctave(scaleOctave + 1)
    } else if (direction === 'down') {
      setScaleOctave(scaleOctave - 1)
    }
  };
  
  // add in some animation for colors corresponding to different scales and chords to make a cool animation when the scale over the chord is played
  return (
    <>
        {    
          isLoaded ? <>
            <Metronome
              scaleLength={scaleLength}
            />
            <br />
          <Chord 
            pianoSampler={pianoSampler}
            scaleLength={scaleLength}
            />
          <br />
          <Scale 
            pianoSampler={pianoSampler}
            keyCenter={scaleKeyCenter}
            setKeyCenter={setScaleKeyCenter}
            selectedScale={selectedScale}
            scaleType={scaleType}
            startingNote={scaleStartingNote}
            setScaleType={setScaleType}
            handleScaleOctave={handleScaleOctave}
            octave={setScaleOctave}
          />
          <br/>
          <p>----------</p>
          <Button variant="outlined" color="primary" disabled={!isLoaded} onClick={handleClick}>Play</Button>
          <Button variant="outlined" color="primary" onClick={handleStop}>Stop</Button>
          </>
          : <p>loading...</p>
        }
      
    </>
  )
}


export default Home;