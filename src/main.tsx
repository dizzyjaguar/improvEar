import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // error page should appear on the white box
    errorElement: <ErrorPage />,
    children: [
      {
        // about page
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)