import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { loginWithEmail, resetPassword } from '../utils/firebaseConfig'
import Back from '../components/Back'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { login, user, logout } = useAuth()

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    setLoading(true)
    setError(null)
    try {
      await login(email, password)
    } catch (error) {
      setError('Failed to log in. Please verify your credentials.')
      console.error('Failed to log in:', error)
    } finally {
      setLoading(false)
    }
  }

  //Manejar la recuperación de contraseña
  const handleResetPassword = async () => {
    try {
      await resetPassword(email)
      alert('Password reset email sent.')
    } catch (error: any) {
      setError('Failed to send password reset email. Please try again.')
      console.error('Failed to send password reset email:', error)
    }
  }

  return (
    <div>
      <Back />
      {!user ? (
        // Mostrar el formulario de inicio de sesión si el usuario no está logueado
        <div>
          <input
            id='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
          <input
            id='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
          <button onClick={handleLogin} disabled={loading}>
            {loading ? 'Charging...' : 'LogIn'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button
            className='text-blue-600 hover:text-blue-800 ml-10'
            onClick={handleResetPassword}
            disabled={loading}
          >
            Recover Password
          </button>
        </div>
      ) : (
        <div>
          <h1>Bienvenido, {user.email}</h1>
          <button onClick={logout}>LogOut</button>
        </div>
      )}
    </div>
  )
}

export default Login
