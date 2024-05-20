import { motion } from 'framer-motion'
import Pause from '../icons/Pause'

export default function PauseButton(onClick: any) {
  return (
    <button
      className={`hover:opacity-50 border-[1px] border-black p-3 rounded`}
      onClick={onClick}
    >
      <motion.div whileHover={{ scale: 1.4 }}>
        <Pause />
      </motion.div>
    </button>
  )
}
