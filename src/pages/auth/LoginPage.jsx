import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";

import styles from "./LoginPage.module.css";


/**
 * LoginPage
 *
 * Description:
 * - Proporcionar la interfaz de autenticación de CentralChat.
 *
 * Notes:
 * - Los usuarios autenticados son redirigidos a la aplicación.
 * - Los errores de autenticación del backend se muestran dentro del formulario.
 */
function LoginPage() {
    const navigate = useNavigate();
    const { login, isAuthenticated, isLoading } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (isLoading) {
        return (
            <main className={styles.loginPage}>
                <div className={styles.loginLoading}>Cargando CentralChat...</div>
            </main>
        );
    }

    if (isAuthenticated) {
        return <Navigate to="/app" replace />;
    }


    /**
     * handleSubmit
     *
     * Description:
     * - Autenticar al usuario utilizando las credenciales ingresadas.
     *
     * Notes:
     * - Evita envíos duplicados mientras la solicitud está en proceso.
     */
    async function handleSubmit(event) {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        setErrorMessage("");
        setIsSubmitting(true);

        try {
            await login({ username, password });
            navigate("/app", { replace: true });
        } catch (error) {
            setErrorMessage(error.message || "No fue posible iniciar sesión.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className={styles.loginPage}>
            <section className={styles.loginPanel}>
                <div className={styles.loginBrand}>
                    <div className={styles.loginBrandMark}>C</div>

                    <div>
                        <h1>CentralChat</h1>
                        <p>Plataforma de monitoreo de WhatsApp</p>
                    </div>
                </div>

                <div className={styles.loginContent}>
                    <div className={styles.loginHeading}>
                        <h2>Bienvenido</h2>
                        <p>Inicia sesión para continuar a CentralChat.</p>
                    </div>

                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <div className={styles.loginField}>
                            <label htmlFor="username">Usuario</label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                autoComplete="username"
                                placeholder="Ingresa tu usuario"
                                disabled={isSubmitting}
                                required
                                autoFocus
                            />
                        </div>

                        <div className={styles.loginField}>
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                autoComplete="current-password"
                                placeholder="Ingresa tu contraseña"
                                disabled={isSubmitting}
                                required
                            />
                        </div>

                        {errorMessage && (
                            <div className={styles.loginError} role="alert">
                                {errorMessage}
                            </div>
                        )}

                        <button className={styles.loginSubmit} type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
                        </button>
                    </form>
                </div>

                <footer className={styles.loginFooter}>
                    <span>CentralChat</span>
                    <span>Monitoreo seguro de comunicaciones empresariales</span>
                </footer>
            </section>

            <section className={styles.loginVisual}>
                <div className={styles.loginVisualContent}>
                    <span className={styles.loginEyebrow}>Monitoreo centralizado</span>

                    <h2>
                        Mantén las conversaciones de tu empresa visibles,
                        organizadas y bajo control.
                    </h2>

                    <p>
                        CentralChat proporciona un espacio centralizado para monitorear
                        las conversaciones de WhatsApp de toda tu organización.
                    </p>

                    <div className={styles.loginFeatureList}>
                        <div className={styles.loginFeature}>
                            <strong>Tiempo real</strong>
                            <span>Recibe la actividad de las conversaciones en el momento en que ocurre.</span>
                        </div>

                        <div className={styles.loginFeature}>
                            <strong>Controlado</strong>
                            <span>El acceso se mantiene limitado por empresa y permisos de usuario.</span>
                        </div>

                        <div className={styles.loginFeature}>
                            <strong>Auditable</strong>
                            <span>Las acciones importantes de los usuarios mantienen trazabilidad.</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LoginPage;