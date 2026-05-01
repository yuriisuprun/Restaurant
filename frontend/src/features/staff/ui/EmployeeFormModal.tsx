import { useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { EmployeeCreateRequest, EmployeeRole } from '../../../shared/api/types'
import { HttpError } from '../../../shared/api/http'
import { Button } from '../../../shared/ui/Button'
import { Input } from '../../../shared/ui/Input'
import { Modal } from '../../../shared/ui/Modal'
import { Select } from '../../../shared/ui/Select'
import { createEmployee, listRoles } from '../api/employees'

type FieldErrors = Partial<Record<keyof EmployeeCreateRequest, string>>

function roleSpecificField(role: EmployeeRole) {
  switch (role) {
    case 'WAITER':
    case 'COOK':
      return { key: 'experience' as const, label: 'Experience (years)' }
    case 'DISHWASHER':
      return { key: 'workHours' as const, label: 'Work hours (per week)' }
    case 'BARTENDER':
      return { key: 'quantityMadeCocktails' as const, label: 'Cocktails made' }
  }
}

export function EmployeeFormModal(props: {
  open: boolean
  onClose: () => void
}) {
  const qc = useQueryClient()
  const rolesQ = useQuery({
    queryKey: ['roles'],
    queryFn: listRoles,
    staleTime: 60 * 60 * 1000,
  })

  const [form, setForm] = useState<EmployeeCreateRequest>({
    role: 'WAITER',
    firstName: '',
    lastName: '',
    middleName: '',
    experience: 1,
  })
  const [generalError, setGeneralError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const roleField = useMemo(() => roleSpecificField(form.role), [form.role])

  const mutation = useMutation({
    mutationFn: createEmployee,
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['employees'] })
      setGeneralError(null)
      setFieldErrors({})
      props.onClose()
    },
    onError: (err) => {
      setGeneralError('Could not create employee.')
      setFieldErrors({})
      if (err instanceof HttpError && err.details) {
        setGeneralError(err.details.message)
        const next: FieldErrors = {}
        for (const v of err.details.fieldViolations ?? []) {
          const k = v.field as keyof EmployeeCreateRequest
          next[k] = v.message
        }
        setFieldErrors(next)
      }
    },
  })

  function set<K extends keyof EmployeeCreateRequest>(
    key: K,
    value: EmployeeCreateRequest[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onRoleChange(next: EmployeeRole) {
    // Keep only the relevant role-specific field to prevent "dirty" payloads.
    setForm((prev) => {
      const base: EmployeeCreateRequest = {
        role: next,
        firstName: prev.firstName,
        lastName: prev.lastName,
        middleName: prev.middleName ?? '',
      }
      const rf = roleSpecificField(next)
      return { ...base, [rf.key]: 1 } as EmployeeCreateRequest
    })
    setGeneralError(null)
    setFieldErrors({})
  }

  const canSubmit =
    form.firstName.trim().length > 0 && form.lastName.trim().length > 0

  return (
    <Modal title="Add staff member" open={props.open} onClose={props.onClose}>
      <form
        className="grid gap-4"
        onSubmit={(e) => {
          e.preventDefault()
          setGeneralError(null)
          setFieldErrors({})
          mutation.mutate({
            ...form,
            firstName: form.firstName.trim(),
            lastName: form.lastName.trim(),
            middleName: form.middleName?.trim() || null,
          })
        }}
      >
        {generalError ? (
          <div className="rounded-2xl border border-[#9a2b1e]/25 bg-[#9a2b1e]/5 px-4 py-3 text-sm text-[#6b1d14]">
            {generalError}
          </div>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-3">
          <Input
            label="First name"
            value={form.firstName}
            onChange={(e) => set('firstName', e.target.value)}
            error={fieldErrors.firstName}
            placeholder="e.g. Luca"
          />
          <Input
            label="Last name"
            value={form.lastName}
            onChange={(e) => set('lastName', e.target.value)}
            error={fieldErrors.lastName}
            placeholder="e.g. Bianchi"
          />
          <Input
            label="Middle name"
            value={form.middleName ?? ''}
            onChange={(e) => set('middleName', e.target.value)}
            error={fieldErrors.middleName}
            placeholder="Optional"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Select
            label="Role"
            value={form.role}
            onChange={(e) => onRoleChange(e.target.value as EmployeeRole)}
            disabled={rolesQ.isLoading}
            error={fieldErrors.role}
          >
            {(rolesQ.data ?? ['WAITER', 'COOK', 'BARTENDER', 'DISHWASHER']).map(
              (r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ),
            )}
          </Select>

          <Input
            label={roleField.label}
            type="number"
            min={0}
            value={
              String((form as Record<string, unknown>)[roleField.key] ?? '')
            }
            onChange={(e) => {
              const v = e.target.value === '' ? null : Number(e.target.value)
              set(roleField.key, (Number.isFinite(v) ? v : null) as any)
            }}
            error={fieldErrors[roleField.key]}
          />
        </div>

        <div className="flex items-center justify-end gap-2 pt-2">
          <Button
            type="button"
            variant="secondary"
            onClick={props.onClose}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={!canSubmit || mutation.isPending}>
            {mutation.isPending ? 'Saving...' : 'Create'}
          </Button>
        </div>
      </form>
    </Modal>
  )
}

