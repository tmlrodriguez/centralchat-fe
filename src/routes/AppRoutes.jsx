import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout.jsx";
import ProtectedRoute from "../components/routing/ProtectedRoute.jsx";
import AdministrationPage from "../pages/administration/AdministrationPage.jsx";
import AuditEventsPage from "../pages/auditing/AuditEventsPage.jsx";
import LoginPage from "../pages/auth/LoginPage.jsx";
import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import MonitoringPage from "../pages/monitoring/MonitoringPage.jsx";


/**
 * AppRoutes
 *
 * Description:
 * - Define the main CentralChat application routes.
 *
 * Notes:
 * - Authenticated application routes are protected.
 */
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/app" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/app" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
                <Route index element={<DashboardPage />} />
                <Route path="monitoring" element={<MonitoringPage />} />
                <Route path="administration" element={<AdministrationPage />} />
                <Route path="auditing" element={<AuditEventsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default AppRoutes;