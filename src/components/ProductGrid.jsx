import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products, onAddToCart }) {
  return (
    <ul className="product-grid">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </li>
      ))}
    </ul>
  )
}

export default ProductGrid
