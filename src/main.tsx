import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './pages/ErrorPage'
import About from './routes/about'
import Landing from './components/Landing'
import Donate from './routes/donate'
import Help from './routes/help'
import { ChakraProvider } from '@chakra-ui/react'
import Contact from './routes/contact'
import Player from './routes/player'

const router = createBrowserRouter([
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
        path: '/donate',
        element: <Donate />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/player',
        element: <Player />,
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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
