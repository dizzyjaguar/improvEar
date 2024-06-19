'use client'
import { motion } from 'framer-motion'
import Play from '../icons/Play'
import { useState } from 'react'

export default function PlayButton(onClick: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className={`hover:opacity-50 border-[1px] border-black p-3 rounded`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div animate={{ x: isHovered ? 4 : 1 }}>
        <Play />
      </motion.div>
    </motion.button>
  )
}
