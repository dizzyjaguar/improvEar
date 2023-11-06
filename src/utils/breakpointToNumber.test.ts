import { breakpointToNumber } from './breakpointToNumber'

test('turns 100px into the number 100', () => {
  expect(breakpointToNumber('100px')).toBe(100)
})

test('turns 1200px into the number 1200', () => {
  expect(breakpointToNumber('1200px')).toBe(1200)
})
