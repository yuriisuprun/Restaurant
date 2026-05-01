# Restaurant (Full Stack)

This repo was refactored from a plain Java CLI-style project into a full-stack app:

- `backend/`: Spring Boot REST API (Java 21, Maven)
- `frontend/`: React + TypeScript (Vite) + TailwindCSS
- `src/`: legacy Java sources (kept for reference)

## Run (Dev)

### Backend

```powershell
cd backend
./mvnw.cmd spring-boot:run
```

API:
- `http://localhost:8080/api/employees`
- Swagger UI: `http://localhost:8080/swagger-ui/index.html`

### Frontend

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

The Vite dev server proxies `/api` to the backend (`http://localhost:8080`).

## Architecture Notes

- Backend is layered: controller (API) -> service (business rules) -> repository (persistence).
- Contracts are DTO-based; entities are not exposed directly.
- Role-specific rules are validated server-side to prevent invalid combinations (e.g. bartender has cocktails, not experience).
- Frontend is feature-foldered (`features/staff/*`) and uses React Query for caching + invalidation.

