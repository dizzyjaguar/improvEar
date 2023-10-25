import { ReactNode, useState } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | undefined
  color?: 'black'
  fontColor?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  color = 'black',
  size = 'md',
  ...props
}: ButtonProps) {
  const onClick = props.onClick
  const [effect, setEffect] = useState(false)
  const handleAnimation = () => setEffect(true)
  function handleClick() {
    handleAnimation()
    !!onClick && onClick()
  }

  const colorVariants = {
    black: 'bg-black hover:bg-gray-800 text-white',
  }

  const sizeVariants = {
    sm: '',
    md: 'px-8 py-4 text-2xl font-semibold tracking-wider rounded-md',
    lg: '',
  }

  const defaultClasses = `${effect && 'animate-wiggle'}`

  return (
    <button
      {...props}
      className={`${colorVariants[color]} ${sizeVariants[size]} ${defaultClasses}`}
      onClick={handleClick}
      onAnimationEnd={() => setEffect(false)}
    >
      {children}
    </button>
  )
}
