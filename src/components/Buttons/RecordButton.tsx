import { motion } from 'framer-motion'
import Record from '../icons/Record'
import { ButtonHTMLAttributes } from 'react'

export default function RecordButton(onClick: any) {
  return (
    <motion.button
      // backgroundColor={'transparent'}
      // border={'2px solid black'}
      // height={'48px'}
      // width={'48px'}
      // _hover={{ backgroundColor: 'transparent', borderWidth: '1px', opacity: .8 }}
      className={`hover:opacity-50`}
      whileHover={{ scale: 1.1, rotate: 180 }}
      onClick={onClick}
    >
      <Record />
    </motion.button>
  )
}
