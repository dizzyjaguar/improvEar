import { motion } from 'framer-motion'
import Record from '../icons/Record'

export default function RecordButton({ onClick }: { onClick: any }) {
  return (
    <motion.button
      className={`hover:opacity-50 border-[1px] border-black p-3 rounded`}
      whileHover={{ scale: 1.1, rotate: 45 }}
      onClick={onClick}
    >
      <Record />
    </motion.button>
  )
}
