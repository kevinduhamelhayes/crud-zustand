import { useCartStore, type Product } from '../store/cartStore'

// Productos de ejemplo con mejores imágenes
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Laptop Gaming',
    price: 999.99,
    description: 'Laptop gaming de alta gama con procesador i9 y gráficos RTX',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '2',
    name: 'Smartphone',
    price: 699.99,
    description: 'Último modelo de smartphone con cámara de 108MP y pantalla AMOLED',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '3',
    name: 'Auriculares Bluetooth',
    price: 89.99,
    description: 'Auriculares inalámbricos con cancelación de ruido y 30 horas de batería',
    image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
  }
]

export const Products = () => {
  const { items, addItem, removeItem, updateQuantity } = useCartStore()

  const getItemQuantity = (productId: string) => {
    const item = items.find(item => item.product.id === productId)
    return item?.quantity || 0
  }

  return (
    <section>
      <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>Productos</h2>
      <div className="products-grid">
        {MOCK_PRODUCTS.map(product => {
          const quantity = getItemQuantity(product.id)
          
          return (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                
                {quantity === 0 ? (
                  <button
                    onClick={() => addItem(product)}
                    className="btn btn-primary"
                  >
                    Agregar al carrito
                  </button>
                ) : (
                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="decrease"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => addItem(product)}
                      className="increase"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
} 