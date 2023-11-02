import { useLocation, useRoutes } from 'react-router-dom'
import Landing from './components/Landing'
import ErrorPage from './pages/ErrorPage'
import About from './routes/about'
import { AnimatePresence, motion } from 'framer-motion'
import Root from './routes/root'
import React from 'react'

const App = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Root />,
      // error page should appear on the white box
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Landing />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          // donate page
        },
        {
          // help page
        },
        {
          // contact page
        },
      ],
    },
    {
      path: 'player',
      // error page should appear over the player/menu
      children: [
        {
          // note menu
        },
        {
          // chord menu
        },
        {
          // time menu
        },
      ],
    },
  ])
  const location = useLocation()

  if (!element) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div className={`w-full h-screen`}>
        {React.cloneElement(element, { key: location.pathname })}
      </motion.div>
    </AnimatePresence>
  )
}

export default App
