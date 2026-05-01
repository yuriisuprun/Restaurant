export type ApiFieldViolation = { field: string; message: string }

export type ApiError = {
  timestamp: string
  status: number
  error: string
  message: string
  path: string
  fieldViolations: ApiFieldViolation[]
}

export type ApiPage<T> = {
  items: T[]
  totalItems: number
  page: number
  size: number
  totalPages: number
  hasNext: boolean
  hasPrevious: boolean
}

export type EmployeeRole = 'WAITER' | 'COOK' | 'BARTENDER' | 'DISHWASHER'

export type Employee = {
  id: string
  role: EmployeeRole
  firstName: string
  lastName: string
  middleName: string | null
  experience: number | null
  workHours: number | null
  quantityMadeCocktails: number | null
  createdAt: string
  updatedAt: string
}

export type EmployeeCreateRequest = {
  role: EmployeeRole
  firstName: string
  lastName: string
  middleName?: string | null
  experience?: number | null
  workHours?: number | null
  quantityMadeCocktails?: number | null
}

