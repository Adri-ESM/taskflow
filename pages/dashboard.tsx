import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getAuth } from 'firebase/auth'
import { useAuth } from '../context/AuthContext'
import Back from '../components/Back'

const Dashboard = () => {
  const { user } = useAuth()
  const router = useRouter()

  // Verificar si el usuario no está logueado
  useEffect(() => {
    if (!user) {
      router.push('/login') // Redirigir a login si no está logueado
    }
  }, [user, router])

  return (
    <div>
      <Back />
      {user ? (
        <>
          <h1>Welcome to Dashboard, {user.email}</h1>
          {/* Aquí puedes agregar más contenido del dashboard */}
        </>
      ) : (
        <p>Reload...</p>
      )}
    </div>
  )
}

export default Dashboard
