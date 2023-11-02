import { useNavigate } from 'react-router-dom'
import Button from '../Button'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <>
      <h1 className={`text-center h1 mb-8`}>Improve your Ear</h1>
      <h3 className={`h3 text-center mb-6`}>Go ahead and take a listen</h3>
      <div className={`h-[33px] mb-20`}></div>
      <div className={`w-full flex justify-center items-center`}>
        <Button
          onClick={() =>
            navigate('about', { state: { iconLocation: 'top left' } })
          }
        >
          Start
        </Button>
      </div>
    </>
  )
}
