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
    <div className="App fade-in">
      {isAuthenticated ? (
        <>
          <header className="header">
            <div>
              <h1>Bienvenido, {user?.username}!</h1>
              <p>{user?.email} - Role: {user?.role}</p>
            </div>
            <button
              onClick={logout}
              className="btn btn-danger"
            >
              Cerrar Sesión
            </button>
          </header>
          
          <div className="main-container">
            <Products />
            <Cart />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
