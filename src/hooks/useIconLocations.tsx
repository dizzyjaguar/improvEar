import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useWindowSize from './useWindowSize'
import { useBreakpoints } from './useBreakpoints'

// these need to have the ability to either be grouped together or seperated in floating mode

export const useIconLocations = () => {
  const location = useLocation()
  const windowSize = useWindowSize()
  const { sm, md, lg, xl, xxl } = useBreakpoints()
  const [groupX, setGroupX] = useState(0)
  const [groupY, setGroupY] = useState(0)
  // const [groupRotate, setGroupRotate] = useState(0)

  useEffect(() => {
    // if on landing page
    if (!location.state) {
      setGroupX(0)
      setGroupY(145)
    } else if (location.state.iconLocation === 'top left') {
      windowSize.width >= md
        ? (setGroupX(-250), setGroupY(-40))
        : (setGroupX(0), setGroupY(-40))
    } else if (location.state.iconLocation === 'floating') {
      // could just set each icon to a random plot thats not the box??
      setGroupX(-550), setGroupY(-90)
    }
  }, [location, windowSize])

  return { groupX, groupY }
}
