import { useEffect, useReducer } from 'react'

const STORAGE_KEY = 'product-list-cart'

// Each cart line is { product, quantity }, so the cart can show the image,
// name and price without looking the product up again.
function cartReducer(items, action) {
  switch (action.type) {
    case 'add': {
      const inCart = items.some((item) => item.product.id === action.product.id)
      if (!inCart) return [...items, { product: action.product, quantity: 1 }]
      return items.map((item) =>
        item.product.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item,
      )
    }
    case 'setQuantity':
      if (action.quantity < 1) return items.filter((item) => item.product.id !== action.id)
      return items.map((item) =>
        item.product.id === action.id ? { ...item, quantity: action.quantity } : item,
      )
    case 'remove':
      return items.filter((item) => item.product.id !== action.id)
    case 'clear':
      return []
    default:
      return items
  }
}

// The cart is saved in localStorage so it survives a page reload.
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export function useCart() {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  return {
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    add: (product) => dispatch({ type: 'add', product }),
    setQuantity: (id, quantity) => dispatch({ type: 'setQuantity', id, quantity }),
    remove: (id) => dispatch({ type: 'remove', id }),
    clear: () => dispatch({ type: 'clear' }),
  }
}
