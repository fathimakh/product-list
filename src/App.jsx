import { useMemo, useState } from 'react'
import CartDrawer from './components/CartDrawer'
import CategoryFilter from './components/CategoryFilter'
import EmptyState from './components/EmptyState'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import ProductGrid from './components/ProductGrid'
import ResultsBar from './components/ResultsBar'
import SearchBar from './components/SearchBar'
import SortSelect from './components/SortSelect'
import products from './data/products'
import { useCart } from './hooks/useCart'
import {
  ALL_CATEGORIES,
  SORT_OPTIONS,
  filterAndSortProducts,
  getCategories,
} from './utils/productUtils'
import './App.css'

const CATEGORIES = getCategories(products)
const DEFAULT_SORT = SORT_OPTIONS[0].value

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState(ALL_CATEGORIES)
  const [sortBy, setSortBy] = useState(DEFAULT_SORT)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cart = useCart()

  const visibleProducts = useMemo(
    () => filterAndSortProducts(products, { searchTerm, category, sortBy }),
    [searchTerm, category, sortBy],
  )

  const trimmedSearch = searchTerm.trim()
  const hasActiveFilters = trimmedSearch !== '' || category !== ALL_CATEGORIES
  // The empty state has its own "Clear filters" button, so the results bar
  // only offers one while products are listed.
  const showClearInResultsBar = hasActiveFilters && visibleProducts.length > 0

  function handleAddToCart(product) {
    console.log(product.name)
    cart.add(product)
  }

  function clearFilters() {
    setSearchTerm('')
    setCategory(ALL_CATEGORIES)
  }

  return (
    <>
      <Navbar brand="ShopEase" cartCount={cart.count} onCartClick={() => setIsCartOpen(true)} />
      <Header
        title="Find products you'll love"
        subtitle="Browse the catalogue, search by name, filter by category and sort by price or rating."
      />

      <main id="products" className="main container">
        <section className="toolbar" aria-label="Search, filter and sort products">
          <div className="toolbar__row">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <SortSelect value={sortBy} onChange={setSortBy} options={SORT_OPTIONS} />
          </div>
          <CategoryFilter categories={CATEGORIES} selected={category} onSelect={setCategory} />
        </section>

        <ResultsBar
          title={category === ALL_CATEGORIES ? 'All Products' : category}
          shown={visibleProducts.length}
          total={products.length}
          searchTerm={trimmedSearch}
          onClear={showClearInResultsBar ? clearFilters : undefined}
        />

        {visibleProducts.length > 0 ? (
          <ProductGrid
            products={visibleProducts}
            onAddToCart={handleAddToCart}
            onViewDetails={setSelectedProduct}
          />
        ) : (
          <EmptyState
            title="No products found"
            message="Try a different search term or choose another category."
            actionLabel="Clear filters"
            onAction={clearFilters}
          />
        )}
      </main>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart.items}
        count={cart.count}
        total={cart.total}
        onChangeQuantity={cart.setQuantity}
        onRemove={cart.remove}
        onClear={cart.clear}
      />
    </>
  )
}

export default App
