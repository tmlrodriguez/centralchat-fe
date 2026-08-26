import styles from "./LoadingState.module.css";


/**
 * LoadingState
 *
 * Description:
 * - Mostrar un estado de carga reutilizable.
 *
 * Notes:
 * - El mensaje puede personalizarse según la operación.
 */
function LoadingState({ message = "Cargando..." }) {
    return (
        <div className={styles.loadingState}>
            <div className={styles.spinner}></div>

            <span>
                {message}
            </span>
        </div>
    );
}

export default LoadingState;