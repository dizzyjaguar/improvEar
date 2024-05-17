import { motion } from 'framer-motion'
import Pause from '../icons/Pause'

export default function PauseButton(onClick: any) {
  return (
    <motion.button
      className={`hover:opacity-50 border-[1px] border-black p-3 rounded`}
      whileHover={{ scale: 1.2 }}
      onClick={onClick}
    >
      <Pause />
    </motion.button>
  )
}
