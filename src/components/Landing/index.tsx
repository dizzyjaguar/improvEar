import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { motion } from 'framer-motion'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <motion.div>
      <motion.h1
        className={`text-center h1 mb-8`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        Improve your Ear
      </motion.h1>
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
    </motion.div>
  )
}
