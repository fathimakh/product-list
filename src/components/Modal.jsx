import { useEffect, useId, useRef } from 'react'
import { CloseIcon } from './Icons'
import './Modal.css'

// Wraps the native <dialog>, which traps focus, closes on Esc and makes the
// page behind it inert. variant="drawer" docks the panel to the right edge.
function Modal({ open, onClose, title, variant = 'center', footer, children }) {
  const dialogRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // Every close goes through dialog.close(): the browser then returns focus to
  // the element that opened the modal and fires `close`, which calls onClose.
  function requestClose() {
    dialogRef.current.close()
  }

  function handleClick(event) {
    // Clicks on the dimmed backdrop land on the <dialog> element itself.
    if (event.target === dialogRef.current) requestClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={`modal modal--${variant}`}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleClick}
    >
      <div className="modal__panel">
        <header className="modal__header">
          <h2 id={titleId} className="modal__title">
            {title}
          </h2>
          <button type="button" className="modal__close" onClick={requestClose} aria-label="Close">
            <CloseIcon size={20} />
          </button>
        </header>
        <div className="modal__body">{children}</div>
        {footer && <footer className="modal__footer">{footer}</footer>}
      </div>
    </dialog>
  )
}

export default Modal
