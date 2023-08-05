import { useRef } from 'react'
import { Sampler } from 'tone'

type Options = ConstructorParameters<typeof Sampler>[0]

export default function useSampler(options: Options): Sampler {

  const piano = useRef<Sampler>(new Sampler(options as Options).toDestination())

  return piano.current
}