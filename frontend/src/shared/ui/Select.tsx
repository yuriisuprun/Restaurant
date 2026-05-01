import type { SelectHTMLAttributes } from 'react'

export function Select(
  props: SelectHTMLAttributes<HTMLSelectElement> & {
    label: string
    error?: string
  },
) {
  const { label, error, className, children, ...rest } = props
  return (
    <label className="block">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">
        {label}
      </div>
      <select
        className={[
          'w-full rounded-xl border bg-white/70 px-3 py-2 text-sm text-[color:var(--ink)] shadow-sm outline-none',
          error
            ? 'border-[#9a2b1e]/50 ring-2 ring-[#9a2b1e]/15'
            : 'border-[color:var(--stroke)] focus:ring-2 focus:ring-[color:var(--accent)]/20',
          className,
        ].join(' ')}
        {...rest}
      >
        {children}
      </select>
      {error ? (
        <div className="mt-1 text-xs font-medium text-[#9a2b1e]">{error}</div>
      ) : null}
    </label>
  )
}

