import './CategoryFilter.css'

function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="category-filter" role="group" aria-label="Filter by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-filter__button${category === selected ? ' is-active' : ''}`}
          aria-pressed={category === selected}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
