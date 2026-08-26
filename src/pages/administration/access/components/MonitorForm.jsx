import FormActions from "../../../../components/common/FormActions/FormActions.jsx";
import FormField from "../../../../components/common/FormField/FormField.jsx";

import styles from "./AccessForms.module.css";


/**
 * MonitorForm
 *
 * Description:
 * - Renderizar el formulario de creación y edición de monitores.
 *
 * Notes:
 * - La contraseña solo se solicita durante la creación.
 */
function MonitorForm({
    selectedMonitor,
    username,
    email,
    firstName,
    lastName,
    password,
    isSaving,
    isDeleting,
    isLoadingDetail,
    onUsernameChange,
    onEmailChange,
    onFirstNameChange,
    onLastNameChange,
    onPasswordChange,
    onSubmit,
    onReset,
    onDeactivate,
}) {
    return (
        <section className={styles.formPanel}>
            <div className={styles.panelHeader}>
                <div>
                    <h2>
                        {selectedMonitor ? "Editar monitor" : "Nuevo monitor"}
                    </h2>

                    <p>
                        {selectedMonitor
                            ? "Modifique la información del monitor seleccionado."
                            : "Complete la información para registrar un nuevo monitor."}
                    </p>
                </div>
            </div>

            <form className={styles.entityForm} onSubmit={onSubmit}>
                <FormField
                    id="monitor-first-name"
                    label="Nombre"
                    value={firstName}
                    onChange={onFirstNameChange}
                    placeholder="Nombre"
                    disabled={isSaving || isDeleting || isLoadingDetail}
                />

                <FormField
                    id="monitor-last-name"
                    label="Apellido"
                    value={lastName}
                    onChange={onLastNameChange}
                    placeholder="Apellido"
                    disabled={isSaving || isDeleting || isLoadingDetail}
                />

                <FormField
                    id="monitor-username"
                    label="Usuario"
                    value={username}
                    onChange={onUsernameChange}
                    placeholder="Nombre de usuario"
                    disabled={isSaving || isDeleting || isLoadingDetail}
                    autoComplete="off"
                    required
                />

                <FormField
                    id="monitor-email"
                    label="Correo electrónico"
                    type="email"
                    value={email}
                    onChange={onEmailChange}
                    placeholder="correo@empresa.com"
                    disabled={isSaving || isDeleting || isLoadingDetail}
                    autoComplete="off"
                />

                {!selectedMonitor && (
                    <FormField
                        id="monitor-password"
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={onPasswordChange}
                        placeholder="Contraseña inicial"
                        disabled={isSaving || isDeleting}
                        autoComplete="new-password"
                        required
                    />
                )}

                <FormActions
                    destructive={
                        selectedMonitor ? (
                            <button
                                className={styles.dangerButton}
                                type="button"
                                onClick={onDeactivate}
                                disabled={isSaving || isDeleting || isLoadingDetail}
                            >
                                {isDeleting ? "Desactivando..." : "Desactivar"}
                            </button>
                        ) : null
                    }
                >
                    {selectedMonitor && (
                        <button
                            className={styles.secondaryButton}
                            type="button"
                            onClick={onReset}
                            disabled={isSaving || isDeleting}
                        >
                            Cancelar
                        </button>
                    )}

                    <button
                        className={styles.primaryButton}
                        type="submit"
                        disabled={isSaving || isDeleting || isLoadingDetail}
                    >
                        {isSaving
                            ? "Guardando..."
                            : selectedMonitor
                                ? "Guardar cambios"
                                : "Crear monitor"}
                    </button>
                </FormActions>
            </form>
        </section>
    );
}

export default MonitorForm;