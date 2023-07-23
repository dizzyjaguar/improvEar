import { useRef } from 'react'
import { ToneEvent } from 'tone'

// type Options = ConstructorParameters<typeof ToneEvent>[0]

export default function useToneEvent() {
  const toneEvent = useRef<ToneEvent>(new ToneEvent())

  return toneEvent
}
