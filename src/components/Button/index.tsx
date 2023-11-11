import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | undefined
  color?: 'black'
  fontColor?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
}

// need to figure out the best way to turn this into a motion component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color = 'black', size = 'md', ...props }: ButtonProps, ref) => {
    const colorVariants = {
      black: 'bg-black hover:bg-gray-800 text-white',
    }

    const sizeVariants = {
      sm: '',
      md: ' px-4 py-2 md:px-8 md:py-4  text-2xl font-semibold tracking-wider rounded-md',
      lg: '',
    }

    return (
      <button
        className={`${colorVariants[color]} ${sizeVariants[size]}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

const MotionButton = motion(Button)

export default MotionButton
