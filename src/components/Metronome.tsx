import React, { useEffect, useState } from 'react'
import * as Tone from 'tone'
import { Button } from 'react-bootstrap'

const Metronome = ({ scaleLength }: any) => {
  const [tempoState, setTempoState] = useState(100)
  const [bars, setBars] = useState<any>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(Tone.Transport.position)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  if (scaleLength === 7) {
    if (bars[2] === '3') Tone.Transport.stop()
  } else if (scaleLength === 8) {
    if (bars[2] === '3' && bars[4] === '3') Tone.Transport.stop()
  } else if (scaleLength === 9) {
    if (bars[0] === '1') Tone.Transport.stop()
  } else if (scaleLength === 12) {
    if (bars[0] === '1' && bars[2] === '1' && bars[4] === '2')
      Tone.Transport.stop()
  }

  // console.log(typeof bars)

  const theTempo = (Tone.Transport.bpm.value = tempoState)

  return (
    <>
      <h3 className="component-titles">Tempo</h3>
      <p>{theTempo}</p>
      <p>{bars}</p>
      <Button
        variant="outline-primary"
        onClick={() => setTempoState(tempoState - 1)}
      >
        lower
      </Button>
      <Button
        variant="outline-primary"
        onClick={() => setTempoState(tempoState + 1)}
      >
        raise
      </Button>
    </>
  )
}

export default Metronome
