import { useState } from 'react'
import fallbackImage from '../assets/image-placeholder.svg'
import { formatPrice } from '../utils/productUtils'
import { CartIcon } from './Icons'
import RatingStars from './RatingStars'
import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  const { name, price, category, rating, image } = product
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img
          src={imageFailed ? fallbackImage : image}
          alt={name}
          width="300"
          height="300"
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__name">{name}</h3>
        <RatingStars rating={rating} />

        <div className="product-card__footer">
          <p className="product-card__price">{formatPrice(price)}</p>
          <button
            type="button"
            className="product-card__button"
            onClick={() => onAddToCart(product)}
          >
            <CartIcon size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
