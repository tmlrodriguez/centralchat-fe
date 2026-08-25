import { Navigate, Route, Routes } from "react-router-dom";
/**
 * AppRoutes
 *
 * Description:
 * - Define the primary client-side routing structure for the CentralChat frontend.
 * - Redirect the application root to the login route.
 * - Provide the initial login and authenticated application entry routes.
 * - Redirect unknown routes back to the login screen.
 *
 * Notes:
 * - Route protection is not implemented yet.
 * - The current route elements are temporary placeholders and will be replaced by dedicated page components.
 * - Authentication state must eventually determine whether users may access protected application routes.
 */
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<h1>CentralChat Login</h1>} />
            <Route path="/app" element={<h1>CentralChat</h1>} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}

export default AppRoutes;