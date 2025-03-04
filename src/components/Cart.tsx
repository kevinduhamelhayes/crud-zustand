import { useCartStore } from '../store/cartStore'

export const Cart = () => {
  const { items, total, removeItem, updateQuantity, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Carrito</h2>
        <p>No hay productos en el carrito</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Carrito</h2>
        <button
          onClick={clearCart}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Vaciar carrito
        </button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {items.map(item => (
          <div
            key={item.product.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              gap: '15px'
            }}
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
            />
            
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0' }}>{item.product.name}</h3>
              <p style={{ margin: '5px 0', color: '#666' }}>${item.product.price}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.product.id)}
              style={{
                padding: '8px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h3 style={{ margin: '0' }}>Total:</h3>
        <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>${total.toFixed(2)}</span>
      </div>
    </div>
  )
} 