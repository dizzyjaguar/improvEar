import { motion } from 'framer-motion'
import Indicator from '../components/Indicator'
import { Button } from '@chakra-ui/react'
import Record from '../components/icons/Record'
import RecordButton from '../components/Buttons/RecordButton'
import PlayButton from '../components/Buttons/PlayButton'
import PauseButton from '../components/Buttons/PauseButton'
import TapeSpinner from '../components/TapeSpinner'
import VolumeSlider from '../components/VolumeSlider'
import VisualizerUI from '../components/VisualizerUI'
import { useState } from 'react'

const visible = { opacity: 1, transition: { duration: 2 } }

const itemVariants = {
  hidden: { opacity: 0 },
  visible,
}

export default function Player() {
  const [volume, setVolume] = useState(30)

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
          className={`flex flex-row justify-evenly justify-around md:justify-evenly md:px-14 lg:justify-around lg:px-12`}
          variants={itemVariants}
        >
          <Indicator variant="note" settingOne="C" settingTwo="major" />
          <Indicator variant="chord" settingOne="C" settingTwo="maj7" />
          <Indicator variant="time" settingOne="4/4" settingTwo="120bpm" />
        </motion.div>
        {/* spinner */}
        <motion.div
          className={`w-48 h-48 md:w-72 md:h-72 lg:w-72 lg:h-72 bg-alabaster-100 border-[1px] border-black shadow-md rounded-full self-center flex justify-center items-center`}
          variants={itemVariants}
        >
          <TapeSpinner />
        </motion.div>
        {/* buttons */}
        <div className={`flex flex-row justify-between space-x-60 px-6`}>
          <div className={`space-x-4`}>
            <RecordButton />
            <PlayButton />
            <PauseButton />
          </div>
          {/* sliders */}
          <div className={`absolute bottom-0 right-8 -mb-8 mr-4 flex`}>
            <div style={{ flex: 1 }}>
              <div style={{ marginRight: '8px' }}>
                <VisualizerUI volume={volume} />
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <VolumeSlider volume={volume} setVolume={setVolume} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
