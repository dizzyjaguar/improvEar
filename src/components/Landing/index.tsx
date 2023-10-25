import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import Air from '../icons/Air'
import Sun from '../icons/Sun'
import Water from '../icons/Water'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <>
      <h1 className={`text-center h1 mb-8`}>Improve your Ear</h1>
      <h3 className={`h3 text-center mb-6`}>Go ahead and take a listen</h3>
      <div
        className={`w-full flex justify-center items-center space-x-4 mb-20`}
      >
        <Sun />
        <Water />
        <Air />
      </div>
      <div className={`w-full flex justify-center items-center`}>
        <Button onClick={() => navigate('about')}>Start</Button>
      </div>
    </>
  )
}
