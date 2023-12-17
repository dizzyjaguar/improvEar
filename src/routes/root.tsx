import { motion } from 'framer-motion'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Air from '../components/icons/Air'
import Sun from '../components/icons/Sun'
import Water from '../components/icons/Water'
import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-ignore
import tailwindConfig from '../../tailwind.config.js'
import { useIconLocations } from '../hooks/useIconLocations.js'

export default function Root() {
  const { groupX, groupY } = useIconLocations()
  const fullConfig = resolveConfig(tailwindConfig)
  const backgroundColors = fullConfig.theme.backgroundColor
  const borderRadius = fullConfig.theme.borderRadius
  let location = useLocation()
  const [currentBg, setCurrentBg] = useState(backgroundColors.alabaster[50])
  const [currentBorderRadius, setCurrentBorderRadius] = useState(
    borderRadius.md
  )

  useEffect(() => {
    location.pathname === '/player'
      ? (setCurrentBg(backgroundColors.alabaster[200]),
        setCurrentBorderRadius(borderRadius['3xl']))
      : (setCurrentBg(backgroundColors.alabaster[50]),
        setCurrentBorderRadius(borderRadius.md))
  }, [location.pathname])

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
          background: currentBg,
          borderRadius: currentBorderRadius,
        }}
        transition={{ type: 'spring', duration: 3 }}
      >
        <motion.div
          className={`w-full flex justify-center items-center space-x-4 absolute`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: groupX, y: groupY }}
          transition={{ type: 'spring', duration: 1.5 }}
        >
          <Link to={'/'}>
            <Sun />
          </Link>
          <Link to={'/'}>
            <Water />
          </Link>
          <Link to={'/'}>
            <Air />
          </Link>
        </motion.div>
        <Outlet />
        <div className={`flex flex-row justify-between px-8`}>
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
        </div>
      </motion.div>
    </div>
  )
}
