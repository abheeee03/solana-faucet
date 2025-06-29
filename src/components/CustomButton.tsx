import React, { type ReactNode } from 'react'
import { LuDot } from 'react-icons/lu'

function CustomButton({
  active,
  onClick,
  children}:
  {onClick?: ()=>void ,children: ReactNode, active: boolean}) {
  return (
    <button className='border active:scale-105 transition-all duration-200 rounded-lg px-3 py-1 flex items-center justify-evenly cursor-pointer hover:opacity-80' onClick={onClick}>
        {children} {
          active && <span className='text-xl text-emerald-600 ml-2'>•</span>
        }
    </button>
  )
}

export default CustomButton