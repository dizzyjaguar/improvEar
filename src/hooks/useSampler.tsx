'use client'

import { useEffect, useRef, useState } from 'react'
import { Sampler, Transport } from 'tone'

type Options = ConstructorParameters<typeof Sampler>[0]

export default function useSampler(options: Options): Sampler {
  const [loaded, setLoaded] = useState(false)

  const piano = useRef<Sampler>(new Sampler(options as Options).toDestination())

  const pianoOptions = {
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
  }

  // useEffect(() => {
  //   piano.current = new Sampler({
  //     urls: {
  //       C4: 'C4.mp3',
  //       'D#4': 'Ds4.mp3',
  //       'F#4': 'Fs4.mp3',
  //       A4: 'A4.mp3',
  //     },
  //     onload: () => {
  //       setLoaded(true)
  //     },
  //     release: 1,
  //     baseUrl: 'https://tonejs.github.io/audio/salamander/',
  //   }).toDestination()
  // }, [])

  const start = () => {
    // added this because wasn't playing on initial load
    // Tone.start()
    Transport.start()
  }

  const stop = () => {
    Transport.stop()
  }

  return piano.current
}
