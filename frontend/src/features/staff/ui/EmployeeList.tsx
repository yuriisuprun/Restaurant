import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { Employee } from '../../../shared/api/types'
import { Button } from '../../../shared/ui/Button'
import { HttpError } from '../../../shared/api/http'
import { deleteEmployee } from '../api/employees'

function roleDetail(e: Employee) {
  if (e.experience != null) return `Experience: ${e.experience}y`
  if (e.workHours != null) return `Work hours: ${e.workHours}/week`
  if (e.quantityMadeCocktails != null)
    return `Cocktails made: ${e.quantityMadeCocktails}`
  return 'No role details'
}

function fmtInstant(s: string) {
  const d = new Date(s)
  if (Number.isNaN(d.getTime())) return s
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(d)
}

export function EmployeeList(props: { items: Employee[] }) {
  const qc = useQueryClient()
  const mutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['employees'] })
    },
  })

  function onDelete(id: string) {
    if (!confirm('Delete this employee?')) return
    mutation.mutate(id)
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-3xl border border-[color:var(--stroke)] bg-[color:var(--card)] shadow-sm backdrop-blur md:block">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[color:var(--stroke)] bg-white/35">
            <tr>
              <th className="px-5 py-3 font-semibold text-[color:var(--muted)]">
                Name
              </th>
              <th className="px-5 py-3 font-semibold text-[color:var(--muted)]">
                Role
              </th>
              <th className="px-5 py-3 font-semibold text-[color:var(--muted)]">
                Details
              </th>
              <th className="px-5 py-3 font-semibold text-[color:var(--muted)]">
                Updated
              </th>
              <th className="px-5 py-3 text-right font-semibold text-[color:var(--muted)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((e) => (
              <tr
                key={e.id}
                className="border-b border-[color:var(--stroke)] last:border-b-0"
              >
                <td className="px-5 py-4 font-semibold text-[color:var(--ink)]">
                  {e.lastName} {e.firstName}
                  {e.middleName ? (
                    <span className="font-normal text-[color:var(--muted)]">
                      {' '}
                      {e.middleName}
                    </span>
                  ) : null}
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex rounded-full bg-black/5 px-2.5 py-1 text-xs font-semibold">
                    {e.role}
                  </span>
                </td>
                <td className="px-5 py-4 text-[color:var(--muted)]">
                  {roleDetail(e)}
                </td>
                <td className="px-5 py-4 text-[color:var(--muted)]">
                  {fmtInstant(e.updatedAt)}
                </td>
                <td className="px-5 py-4 text-right">
                  <Button
                    variant="secondary"
                    onClick={() => onDelete(e.id)}
                    disabled={mutation.isPending}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 md:hidden">
        {props.items.map((e) => (
          <div
            key={e.id}
            className="rounded-3xl border border-[color:var(--stroke)] bg-[color:var(--card)] p-4 shadow-sm backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-display text-lg font-semibold leading-tight text-[color:var(--ink)]">
                  {e.lastName} {e.firstName}
                </div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">
                  {roleDetail(e)}
                </div>
              </div>
              <span className="inline-flex rounded-full bg-black/5 px-2.5 py-1 text-xs font-semibold">
                {e.role}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs font-medium text-[color:var(--muted)]">
                Updated {fmtInstant(e.updatedAt)}
              </div>
              <Button
                variant="secondary"
                onClick={() => onDelete(e.id)}
                disabled={mutation.isPending}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {mutation.isError ? (
        <div className="mt-3 text-sm text-[#9a2b1e]">
          {mutation.error instanceof HttpError
            ? mutation.error.message
            : 'Delete failed.'}
        </div>
      ) : null}
    </>
  )
}

