import { motion } from 'framer-motion'
import { Link, Outlet } from 'react-router-dom'
import Air from '../components/icons/Air'
import Sun from '../components/icons/Sun'
import Water from '../components/icons/Water'
import { useIconLocations } from '../hooks/useIconLocations.js'
import { usePlayerStyle } from '../hooks/usePlayerStyle.js'

export default function Root() {
  const {
    iconArrangement,
    groupX,
    groupY,
    sunX,
    sunY,
    waterX,
    waterY,
    airX,
    airY,
  } = useIconLocations()
  const { playerBg, playerBorderRadius } = usePlayerStyle()

  // add in a theme changer button that changes it from a rainbow background to a mono color background
  return (
    <div
      className={`w-full h-screen p-10 rainbow-gradient flex justify-center items-center`}
    >
      {/* This will need different height depending on viewport height, see iphoneSE for reference
        IF its less than 800px height then the conatiner needs to fit 90%height
      */}
      {/* if on the player route this needs to transform into the player body, instead of the information body. */}
      <motion.div
        className={`flex flex-col bg-alabaster-50 w-screen max-w-2xl min-h-[600px] h-3/5 rounded-md shadow-md pt-16 pb-4 relative justify-between`}
        animate={{
          background: playerBg,
          borderRadius: playerBorderRadius,
        }}
        transition={{ type: 'spring', duration: 3 }}
      >
        <motion.div
          className={`w-full flex justify-center items-center space-x-4 absolute`}
          animate={
            iconArrangement === 'grouped' && {
              x: groupX,
              y: groupY,
            }
          }
          transition={{ type: 'spring', duration: 1.5 }}
        >
          {/* !!! could possibly change the icons to relative instead of absolute !!! */}
          <motion.div
            animate={
              iconArrangement === 'separate'
                ? {
                    x: sunX,
                    y: sunY,
                  }
                : {}
            }
            transition={{ type: 'spring', duration: 1.5 }}
          >
            <Link to={'/'}>
              <Sun />
            </Link>
          </motion.div>
          <motion.div
            animate={
              iconArrangement === 'separate'
                ? {
                    x: waterX,
                    y: waterY,
                  }
                : {}
            }
            transition={{ type: 'spring', duration: 1.5 }}
          >
            <Link to={'/'}>
              <Water />
            </Link>
          </motion.div>
          <motion.div
            animate={
              iconArrangement === 'separate'
                ? {
                    opacity: 1,
                    x: airX,
                    y: airY,
                  }
                : {}
            }
            transition={{ type: 'spring', duration: 1.5 }}
          >
            <Link to={'/'}>
              <Air />
            </Link>
          </motion.div>
        </motion.div>
        <Outlet />
        <motion.div
          animate={
            iconArrangement === 'separate'
              ? {
                  bottom: -50,
                }
              : {}
          }
          transition={{ type: 'spring', duration: 1.5 }}
          className={`flex flex-row justify-between px-8 relative`}
        >
          <div
            className={`flex flex-row justify-around space-x-4 md:space-x-12`}
          >
            <Link to={'/about'} state={{ iconLocation: 'top left' }}>
              <p className={`footer-link`}>About</p>
            </Link>
            <Link to={'/donate'} state={{ iconLocation: 'top left' }}>
              <p className={`footer-link`}>Donate</p>
            </Link>
          </div>
          <div
            className={`flex flex-row justify-around space-x-4 md:space-x-12`}
          >
            <Link to={'/help'} state={{ iconLocation: 'top left' }}>
              <p className={`footer-link`}>Help</p>
            </Link>
            <Link to={'/contact'} state={{ iconLocation: 'top left' }}>
              <p className={`footer-link`}>Contact</p>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
