import { motion } from 'framer-motion'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Air from '../components/icons/Air'
import Sun from '../components/icons/Sun'
import Water from '../components/icons/Water'
import { useEffect, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize.js'
import { useBreakpoints } from '../hooks/useBreakpoints.js'

export default function Root() {
  let location = useLocation()
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotate, setRotate] = useState(0)
  const windowSize = useWindowSize()
  const { sm, md, lg, xl, xxl } = useBreakpoints()

  // change icon location route change
  useEffect(() => {
    // if on landing page
    if (!location.state) {
      setX(0)
      setY(145)
    } else if (location.state.iconLocation === 'top left') {
      windowSize.width >= sm ? (setX(-250), setY(-40)) : (setX(0), setY(-40))
    }
  }, [location, windowSize])

  return (
    <div
      className={`w-full h-screen p-10 rainbow-gradient flex justify-center items-center`}
    >
      <div
        className={`flex flex-col bg-white w-screen max-w-2xl h-3/5 rounded-md shadow-md pt-16 pb-4 relative justify-between`}
      >
        <motion.div
          className={`w-full flex justify-center items-center space-x-4 absolute`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x, y, rotate }}
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
          <div className={`flex flex-row justify-around space-x-12`}>
            <Link to={'/about'} state={{ iconLocation: 'top left' }}>
              <p className={`footer-link`}>About</p>
            </Link>
            <Link to={'/donate'} state={{ iconLocation: 'top left' }}>
              <p className={`footer-link`}>Donate</p>
            </Link>
          </div>
          <div className={`flex flex-row justify-around space-x-12`}>
            <Link to={'/help'} state={{ iconLocation: 'top left' }}>
              <p className={`footer-link`}>Help</p>
            </Link>
            <Link to={'/contact'} state={{ iconLocation: 'top left' }}>
              <p className={`footer-link`}>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
