import React from 'react'
import Nabvar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Nabvar />
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <h1 className='text-4xl font-bold text-blue-600'>
          Welcome to TaskFlow
        </h1>
      </div>
    </div>
  )
}

export default Home
