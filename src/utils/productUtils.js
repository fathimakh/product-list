// Pure helpers for listing products. Kept outside the components so the
// filtering and sorting rules live in one place and are easy to reuse.

export const ALL_CATEGORIES = 'All'

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Rating: High to Low' },
]

const comparators = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  'rating-desc': (a, b) => b.rating - a.rating,
}

const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

/** Unique category names in the order they first appear, prefixed with "All". */
export function getCategories(products) {
  return [ALL_CATEGORIES, ...new Set(products.map((product) => product.category))]
}

/**
 * Returns the products that match the search term and category, sorted by
 * `sortBy`. The original array is never mutated; "featured" keeps its order.
 */
export function filterAndSortProducts(products, { searchTerm, category, sortBy }) {
  const query = searchTerm.trim().toLowerCase()

  const filtered = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(query)
    const matchesCategory = category === ALL_CATEGORIES || product.category === category
    return matchesName && matchesCategory
  })

  // `filter` already returned a new array, so sorting it in place is safe.
  const compare = comparators[sortBy]
  return compare ? filtered.sort(compare) : filtered
}

export function formatPrice(price) {
  return priceFormatter.format(price)
}
