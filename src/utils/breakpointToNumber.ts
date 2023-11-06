export function breakpointToNumber(tailwindBreakpoint: string): number {
  const breakpointNumber = Number(tailwindBreakpoint.slice(0, -2))
  return breakpointNumber
}
