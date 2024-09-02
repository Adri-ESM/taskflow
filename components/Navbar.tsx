import React from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className='bg-blue-600 p-4 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <Link href='/'>TaskFlow</Link>
        </div>
        <div className='space-x-4'>
          <Link href='/dashboard'>Dashboard</Link>
          {user ? (
            <>
              <button onClick={logout} className='text-white'>
                Logout
              </button>
            </>
          ) : (
            <Link href='/login'>Login</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
