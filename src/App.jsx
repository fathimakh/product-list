import { useMemo, useState } from 'react'
import CategoryFilter from './components/CategoryFilter'
import EmptyState from './components/EmptyState'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import SearchBar from './components/SearchBar'
import SortSelect from './components/SortSelect'
import products from './data/products'
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
  const [cartCount, setCartCount] = useState(0)

  const visibleProducts = useMemo(
    () => filterAndSortProducts(products, { searchTerm, category, sortBy }),
    [searchTerm, category, sortBy],
  )

  const trimmedSearch = searchTerm.trim()
  const hasActiveFilters = trimmedSearch !== '' || category !== ALL_CATEGORIES

  function handleAddToCart(product) {
    console.log(product.name)
    setCartCount((count) => count + 1)
  }

  function clearFilters() {
    setSearchTerm('')
    setCategory(ALL_CATEGORIES)
  }

  return (
    <>
      <Navbar brand="ShopEase" cartCount={cartCount} />
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

        <div className="results-bar">
          <div>
            <h2 className="results-bar__title">
              {category === ALL_CATEGORIES ? 'All Products' : category}
            </h2>
            <p className="results-bar__count" aria-live="polite">
              Showing {visibleProducts.length} of {products.length} products
              {trimmedSearch && ` matching "${trimmedSearch}"`}
            </p>
          </div>
          {hasActiveFilters && (
            <button type="button" className="results-bar__clear" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>

        {visibleProducts.length > 0 ? (
          <ProductGrid products={visibleProducts} onAddToCart={handleAddToCart} />
        ) : (
          <EmptyState
            title="No products found"
            message="Try a different search term or choose another category."
            actionLabel="Clear filters"
            onAction={clearFilters}
          />
        )}
      </main>
    </>
  )
}

export default App
