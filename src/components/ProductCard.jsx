import { formatPrice } from '../utils/productUtils'
import AddToCartButton from './AddToCartButton'
import ProductImage from './ProductImage'
import RatingStars from './RatingStars'
import './ProductCard.css'

function ProductCard({ product, onAddToCart, onViewDetails }) {
  const { name, price, category, rating, image } = product

  return (
    <article className="product-card">
      <div className="product-card__media">
        <ProductImage src={image} alt={name} loading="lazy" />
      </div>

      <div className="product-card__body">
        <span className="tag product-card__category">{category}</span>
        <h3 className="product-card__name">
          {/* Its ::after covers the whole card, so clicking anywhere opens the details. */}
          <button type="button" className="product-card__link" onClick={() => onViewDetails(product)}>
            {name}
          </button>
        </h3>
        <RatingStars rating={rating} />

        <div className="product-card__footer">
          <p className="product-card__price">{formatPrice(price)}</p>
          <AddToCartButton onAdd={() => onAddToCart(product)} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
