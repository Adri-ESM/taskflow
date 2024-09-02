import React from 'react'
import { useRouter } from 'next/router'

const Back = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back() // Navega a la página anterior en el historial
  }

  return (
    <button
      onClick={handleBack}
      className='flex items-center space-x-2 text-blue-600 hover:text-blue-800'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 19l-7-7 7-7'
        />
      </svg>
      <span>Back</span>
    </button>
  )
}

export default Back
