import { useRef } from 'react'
import { CloseIcon, SearchIcon } from './Icons'
import './SearchBar.css'

function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  const inputRef = useRef(null)

  function clearSearch() {
    onChange('')
    inputRef.current?.focus() // the clear button disappears, so keep focus in the input
  }

  return (
    <div className="search-bar">
      <SearchIcon size={18} />
      <input
        ref={inputRef}
        type="search"
        name="search"
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
          onClick={clearSearch}
          aria-label="Clear search"
        >
          <CloseIcon size={16} />
        </button>
      )}
    </div>
  )
}

export default SearchBar
