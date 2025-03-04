import { useAuthStore } from './store/authStore'
import { Login } from './components/Login'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import './App.css'

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div style={{ 
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #ddd',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h1 style={{ margin: '0' }}>Bienvenido, {user?.username}!</h1>
              <p style={{ margin: '5px 0 0 0', color: '#666' }}>
                {user?.email} - Role: {user?.role}
              </p>
            </div>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '20px' }}>
            <Products />
            <Cart />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
