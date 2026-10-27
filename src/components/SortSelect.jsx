import { useId } from 'react'
import './SortSelect.css'

function SortSelect({ value, onChange, options }) {
  const selectId = useId()

  return (
    <div className="sort-select">
      <label htmlFor={selectId} className="sort-select__label">
        Sort by
      </label>
      <select
        id={selectId}
        className="sort-select__control"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortSelect
