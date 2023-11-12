import { MouseEventHandler } from 'react'
import { File } from 'react-feather'

const Row = ({
  children,
  isActive,
  onClick,
}: {
  children: JSX.Element | string
  isActive: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      className='w-full py-3 px-4 flex flex-row items-center justify-start text-left gap-x-4 hover:bg-gray-800/60 rounded-lg transition-colors'
      style={
        isActive
          ? {
              backgroundColor: '#312EB5',
            }
          : {}
      }
      onClick={onClick}
    >
      <File /> {children}
    </button>
  )
}

export default Row
