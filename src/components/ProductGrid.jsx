import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products, onAddToCart, onViewDetails }) {
  return (
    <ul className="product-grid">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
        </li>
      ))}
    </ul>
  )
}

export default ProductGrid
