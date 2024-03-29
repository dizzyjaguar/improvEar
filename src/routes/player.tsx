import { motion } from 'framer-motion'
import Indicator from '../components/Indicator'

const visible = { opacity: 1, transition: { duration: 2 } }

const itemVariants = {
  hidden: { opacity: 0 },
  visible,
}

export default function Player() {
  return (
    <>
      <motion.div
        className={`flex flex-col relative justify-between w-full h-full`}
        variants={{ visible: { transition: { staggerChildren: .5 } } }}
        initial="hidden"
        animate="visible"
      >
        {/* quick menus */}
        <motion.div
          className={`px-8 flex flex-row justify-around `}
          variants={itemVariants}
        >
          <Indicator variant="note" settingOne="C" settingTwo="major" />
          <Indicator variant="chord" settingOne="C" settingTwo="maj7" />
          <Indicator variant="time" settingOne="4/4" settingTwo="120bpm" />
        </motion.div>
        {/* spinner */}
        <motion.div
          className={`w-60 h-60 bg-alabaster-100 border-[1px] border-black shadow-md rounded-full self-center`}
          variants={itemVariants}
        ></motion.div>
        <div className={`flex flex-row justify-around`}>
          <div className={`w-40 h-10 bg-black`}></div>
          <div className={`w-40 h-10 bg-black`}></div>
        </div>
      </motion.div>
    </>
  )
}
