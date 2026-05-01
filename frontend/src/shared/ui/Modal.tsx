import type { PropsWithChildren } from 'react'

export function Modal(
  props: PropsWithChildren<{
    title: string
    open: boolean
    onClose: () => void
  }>,
) {
  if (!props.open) return null

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4"
      onMouseDown={props.onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-xl rounded-3xl border border-[color:var(--stroke)] bg-[rgba(255,255,255,0.85)] p-5 shadow-xl backdrop-blur"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-display text-xl font-semibold tracking-tight text-[color:var(--ink)]">
              {props.title}
            </div>
            <div className="mt-1 text-sm text-[color:var(--muted)]">
              Fields change based on role.
            </div>
          </div>
          <button
            className="rounded-full px-3 py-1 text-sm font-semibold text-[color:var(--muted)] hover:bg-black/5 hover:text-[color:var(--ink)]"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
        <div className="mt-5">{props.children}</div>
      </div>
    </div>
  )
}

