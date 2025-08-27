# shared_types

Shared TypeScript types for both frontend and backend.

Current repo uses this folder directly via TS/Vite path aliases. To convert this folder into a true git submodule backed by a separate repo:

1) Create a new repository for shared types (e.g., github.com/your-org/shared_types).
2) In this repo, remove the existing folder and add the submodule:
   - `git rm -r shared_types`
   - `git submodule add <git-url> shared_types`
   - `git commit -m "Add shared_types as submodule"`
3) In the shared_types repository, keep the same structure:
   - `package.json`, `src/index.ts`, `src/document.ts`, `src/api.ts`
4) Consumers (frontend/backend) should map the module:
   - TypeScript paths: `"shared_types": ["./shared_types/src/index.ts"], "shared_types/*": ["./shared_types/src/*"]`
   - Bundler alias (Vite): `shared_types -> ./shared_types/src`

Notes
- `src/api.ts` contains API schema types (placeholder stubs here). Replace with your generated OpenAPI types in the shared repo.
- `src/document.ts` contains document/package types used by Mediation Prep.
- `src/index.ts` re-exports commonly used types and provides helpful aliases like `ListingResponse`.

