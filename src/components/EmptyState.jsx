import { SearchIcon } from './Icons'
import './EmptyState.css'

function EmptyState({ title, message, actionLabel, onAction }) {
  return (
    <div className="empty-state">
      <span className="empty-state__icon">
        <SearchIcon size={28} />
      </span>
      <h2 className="empty-state__title">{title}</h2>
      <p className="empty-state__message">{message}</p>
      {onAction && (
        <button type="button" className="empty-state__button" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default EmptyState
