import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import styles from "./AppLayout.module.css";

/**
 * AppLayout
 *
 * Description:
 * - Proporcionar la estructura principal de la aplicación autenticada.
 *
 * Notes:
 * - Renderiza navegación lateral en escritorio.
 * - Renderiza un menú deslizante en dispositivos móviles.
 */

function AppLayout() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const userName = [user?.first_name, user?.last_name].filter(Boolean).join(" ") || user?.username;

    async function handleLogout() {
        setIsMobileMenuOpen(false);
        await logout();
        navigate("/login", { replace: true });
    }


    function toggleMobileMenu() {
        setIsMobileMenuOpen((currentValue) => !currentValue);
    }

    function closeMobileMenu() {
        setIsMobileMenuOpen(false);
    }

    return (
        <div className={styles.appLayout}>
            <header className={styles.mobileHeader}>
                <button
                    className={styles.mobileMenuButton}
                    type="button"
                    onClick={toggleMobileMenu}
                    aria-label="Abrir menú"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={styles.mobileBrand}>
                    <div className={styles.mobileBrandMark}>C</div>
                    <span>CentralChat</span>
                </div>
            </header>

            {isMobileMenuOpen && (
                <button
                    className={styles.mobileOverlay}
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={closeMobileMenu}
                />
            )}

            <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ""}`}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.brand}>
                        <div className={styles.brandMark}>C</div>

                        <div className={styles.brandContent}>
                            <span className={styles.brandName}>CentralChat</span>
                            <span className={styles.brandDescription}>Centro de monitoreo</span>
                        </div>
                    </div>

                    <button
                        className={styles.mobileCloseButton}
                        type="button"
                        onClick={closeMobileMenu}
                        aria-label="Cerrar menú"
                    >
                        ×
                    </button>
                </div>

                <nav className={styles.navigation}>
                    <span className={styles.navigationTitle}>Principal</span>

                    <NavLink
                        to="/app"
                        end
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                    >
                        <span className={styles.navigationIcon}>▦</span>
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink
                        to="/app/monitoring"
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                    >
                        <span className={styles.navigationIcon}>◉</span>
                        <span>Monitoreo</span>
                    </NavLink>

                    <span className={styles.navigationTitle}>Gestión</span>

                    <NavLink
                        to="/app/administration"
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                    >
                        <span className={styles.navigationIcon}>⚙</span>
                        <span>Administración</span>
                    </NavLink>

                    <NavLink
                        to="/app/auditing"
                        onClick={closeMobileMenu}
                        className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                    >
                        <span className={styles.navigationIcon}>⌕</span>
                        <span>Auditoría</span>
                    </NavLink>
                </nav>

                <div className={styles.sidebarFooter}>
                    <div className={styles.userSummary}>
                        <div className={styles.userAvatar}>
                            {(user?.first_name || user?.username || "U").charAt(0).toUpperCase()}
                        </div>

                        <div className={styles.userInformation}>
                            <strong>{userName}</strong>
                            <span>{user?.role || "Usuario"}</span>
                        </div>
                    </div>

                    <button className={styles.mobileLogoutButton} type="button" onClick={handleLogout}>
                        Cerrar sesión
                    </button>
                </div>
            </aside>

            <div className={styles.mainArea}>
                <header className={styles.topbar}>
                    <span className={styles.topbarApplication}>CentralChat</span>

                    <div className={styles.topbarActions}>
                        <div className={styles.topbarUser}>
                            <span className={styles.topbarUserName}>{userName}</span>
                        </div>

                        <button className={styles.logoutButton} type="button" onClick={handleLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                </header>

                <main className={styles.content}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AppLayout;