import { motion } from 'framer-motion'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Air from '../components/icons/Air'
import Sun from '../components/icons/Sun'
import Water from '../components/icons/Water'
import { useEffect, useState } from 'react'

export default function Root() {
  let location = useLocation()
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotate, setRotate] = useState(0)

  // change icon location route change
  useEffect(() => {
    // if on landing page
    if (!location.state) {
      setX(0)
      setY(145)
    } else if (location.state.iconLocation === 'top left') {
      setX(-250)
      setY(-40)
    }
  }, [location])

  return (
    <div
      className={`w-full h-screen p-10 rainbow-gradient flex justify-center items-center`}
    >
      <div
        className={`bg-white w-screen max-w-2xl h-3/5 rounded-md shadow-md pt-16 relative`}
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
      </div>
    </div>
  )
}
