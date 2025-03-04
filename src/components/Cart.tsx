import { useCartStore } from '../store/cartStore'

export const Cart = () => {
  const { items, total, removeItem, updateQuantity, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <h2>Carrito</h2>
        <p className="empty-message">No hay productos en el carrito</p>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Carrito</h2>
        <button
          onClick={clearCart}
          className="btn btn-danger"
        >
          Vaciar carrito
        </button>
      </div>
      
      <div>
        {items.map(item => (
          <div
            key={item.product.id}
            className="cart-item"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="cart-item-image"
            />
            
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.product.name}</h3>
              <p className="cart-item-price">${item.product.price.toFixed(2)}</p>
            </div>

            <div className="quantity-control">
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                className="decrease"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                className="increase"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.product.id)}
              className="btn btn-danger"
              style={{ marginLeft: '10px', padding: '5px 10px', fontSize: '0.8rem' }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h3 className="cart-total-text">Total:</h3>
        <span className="cart-total-price">${total.toFixed(2)}</span>
      </div>
    </div>
  )
} 