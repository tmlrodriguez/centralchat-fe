# CentralChat Frontend Commit Message Guidelines

To ensure consistency, readability, and clarity across the frontend development team, all commits in the CentralChat frontend project must follow this structured format.

---

## Commit Message Structure

Each commit must include the following sections.

### 1. Commit Title

Format:

`[module] Clear and concise description of the change`

Rules:

- Use lowercase for the module or feature name.
- Use imperative mood such as `add`, `fix`, `implement`, `refactor`, `remove`, or `update`.
- Keep the title under 70 characters.
- Describe one logical change.
- Prefer feature-oriented modules instead of vague generic terms.

Examples:

- `[auth] Implement login screen and token persistence`
- `[monitoring] Add conversation list interface`
- `[whatsapp] Implement realtime WebSocket connection`
- `[routing] Add protected application routes`
- `[ui] Add reusable loading state component`
- `[api] Add centralized REST request client`

---

### 2. Commit Body

List the technical changes using bullet points.

Focus on:

- Components added or changed.
- Hooks added or changed.
- Services added or changed.
- Routes added or changed.
- API integrations added or changed.
- State-management behavior.
- Styling changes.
- Validation behavior.
- Realtime behavior.
- Tests when applicable.

Example:

- Added LoginPage component with username and password fields
- Added authentication service for backend login requests
- Persisted DRF authentication token in browser storage
- Added redirect to authenticated application routes

---

### 3. Notes

Explain why the change was made and how it improves the frontend.

Mention when relevant:

- Architectural decisions.
- Backend dependencies.
- Realtime dependencies.
- Security considerations.
- Known limitations.
- Follow-up work.
- Browser behavior.

Example:

Notes:
Introduces the first authenticated frontend flow and establishes the authentication boundary used by protected CentralChat routes. The implementation currently uses the backend DRF token authentication contract.

---

## Full Template

```text
[module] Short imperative description

- Technical change
- Technical change
- Technical change

Notes:
Explain why the change matters and any important architectural considerations.
```

---

## Example Commit

```text
[auth] Implement frontend authentication flow

- Added LoginPage component and authentication form
- Added login and current-user API service functions
- Added authentication context for user and token state
- Added protected-route handling for authenticated pages
- Added logout support

Notes:
Establishes the frontend authentication boundary and prepares the application for company-scoped monitoring interfaces.
```

---

## Module Naming

Prefer domain or architectural module names such as:

- auth
- routing
- api
- websocket
- monitoring
- conversations
- messages
- templates
- companies
- branches
- members
- auditing
- settings
- layout
- ui
- styles

If multiple modules are affected, separate them with ` + `.

Example:

`[auth + routing] Add protected application navigation`

Avoid broad titles such as:

- `[frontend] Updates`
- `[core] Fix stuff`
- `[ui] Changes`
- `Misc fixes`

---

## Commit Guidelines

- Always commit atomic changes.
- One commit should represent one logical unit of work.
- Do not mix unrelated UI features in one commit.
- Do not mix large formatting refactors with business functionality.
- Do not commit generated build output unless explicitly required.
- Do not commit `.env` files containing local or production configuration.
- Do not commit secrets, access tokens, API credentials, or private URLs.
- Do not commit temporary debugging code.
- Do not commit commented-out obsolete code.
- Update documentation when architecture or behavior changes.
- Use the required format even for small commits.

---

## Good Examples

- `[api] Add centralized authenticated request client`
- `[monitoring] Implement conversation list pagination`
- `[websocket] Handle realtime message-created events`
- `[auditing] Add audit history filtering interface`
- `[styles] Add global frontend design variables`
- `[auth + routing] Protect authenticated application routes`

---

## Bad Examples

- `update stuff`
- `frontend changes`
- `fix`
- `final version`
- `working now`
- `misc`
- `wip`
