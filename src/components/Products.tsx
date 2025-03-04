import { useCartStore, type Product } from '../store/cartStore'

// Productos de ejemplo
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Laptop Gaming',
    price: 999.99,
    description: 'Laptop gaming de alta gama',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: '2',
    name: 'Smartphone',
    price: 699.99,
    description: 'Último modelo de smartphone',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: '3',
    name: 'Auriculares Bluetooth',
    price: 89.99,
    description: 'Auriculares inalámbricos con cancelación de ruido',
    image: 'https://via.placeholder.com/150'
  }
]

export const Products = () => {
  const { items, addItem, removeItem, updateQuantity } = useCartStore()

  const getItemQuantity = (productId: string) => {
    const item = items.find(item => item.product.id === productId)
    return item?.quantity || 0
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Productos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {MOCK_PRODUCTS.map(product => {
          const quantity = getItemQuantity(product.id)
          
          return (
            <div 
              key={product.id} 
              style={{ 
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }}
              />
              <h3 style={{ margin: '0' }}>{product.name}</h3>
              <p style={{ margin: '0', color: '#666' }}>{product.description}</p>
              <p style={{ margin: '0', fontWeight: 'bold' }}>${product.price}</p>
              
              {quantity === 0 ? (
                <button
                  onClick={() => addItem(product)}
                  style={{
                    padding: '8px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Agregar al carrito
                </button>
              ) : (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
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
                  <span>{quantity}</span>
                  <button
                    onClick={() => addItem(product)}
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
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
} 