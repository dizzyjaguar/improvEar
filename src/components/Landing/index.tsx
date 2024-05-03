import { useNavigate } from 'react-router-dom'
import Button from '../Buttons/MotionButton'
import { AnimatePresence, motion } from 'framer-motion'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <AnimatePresence mode="sync">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          className={`text-center h1 mb-8`}
        >
          Improve your Ear
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          className={`h3 text-center mb-6`}
        >
          Go ahead and take a listen
        </motion.h3>
        <div className={`h-[33px] mb-20`}></div>
        <div className={`w-full flex justify-center items-center`}>
          <Button
            onClick={() =>
              navigate('player', { state: { iconLocation: 'floating' } })
            }
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
          >
            Start
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
