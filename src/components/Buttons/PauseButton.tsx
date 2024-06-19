'use client'
import { motion } from 'framer-motion'
import Pause from '../icons/Pause'
import { useState } from 'react'

export default function PauseButton({ onClick }: { onClick: any }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className="hover:opacity-50 border-[1px] border-black p-3 rounded"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div animate={{ scale: isHovered ? 1.1 : 1 }}>
        <Pause />
      </motion.div>
    </motion.button>
  )
}
