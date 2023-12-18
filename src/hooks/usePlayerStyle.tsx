import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-ignore
import tailwindConfig from '../../tailwind.config.js'

export const usePlayerStyle = () => {
  const fullConfig = resolveConfig(tailwindConfig)
  const backgroundColors = fullConfig.theme.backgroundColor
  const borderRadius = fullConfig.theme.borderRadius
  let location = useLocation()
  const [playerBg, setPlayerBg] = useState(backgroundColors.alabaster[50])
  const [playerBorderRadius, setPlayerBorderRadius] = useState(borderRadius.md)

  useEffect(() => {
    location.pathname === '/player'
      ? (setPlayerBg(backgroundColors.alabaster[200]),
        setPlayerBorderRadius(borderRadius['3xl']))
      : (setPlayerBg(backgroundColors.alabaster[50]),
        setPlayerBorderRadius(borderRadius.md))
  }, [location.pathname])

  return { playerBg, playerBorderRadius }
}
