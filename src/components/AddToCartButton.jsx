import { useEffect, useState } from 'react'
import { CartIcon, CheckIcon } from './Icons'
import './AddToCartButton.css'

const FEEDBACK_MS = 1500

// "Add to Cart" button that briefly shows "Added" so the click is visible.
function AddToCartButton({ onAdd }) {
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return undefined
    const timer = setTimeout(() => setAdded(false), FEEDBACK_MS)
    return () => clearTimeout(timer)
  }, [added])

  function handleClick() {
    onAdd()
    setAdded(true)
  }

  return (
    <button
      type="button"
      className={`add-to-cart${added ? ' is-added' : ''}`}
      onClick={handleClick}
    >
      {added ? <CheckIcon size={16} /> : <CartIcon size={16} />}
      {added ? 'Added' : 'Add to Cart'}
    </button>
  )
}

export default AddToCartButton
