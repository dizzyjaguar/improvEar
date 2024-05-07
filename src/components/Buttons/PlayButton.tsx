import { motion } from 'framer-motion'
import Play from '../icons/Play'

export default function PlayButton(onClick: any) {
  return (
    <motion.button
      className={`hover:opacity-50 border-[1px] border-black p-3 rounded`}
      whileHover={{ scale: 1.1, x: 3 }}
      onClick={onClick}
    >
      <Play />
    </motion.button>
  )
}
