import { CloseIcon, SearchIcon } from './Icons'
import './SearchBar.css'

function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  return (
    <div className="search-bar">
      <SearchIcon size={18} />
      <input
        type="search"
        className="search-bar__input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search products by name"
      />
      {value && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <CloseIcon size={16} />
        </button>
      )}
    </div>
  )
}

export default SearchBar
