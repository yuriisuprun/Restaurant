import type { ApiError } from './types'

export class HttpError extends Error {
  status: number
  details?: ApiError

  constructor(message: string, status: number, details?: ApiError) {
    super(message)
    this.name = 'HttpError'
    this.status = status
    this.details = details
  }
}

const API_BASE = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? ''

export async function http<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  })

  if (res.ok) {
    if (res.status === 204) {
      return undefined as T
    }
    return (await res.json()) as T
  }

  const contentType = res.headers.get('content-type') ?? ''
  if (contentType.includes('application/json')) {
    const body = (await res.json()) as ApiError
    throw new HttpError(body.message ?? 'Request failed', res.status, body)
  }

  const text = await res.text()
  throw new HttpError(text || 'Request failed', res.status)
}

