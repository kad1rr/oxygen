import { MouseEventHandler } from 'react'

const Button = ({
  onClick,
  children,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: JSX.Element | string
}) => {
  return (
    <button
      className='bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/70 transition-colors'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
