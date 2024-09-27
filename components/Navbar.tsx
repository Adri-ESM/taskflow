import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  // Mostrar el menú desplegable al hacer click en "Mi Perfil" o hover
  const handleMouseEnter = () => {
    setIsDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownVisible(false)
  }

  const handleProfileClick = () => {
    router.push('/welcome') // Redirige a la página de bienvenida o perfil (ajusta la ruta según sea necesario)
  }

  return (
    <nav className='bg-blue-600 p-4 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <Link href='/'>TaskFlow</Link>
        </div>
        <div className='space-x-4 relative'>
          <Link href='/dashboard'>Dashboard</Link>
          {user ? (
            <div
              className='relative inline-block'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className='cursor-pointer'
                onClick={handleProfileClick} // Al hacer click, redirige a la página de bienvenida
              >
                Mi Perfil
              </span>
              {isDropdownVisible && (
                <div className='absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10'>
                  <button
                    onClick={logout}
                    className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200'
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href='/login'>Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
