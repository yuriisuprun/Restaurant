import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Variant = 'primary' | 'secondary' | 'danger'

export function Button(
  props: PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
  >,
) {
  const { className, variant = 'primary', ...rest } = props

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60'
  const variants: Record<Variant, string> = {
    primary:
      'bg-[color:var(--accent)] text-white shadow-sm hover:brightness-95 active:brightness-90',
    secondary:
      'bg-[rgba(25,21,19,0.06)] text-[color:var(--ink)] hover:bg-[rgba(25,21,19,0.1)]',
    danger:
      'bg-[#9a2b1e] text-white shadow-sm hover:brightness-95 active:brightness-90',
  }

  return (
    <button className={[base, variants[variant], className].join(' ')} {...rest}>
      {props.children}
    </button>
  )
}

