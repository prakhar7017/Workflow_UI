import { useEffect } from 'react'
import { Button } from './Button'

export function SlideOverModal({
  open,
  onClose,
  title,
  subtitle,
  children,
  primaryActionLabel = 'Create',
  onPrimaryAction,
  primaryDisabled = false,
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-[visibility] duration-300 ${open ? 'visible' : 'invisible'}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-gray-900/40 transition-opacity duration-300 ease-out ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-label="Close panel"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="slide-over-title"
        className={`relative flex h-full w-full max-w-[420px] flex-col rounded-tl-2xl rounded-bl-2xl bg-white shadow-[-12px_0_40px_-12px_rgba(15,23,42,0.25)] transition-transform duration-300 ease-out sm:max-w-md ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <header className="flex shrink-0 flex-col gap-1 border-b border-gray-100 px-6 pb-4 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id="slide-over-title"
                className="text-lg font-semibold tracking-tight text-gray-900"
              >
                {title}
              </h2>
              {subtitle ? (
                <p className="mt-1 max-w-sm text-sm leading-relaxed text-gray-500">
                  {subtitle}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">{children}</div>

        <footer className="flex shrink-0 justify-end border-t border-gray-100 px-6 py-4">
          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={onPrimaryAction}
            disabled={primaryDisabled}
          >
            {primaryActionLabel}
          </Button>
        </footer>
      </aside>
    </div>
  )
}
