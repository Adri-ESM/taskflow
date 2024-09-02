import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Back from '../components/Back'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const handleLogin = async () => {
    setLoading(true) // Comenzar el proceso de carga
    try {
      await login(email, password)
      // Redirigir al usuario o realizar otra acción después del inicio de sesión exitoso
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
    } finally {
      setLoading(false) // Finalizar el proceso de carga
    }
  }

  return (
    <div>
      <Back />
      <h1>Iniciar Sesión</h1>
      <input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
    </div>
  )
}

export default Login
