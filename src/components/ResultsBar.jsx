import './ResultsBar.css'

function ResultsBar({ title, shown, total, searchTerm, onClear }) {
  return (
    <div className="results-bar">
      <div className="results-bar__summary">
        <h2 className="results-bar__title">{title}</h2>
        <p className="results-bar__count" aria-live="polite">
          Showing {shown} of {total} products
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>
      {onClear && (
        <button type="button" className="results-bar__clear" onClick={onClear}>
          Clear filters
        </button>
      )}
    </div>
  )
}

export default ResultsBar
