import { Link, NavLink, Outlet } from 'react-router-dom'

function NavItem(props: { to: string; label: string }) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        [
          'rounded-full px-3 py-1.5 text-sm font-medium transition',
          isActive
            ? 'bg-[rgba(25,21,19,0.08)] text-[color:var(--ink)]'
            : 'text-[color:var(--muted)] hover:bg-[rgba(25,21,19,0.06)] hover:text-[color:var(--ink)]',
        ].join(' ')
      }
    >
      {props.label}
    </NavLink>
  )
}

export function AppShell() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-10 border-b border-[color:var(--stroke)] bg-[rgba(251,246,234,0.75)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight text-[color:var(--ink)]">
              Restaurant
            </span>
            <span className="text-xs font-medium text-[color:var(--muted)]">
              Staff console
            </span>
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-[color:var(--accent)] opacity-0 transition group-hover:opacity-100" />
          </Link>
          <nav className="flex items-center gap-2">
            <NavItem to="/staff" label="Staff" />
            <a
              href="/api/swagger-ui/index.html"
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[color:var(--muted)] hover:bg-[rgba(25,21,19,0.06)] hover:text-[color:var(--ink)]"
              target="_blank"
              rel="noreferrer"
            >
              API Docs
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-sm text-[color:var(--muted)]">
        <div className="mt-8 border-t border-[color:var(--stroke)] pt-6">
          Backend: Spring Boot, Frontend: React + Tailwind
        </div>
      </footer>
    </div>
  )
}
