import { useAuthStore } from './store/authStore'
import { Login } from './components/Login'
import { shallow } from 'zustand/shallow'
import './App.css'

function App() {
  const { isAuthenticated, user, logout } = useAuthStore(
    (state) => ({
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      logout: state.logout
    }),
    shallow
  )

  return (
    <div className="App">
      {isAuthenticated ? (
        <div style={{ padding: '20px' }}>
          <h1>Bienvenido, {user?.username}!</h1>
          <p>Email: {user?.email}</p>
          <p>Role: {user?.role}</p>
          <button
            onClick={logout}
            style={{
              padding: '10px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
