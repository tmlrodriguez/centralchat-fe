import { NavLink } from "react-router-dom";

import styles from "./AppLayout.module.css";


function DashboardIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
    );
}


function MonitoringIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
            <circle cx="12" cy="12" r="2.5" />
        </svg>
    );
}


function OrganizationIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
            <path d="M17 9h2a1 1 0 0 1 1 1v11" />
            <path d="M8 7h2" />
            <path d="M8 11h2" />
            <path d="M8 15h2" />
            <path d="M13 7h1" />
            <path d="M13 11h1" />
            <path d="M13 15h1" />
            <path d="M2 21h20" />
        </svg>
    );
}


function MembersIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="9" cy="8" r="3" />
            <path d="M3.5 19c.5-3.2 2.4-5 5.5-5s5 1.8 5.5 5" />
            <circle cx="17" cy="9" r="2.3" />
            <path d="M15.5 14.5c3.1-.4 5.1 1.1 5.5 4.5" />
        </svg>
    );
}


function AccessIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="8" cy="8" r="3" />
            <path d="M2.5 19c.5-3.4 2.4-5.2 5.5-5.2 1.4 0 2.6.4 3.5 1.1" />
            <rect x="13" y="12" width="8" height="7" rx="1.5" />
            <path d="M15 12V10a2 2 0 0 1 4 0v2" />
        </svg>
    );
}


function AuditingIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M5 3h10l4 4v14H5Z" />
            <path d="M15 3v5h4" />
            <path d="M8 12h8" />
            <path d="M8 16h5" />
            <circle cx="16.5" cy="17.5" r="2.5" />
            <path d="m18.3 19.3 2 2" />
        </svg>
    );
}


/**
 * SideBar
 *
 * Description:
 * - Renderizar la navegación principal de CentralChat.
 *
 * Notes:
 * - Las opciones visibles dependen del rol del usuario.
 * - Utiliza iconografía SVG consistente.
 * - Soporta navegación lateral en escritorio y menú móvil.
 */
function SideBar({
    user,
    userName,
    isMobileMenuOpen,
    closeMobileMenu,
    handleLogout,
}) {
    const isAdministrator = user?.role === "ADMINISTRATOR";
    const isMonitor = user?.role === "MONITOR";

    return (
        <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ""}`}>
            <div className={styles.sidebarHeader}>
                <div className={styles.brand}>
                    <div className={styles.brandMark}>
                        C
                    </div>

                    <div className={styles.brandContent}>
                        <span className={styles.brandName}>
                            CentralChat
                        </span>

                        <span className={styles.brandDescription}>
                            Centro de monitoreo
                        </span>
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
                {isMonitor && (
                    <>
                        <span className={styles.navigationTitle}>
                            Principal
                        </span>

                        <NavLink
                            to="/app"
                            end
                            onClick={closeMobileMenu}
                            className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                        >
                            <span className={styles.navigationIcon}>
                                <DashboardIcon />
                            </span>

                            <span>
                                Dashboard
                            </span>
                        </NavLink>

                        <NavLink
                            to="/app/monitoring"
                            onClick={closeMobileMenu}
                            className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                        >
                            <span className={styles.navigationIcon}>
                                <MonitoringIcon />
                            </span>

                            <span>
                                Monitoreo
                            </span>
                        </NavLink>
                    </>
                )}

                {isAdministrator && (
                    <>
                        <span className={styles.navigationTitle}>
                            Administración
                        </span>

                        <NavLink
                            to="/app/administration/organization"
                            onClick={closeMobileMenu}
                            className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                        >
                            <span className={styles.navigationIcon}>
                                <OrganizationIcon />
                            </span>

                            <span>
                                Organización
                            </span>
                        </NavLink>

                        <NavLink
                            to="/app/administration/members"
                            onClick={closeMobileMenu}
                            className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                        >
                            <span className={styles.navigationIcon}>
                                <MembersIcon />
                            </span>

                            <span>
                                Personal
                            </span>
                        </NavLink>

                        <NavLink
                            to="/app/administration/access"
                            onClick={closeMobileMenu}
                            className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                        >
                            <span className={styles.navigationIcon}>
                                <AccessIcon />
                            </span>

                            <span>
                                Usuarios y Accesos
                            </span>
                        </NavLink>

                        <span className={styles.navigationTitle}>
                            Control
                        </span>

                        <NavLink
                            to="/app/auditing"
                            onClick={closeMobileMenu}
                            className={({ isActive }) => `${styles.navigationItem} ${isActive ? styles.navigationItemActive : ""}`}
                        >
                            <span className={styles.navigationIcon}>
                                <AuditingIcon />
                            </span>

                            <span>
                                Auditoría
                            </span>
                        </NavLink>
                    </>
                )}
            </nav>

            <div className={styles.sidebarFooter}>
                <div className={styles.userSummary}>
                    <div className={styles.userAvatar}>
                        {(user?.first_name || user?.username || "U")
                            .charAt(0)
                            .toUpperCase()}
                    </div>

                    <div className={styles.userInformation}>
                        <strong>
                            {userName}
                        </strong>

                        <span>
                            {user?.role || "Usuario"}
                        </span>
                    </div>
                </div>

                <button
                    className={styles.mobileLogoutButton}
                    type="button"
                    onClick={handleLogout}
                >
                    Cerrar sesión
                </button>
            </div>
        </aside>
    );
}

export default SideBar;