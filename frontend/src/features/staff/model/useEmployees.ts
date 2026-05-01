import { useQuery } from '@tanstack/react-query'
import type { EmployeeRole } from '../../../shared/api/types'
import { listEmployees } from '../api/employees'

export function useEmployees(params: {
  role?: EmployeeRole
  page: number
  size: number
}) {
  return useQuery({
    queryKey: ['employees', params],
    queryFn: () => listEmployees(params),
  })
}

