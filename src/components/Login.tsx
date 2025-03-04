import { useState } from 'react'
import { useAuthStore, type User } from '../store/authStore'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useAuthStore((state) => state.login)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulamos un login exitoso con datos de prueba
    const mockUser: User = {
      id: '1',
      username: 'usuario_prueba',
      email: email,
      role: 'user'
    }
    login(mockUser)
  }

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button 
          type="submit"
          className="btn btn-primary form-submit"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
} 