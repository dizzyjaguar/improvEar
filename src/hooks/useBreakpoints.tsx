import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-ignore
import tailwindConfig from '../../tailwind.config.js'

interface Breakpoints {
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}
const fullConfig = resolveConfig(tailwindConfig)

export function breakpointToNumber(tailwindBreakpoint: string): number {
  const breakpointNumber = Number(tailwindBreakpoint.slice(0, -2))
  return breakpointNumber
}

export const useBreakpoints = (): Breakpoints => {
  const theme = fullConfig.theme
  const breakpoints = theme.screens
  // @ts-ignore
  // @ts-ignore
  const small = breakpoints[`sm`]
  const medium = breakpoints[`md`]
  const large = breakpoints[`lg`]
  const extraLarge = breakpoints[`xl`]
  const extraExtraLarge = breakpoints[`2xl`]

  const sm = breakpointToNumber(small)
  const md = breakpointToNumber(medium)
  const lg = breakpointToNumber(large)
  const xl = breakpointToNumber(extraLarge)
  const xxl = breakpointToNumber(extraExtraLarge)

  return { sm, md, lg, xl, xxl }
}
