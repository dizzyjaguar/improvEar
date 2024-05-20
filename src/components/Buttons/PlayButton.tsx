import { motion } from 'framer-motion'
import Play from '../icons/Play'

export default function PlayButton(onClick: any) {
  return (
    <motion.button
      className="hover:opacity-50 border-[1px] border-black p-3 rounded"
      onClick={onClick}
    >
      <motion.div whileHover={{x: 4 }}>
        <Play />
      </motion.div>
    </motion.button>
  );
}
