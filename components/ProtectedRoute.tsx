import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user]) // Nota: quitar `router` del array de dependencias para evitar re-renders innecesarios

  if (!user) {
    return null // Retorna null hasta que se resuelva la autenticación
  }

  return <>{children}</>
}

export default ProtectedRoute
