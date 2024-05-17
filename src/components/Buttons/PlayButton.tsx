import { motion } from 'framer-motion'
import Play from '../icons/Play'

export default function PlayButton(onClick: any) {
  return (
    <button
      className={`hover:opacity-50 border-[1px] border-black p-3 rounded`}
      onClick={onClick}
    >
      <motion.div whileHover={{ scale: 1.4, x: 6 }}>
        <Play />
      </motion.div>
    </button>
  )
}
