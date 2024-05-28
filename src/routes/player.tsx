import { motion } from 'framer-motion'
import Indicator from '../components/Indicator'
import { Button } from '@chakra-ui/react'
import Record from '../components/icons/Record'
import RecordButton from '../components/Buttons/RecordButton'
import PlayButton from '../components/Buttons/PlayButton'
import PauseButton from '../components/Buttons/PauseButton'
import TapeSpinner from '../components/TapeSpinner'
import VolumeSlider from '../components/VolumeSlider'

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
        variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
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
          className={`w-72 h-72 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-alabaster-100 border-[1px] border-black shadow-md rounded-full self-center flex justify-center items-center`}
          variants={itemVariants}
        ><TapeSpinner /></motion.div>
        {/* buttons */}
        <div className={`flex flex-row justify-between space-x-60 px-6`}>
          <div className={`space-x-4`}>
            <RecordButton />
            <PlayButton />
            <PauseButton />
          </div>
          {/* sliders */}
          <div className={`absolute bottom-0 right-4 -mb-4 mr-4`}>
            <VolumeSlider />
          </div>
        </div>
      </motion.div>
    </>
  )
}
