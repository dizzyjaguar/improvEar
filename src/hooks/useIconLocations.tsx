import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useWindowSize from './useWindowSize'
import { useBreakpoints } from './useBreakpoints'

export const useIconLocations = () => {
  const location = useLocation()
  const windowSize = useWindowSize()
  const { sm, md, lg, xl, xxl } = useBreakpoints()
  const [iconArrangement, setIconArrangement] = useState<
    'grouped' | 'separate'
  >('grouped')
  const [groupX, setGroupX] = useState(0)
  const [groupY, setGroupY] = useState(0)
  const [sunX, setSunX] = useState(0)
  const [sunY, setSunY] = useState(0)
  const [waterX, setWaterX] = useState(0)
  const [waterY, setWaterY] = useState(0)
  const [airX, setAirX] = useState(0)
  const [airY, setAirY] = useState(0)

  useEffect(() => {
    // if on landing page
    if (!location.state) {
      setIconArrangement('grouped')
      setGroupX(0)
      setGroupY(145)
    } else if (location.state.iconLocation === 'top left') {
      setIconArrangement('grouped')
      windowSize.width >= md
        ? (setGroupX(-250), setGroupY(-40))
        : (setGroupX(0), setGroupY(-40))
    } else if (location.state.iconLocation === 'floating') {
      setIconArrangement('separate')
      // could just set each icon to a random plot within parameters thats not the box??
      setSunX(-350), setSunY(-90)
      setWaterX(390), setWaterY(90)
      setAirX(-20), setAirY(-260)
    }
  }, [location, windowSize])

  return {
    iconArrangement,
    groupX,
    groupY,
    sunX,
    sunY,
    waterX,
    waterY,
    airX,
    airY,
  }
}
