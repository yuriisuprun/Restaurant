import { useMemo, useState } from 'react'
import type { EmployeeRole } from '../../shared/api/types'
import { Button } from '../../shared/ui/Button'
import { Select } from '../../shared/ui/Select'
import { useEmployees } from '../../features/staff/model/useEmployees'
import { EmployeeFormModal } from '../../features/staff/ui/EmployeeFormModal'
import { EmployeeList } from '../../features/staff/ui/EmployeeList'
import { HttpError } from '../../shared/api/http'

const ROLE_OPTIONS: Array<{ label: string; value?: EmployeeRole }> = [
  { label: 'All roles' },
  { label: 'Waiters', value: 'WAITER' },
  { label: 'Cooks', value: 'COOK' },
  { label: 'Bartenders', value: 'BARTENDER' },
  { label: 'Dishwashers', value: 'DISHWASHER' },
]

export function StaffPage() {
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState<EmployeeRole | undefined>(undefined)
  const [page, setPage] = useState(0)
  const [size] = useState(10)

  const q = useEmployees({ role, page, size })

  const title = useMemo(() => {
    const found = ROLE_OPTIONS.find((o) => o.value === role)
    return found?.label ?? 'Staff'
  }, [role])

  return (
    <div className="grid gap-6">
      <section className="grid gap-4 rounded-3xl border border-[color:var(--stroke)] bg-[color:var(--card)] p-5 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--ink)]">
              {title}
            </h1>
            <p className="mt-1 text-sm text-[color:var(--muted)]">
              CRUD staff records with role-specific validation on the API.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={() => q.refetch()}>
              Refresh
            </Button>
            <Button onClick={() => setOpen(true)}>Add staff</Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Select
            label="Filter"
            value={role ?? ''}
            onChange={(e) => {
              const next = e.target.value
              setRole(next ? (next as EmployeeRole) : undefined)
              setPage(0)
            }}
          >
            {ROLE_OPTIONS.map((o) => (
              <option key={o.label} value={o.value ?? ''}>
                {o.label}
              </option>
            ))}
          </Select>

          <div className="sm:col-span-2">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">
              Pagination
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="secondary"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={!q.data?.hasPrevious || q.isFetching}
              >
                Prev
              </Button>
              <Button
                variant="secondary"
                onClick={() => setPage((p) => p + 1)}
                disabled={!q.data?.hasNext || q.isFetching}
              >
                Next
              </Button>
              <div className="text-sm text-[color:var(--muted)]">
                Page <span className="font-semibold text-[color:var(--ink)]">{page + 1}</span>{' '}
                of{' '}
                <span className="font-semibold text-[color:var(--ink)]">
                  {q.data?.totalPages ?? 1}
                </span>
                {q.data ? (
                  <>
                    {' '}
                    (
                    <span className="font-semibold text-[color:var(--ink)]">
                      {q.data.totalItems}
                    </span>{' '}
                    total)
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {q.isLoading ? (
        <div className="rounded-3xl border border-[color:var(--stroke)] bg-[color:var(--card)] p-6 text-sm text-[color:var(--muted)] shadow-sm backdrop-blur">
          Loading...
        </div>
      ) : null}

      {q.isError ? (
        <div className="rounded-3xl border border-[#9a2b1e]/25 bg-[#9a2b1e]/5 p-6 text-sm text-[#6b1d14] shadow-sm backdrop-blur">
          {q.error instanceof HttpError ? q.error.message : 'Failed to load.'}
        </div>
      ) : null}

      {q.data ? <EmployeeList items={q.data.items} /> : null}

      <EmployeeFormModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

