import { http } from '../../../shared/api/http'
import type {
  ApiPage,
  Employee,
  EmployeeCreateRequest,
  EmployeeRole,
} from '../../../shared/api/types'

export async function listEmployees(params: {
  role?: EmployeeRole
  page?: number
  size?: number
}): Promise<ApiPage<Employee>> {
  const qs = new URLSearchParams()
  if (params.role) qs.set('role', params.role)
  if (params.page != null) qs.set('page', String(params.page))
  if (params.size != null) qs.set('size', String(params.size))
  const s = qs.toString()
  return http<ApiPage<Employee>>(`/api/employees${s ? `?${s}` : ''}`)
}

export async function createEmployee(
  payload: EmployeeCreateRequest,
): Promise<Employee> {
  return http<Employee>('/api/employees', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function deleteEmployee(id: string): Promise<void> {
  return http<void>(`/api/employees/${id}`, { method: 'DELETE' })
}

export async function listRoles(): Promise<EmployeeRole[]> {
  return http<EmployeeRole[]>('/api/roles')
}

