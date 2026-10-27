import { formatPrice } from '../utils/productUtils'
import { CartIcon } from './Icons'
import Modal from './Modal'
import ProductImage from './ProductImage'
import './CartDrawer.css'

function CartDrawer({ open, onClose, items, count, total, onChangeQuantity, onRemove, onClear }) {
  const footer = items.length > 0 && (
    <>
      <p className="cart__total">
        <span>Subtotal</span>
        <strong>{formatPrice(total)}</strong>
      </p>
      <button type="button" className="cart__clear" onClick={onClear}>
        Clear cart
      </button>
    </>
  )

  return (
    <Modal open={open} onClose={onClose} title={`Your cart (${count})`} variant="drawer" footer={footer}>
      {items.length === 0 ? (
        <div className="cart__empty">
          <CartIcon size={32} />
          <p>Your cart is empty.</p>
          <p className="cart__hint">Click “Add to Cart” on any product to add it here.</p>
        </div>
      ) : (
        <ul className="cart__list">
          {items.map(({ product, quantity }) => (
            <li key={product.id} className="cart-item">
              <ProductImage src={product.image} alt="" size={64} className="cart-item__image" />
              <div>
                <p className="cart-item__name">{product.name}</p>
                <p className="cart-item__price">{formatPrice(product.price)} each</p>
                <div className="cart-item__actions">
                  <div className="quantity" role="group" aria-label={`Quantity of ${product.name}`}>
                    <button
                      type="button"
                      className="quantity__button"
                      onClick={() => onChangeQuantity(product.id, quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="quantity__value" aria-live="polite">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      className="quantity__button"
                      onClick={() => onChangeQuantity(product.id, quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button type="button" className="cart-item__remove" onClick={() => onRemove(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
              <p className="cart-item__subtotal">{formatPrice(product.price * quantity)}</p>
            </li>
          ))}
        </ul>
      )}
    </Modal>
  )
}

export default CartDrawer
