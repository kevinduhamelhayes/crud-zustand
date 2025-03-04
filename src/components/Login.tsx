import { useState } from 'react'
import { useAuthStore } from '../store/authStore'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useAuthStore(state => state.login)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulamos un login exitoso con datos de prueba
    login({
      id: '1',
      username: 'usuario_prueba',
      email: email,
      role: 'user'
    })
  }

  return (
    <div className="login-container" style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <button 
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
} 