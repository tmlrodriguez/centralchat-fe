# CentralChat Frontend Coding Guidelines

These guidelines define the basic coding standards for the CentralChat frontend project.

## 1. Keep Code Simple

- Prefer simple and readable solutions.
- Avoid unnecessary abstraction.
- Do not split code across multiple files unless there is a clear reason.
- Keep functions focused on one responsibility.
- Avoid deeply nested conditions when possible.

## 2. Naming

Use clear and descriptive names.

Examples:

```javascript
const currentUser = null;
const isLoading = false;

function getCurrentUser() {}
function createWhatsAppSocket() {}
```

- Components: `PascalCase`
- Functions and variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE` when they are true constants
- Files containing React components: `PascalCase.jsx`
- Utility and service files: `camelCase.js`

## 3. Function Documentation

Functions should include a short documentation comment.

The documentation should contain only:

- Function name
- Description
- Notes

Keep it brief and focused on what the function does and any important behavior another developer should know.

Example:

```javascript
/**
 * login
 *
 * Description:
 * - Authenticate a CentralChat user using the supplied credentials.
 *
 * Notes:
 * - Authentication state is managed outside this service.
 */
export function login(credentials) {
    return apiRequest("/access/login/", {
        method: "POST",
        body: JSON.stringify(credentials),
    });
}

Do not use `DOCSTRING` labels in frontend code.

## 4. Comments

- Comment only when the reason behind the code is not obvious.
- Do not explain every line.
- Avoid large documentation blocks for simple functions.
- Keep comments synchronized with the code.

Good:

```javascript
// Clear the local session after the backend invalidates the token.
localStorage.removeItem("centralchat_token");
```

Avoid:

```javascript
// Get the token from local storage.
const token = localStorage.getItem("centralchat_token");
```

## 5. Formatting

Use consistent formatting throughout the project.

```javascript
if (!token) {
    return null;
}

const response = await apiRequest("/access/me/");
```

Avoid unnecessary multiline formatting.

Prefer:

```javascript
const user = await getCurrentUser();
```

Instead of:

```javascript
const user = (
    await getCurrentUser()
);
```

Break lines only when they improve readability.

## 6. React Components

- Keep components focused.
- Move reusable business logic into hooks, services, or utilities.
- Do not place API logic directly inside presentation components when it can be reused.
- Keep JSX readable.
- Use functional components.

Example:

```jsx
function LoginPage() {
    return (
        <main>
            <h1>CentralChat</h1>
        </main>
    );
}

export default LoginPage;
```

## 7. API Services

API services should contain API communication only.

Example:

```javascript
export function getCurrentUser() {
    return apiRequest("/access/me/");
}
```

Authentication state, routing decisions, and UI behavior should remain outside the API service.

## 8. Error Handling

- Do not silently ignore important errors.
- Use clear user-facing messages.
- Let shared infrastructure handle common errors when possible.

Example:

```javascript
if (!response.ok) {
    throw new Error("No fue posible completar la solicitud.");
}
```

## 9. Environment Variables

Never hardcode environment-specific URLs or secrets.

Use Vite environment variables.

```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
```

Frontend environment variables must never contain private credentials or backend secrets.

## 10. Security

- Never log authentication tokens.
- Never expose backend secrets.
- Do not trust frontend validation as a security boundary.
- Backend permissions remain authoritative.
- Store only the minimum information required by the frontend.

## 11. Imports

Keep imports grouped and readable.

```javascript
import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage.jsx";
import { getCurrentUser } from "../services/authService.js";
```

Remove unused imports.

## 12. General Rule

Code should be easy for another developer to understand without excessive documentation.

Prefer:

**simple code + short useful comments**

over:

**complex code + long explanations**
