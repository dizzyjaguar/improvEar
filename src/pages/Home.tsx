import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Chord from '../components/Chord'
import Scale from '../components/Scale'
import Metronome from '../components/Metronome'
import { scaleTypes } from '../data/scales'
import * as Tone from 'tone'
import useSampler from '../hooks/useSampler'

const Home = () => {
  const [loaded, setLoaded] = useState(false)
  const [scaleKeyCenter, setScaleKeyCenter] = useState('C')
  const [scaleOctave, setScaleOctave] = useState(4)
  const [scaleType, setScaleType] = useState(scaleTypes.major)
  const scaleStartingNote = scaleKeyCenter.concat(scaleOctave.toString())
  const selectedScale = Tone.Frequency(scaleStartingNote).harmonize(scaleType)
  const scaleLength = selectedScale.length

  const sampler = useSampler({
      urls: {
        C4: 'C4.mp3',
        'D#4': 'Ds4.mp3',
        'F#4': 'Fs4.mp3',
        A4: 'A4.mp3',
      },
      onload: () => {
        setLoaded(true)
      },
      release: 1,
      baseUrl: 'https://tonejs.github.io/audio/salamander/',
    })

  const handleScaleOctave = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      setScaleOctave(scaleOctave + 1)
    } else if (direction === 'down') {
      setScaleOctave(scaleOctave - 1)
    }
  }

  // add in some animation for colors corresponding to different scales and chords to make a cool animation when the scale over the chord is played
  return (
    <>
      {loaded ? (
        <>
        <button className='bg-orange-200 text-cyan-400'>tailwind</button>
          <Metronome scaleLength={scaleLength} />
          <br />
          <Chord pianoSampler={sampler} scaleLength={scaleLength} />
          <br />
          <Scale
            pianoSampler={sampler}
            keyCenter={scaleKeyCenter}
            setKeyCenter={setScaleKeyCenter}
            selectedScale={selectedScale}
            scaleType={scaleType}
            startingNote={scaleStartingNote}
            setScaleType={setScaleType}
            handleScaleOctave={handleScaleOctave}
            octave={setScaleOctave}
          />
          <br />
          <p>----------</p>
          {/* <Button variant="outline-primary" disabled={!loaded} onClick={start}>
            Play
          </Button> */}
          <Button variant="outline-primary" onClick={stop}>
            Stop
          </Button>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  )
}

export default Home
