import { formatPrice } from '../utils/productUtils'
import AddToCartButton from './AddToCartButton'
import Modal from './Modal'
import ProductImage from './ProductImage'
import RatingStars from './RatingStars'
import './ProductDetails.css'

// Larger view of one product, opened by clicking a product card.
function ProductDetails({ product, onClose, onAddToCart }) {
  const { name, price, category, rating, image } = product

  return (
    <Modal open onClose={onClose} title={name}>
      <div className="product-details">
        <div className="product-details__media">
          <ProductImage src={image} alt={name} size={400} />
        </div>
        <div className="product-details__info">
          <span className="tag">{category}</span>
          <RatingStars rating={rating} />
          <p className="product-details__price">{formatPrice(price)}</p>
          <AddToCartButton onAdd={() => onAddToCart(product)} />
        </div>
      </div>
    </Modal>
  )
}

export default ProductDetails
