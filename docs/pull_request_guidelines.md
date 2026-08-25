# CentralChat Frontend Pull Request Guidelines

To ensure clarity, transparency, maintainability, and consistent review practices, all pull requests in the CentralChat frontend project must follow this structure.

---

## Pull Request Structure

### 1. Pull Request Title

Format:

`Clear and concise imperative description of the purpose of the PR`

Rules:

- Use imperative mood.
- Keep the title under 70 characters.
- Describe the primary feature or architectural change.
- Avoid vague wording.

Examples:

- `Implement frontend authentication flow`
- `Add realtime WhatsApp conversation monitoring`
- `Add administrative company management screens`
- `Refactor API request infrastructure`
- `Add audit history interface`

---

### 2. Modules Affected

List the frontend modules, features, or architectural areas modified.

Example:

- auth
- routing
- api
- application layout

Other possible entries:

- monitoring
- conversations
- messages
- websocket
- templates
- companies
- members
- auditing
- shared components
- global styles

---

### 3. Key Features and Enhancements

Provide a concise technical summary of the work.

Include relevant changes such as:

- New pages.
- New React components.
- New hooks.
- New context providers.
- API integration.
- Route protection.
- Form validation.
- Realtime behavior.
- State synchronization.
- Responsive layout changes.
- Accessibility improvements.
- Error handling.
- Loading states.
- Tests.

Example:

- Added authenticated login workflow
- Added AuthContext for user and token state
- Added protected application routes
- Added centralized authenticated API request handling
- Added logout behavior and session cleanup

---

### 4. How This Improves the Project

Explain the architectural or product benefit.

Examples:

- Establishes a reusable authentication boundary.
- Enables realtime conversation monitoring.
- Reduces duplicated API logic.
- Improves separation between presentation and business integration code.
- Improves consistency across application screens.
- Prepares the frontend for additional monitoring workflows.

---

### 5. Backend/API Dependencies

Document backend dependencies whenever applicable.

Include:

- Endpoint paths consumed.
- Required HTTP methods.
- Authentication expectations.
- WebSocket endpoints.
- Response assumptions.
- Backend fields newly required.
- Any backend feature that must already exist.

Example:

- Requires `POST /api/access/login/`
- Requires `GET /api/access/me/`
- Requires DRF TokenAuthentication
- Requires the WhatsApp number WebSocket endpoint

If there are no backend dependencies, state:

- No backend changes required

---

### 6. UI/UX Impact

Describe visible user-facing changes.

Mention:

- New screens.
- Navigation changes.
- Workflow changes.
- Responsive behavior.
- New loading, error, or empty states.
- Accessibility changes.

Example:

- Adds the first CentralChat login screen
- Redirects authenticated users into the application shell
- Displays validation and backend authentication errors inline

---

### 7. Testing Performed

State how the changes were validated.

Examples:

- Verified login with valid credentials
- Verified rejected login with invalid credentials
- Verified token restoration after page reload
- Verified logout clears the authenticated session
- Verified protected routes redirect unauthenticated users
- Verified Chrome and Safari behavior

---

### 8. Additional Notes

Mention:

- Known limitations.
- Follow-up work.
- Environment requirements.
- Architecture decisions.
- Browser limitations.
- Intentionally deferred functionality.

Example:

- Authentication currently uses persistent DRF tokens
- WebSocket reconnection will be implemented in a subsequent PR
- No UI component framework has been introduced

---

## Full Template

```markdown
**Title:**
One-line imperative description

**Modules Affected:**
- Module 1
- Module 2

**Key Features and Enhancements:**
- Feature or change
- Feature or change
- Feature or change

**How This Improves the Project:**
Explain the purpose and architectural or user benefit.

**Backend/API Dependencies:**
- Dependency or endpoint
- Dependency or endpoint

**UI/UX Impact:**
- User-visible change
- User-visible change

**Testing Performed:**
- Test performed
- Test performed

**Additional Notes:**
- Optional implementation considerations
- Known limitations or deferred work
```

---

## Example Pull Request

```markdown
**Title:**
Implement frontend authentication flow

**Modules Affected:**
- auth
- routing
- api
- layout

**Key Features and Enhancements:**
- Added LoginPage with credential validation
- Added AuthContext for authenticated user state
- Added centralized authenticated REST client
- Added protected route behavior
- Added logout and session restoration

**How This Improves the Project:**
Establishes the frontend authentication architecture required by all protected CentralChat functionality and provides a reusable authentication boundary for future monitoring and administrative screens.

**Backend/API Dependencies:**
- Requires the CentralChat login endpoint
- Requires the current-user endpoint
- Requires DRF TokenAuthentication

**UI/UX Impact:**
- Adds the CentralChat login screen
- Redirects authenticated users into the main application
- Redirects unauthenticated users away from protected routes
- Displays controlled authentication errors

**Testing Performed:**
- Verified successful login
- Verified invalid credentials
- Verified reload with an existing token
- Verified logout
- Verified protected route redirects

**Additional Notes:**
- No global state library is introduced
- Authentication state is maintained through React Context
```

---

## Pull Request Guidelines

- Keep each PR focused on one coherent feature or architectural change.
- Do not include unrelated cleanup unless required by the change.
- Keep the PR description synchronized with the final implementation.
- Document backend dependencies explicitly.
- Include testing performed before requesting review.
- Mention known limitations and intentionally deferred work.
- Do not merge temporary debugging code, credentials, secrets, or local configuration.
- Update project documentation when architecture or development conventions change.
