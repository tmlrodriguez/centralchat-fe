import { Navigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";


/**
 * ProtectedRoute
 *
 * Description:
 * - Restringir rutas según autenticación y roles permitidos.
 *
 * Notes:
 * - Los usuarios sin el rol requerido son enviados a su sección correspondiente.
 */
function ProtectedRoute({ children, allowedRoles = [] }) {
    const { user, isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
        if (user?.role === "ADMINISTRATOR") {
            return <Navigate to="/app/administration/organization" replace />;
        }

        if (user?.role === "MONITOR") {
            return <Navigate to="/app" replace />;
        }

        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;