import FormActions from "../../../../components/common/FormActions/FormActions.jsx";
import FormField from "../../../../components/common/FormField/FormField.jsx";
import styles from "./MemberForms.module.css";


/**
 * PositionForm
 *
 * Description:
 * - Renderizar el formulario de posiciones.
 */
function PositionForm({
    selectedPosition,
    companyId,
    name,
    code,
    description,
    isSaving,
    isDeleting,
    onNameChange,
    onCodeChange,
    onDescriptionChange,
    onSubmit,
    onReset,
    onDeactivate,
}) {
    return (
        <section className={styles.formPanel}>
            <div className={styles.panelHeader}>
                <div>
                    <h2>
                        {selectedPosition ? "Editar posición" : "Nueva posición"}
                    </h2>

                    <p>
                        {selectedPosition
                            ? "Modifique la información de la posición seleccionada."
                            : "Complete la información para registrar una nueva posición."}
                    </p>
                </div>
            </div>

            <form className={styles.entityForm} onSubmit={onSubmit}>
                <FormField
                    id="position-name"
                    label="Nombre"
                    value={name}
                    onChange={onNameChange}
                    placeholder="Nombre de la posición"
                    disabled={!companyId || isSaving || isDeleting}
                    required
                />

                <FormField
                    id="position-code"
                    label="Código"
                    value={code}
                    onChange={onCodeChange}
                    placeholder="Código de la posición"
                    disabled={!companyId || isSaving || isDeleting}
                    required
                />

                <FormField
                    id="position-description"
                    label="Descripción"
                    type="textarea"
                    value={description}
                    onChange={onDescriptionChange}
                    placeholder="Descripción opcional"
                    disabled={!companyId || isSaving || isDeleting}
                />

                <FormActions
                    destructive={
                        selectedPosition ? (
                            <button
                                className={styles.dangerButton}
                                type="button"
                                onClick={onDeactivate}
                                disabled={isSaving || isDeleting}
                            >
                                {isDeleting ? "Desactivando..." : "Desactivar"}
                            </button>
                        ) : null
                    }
                >
                    {selectedPosition && (
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
                        disabled={!companyId || isSaving || isDeleting}
                    >
                        {isSaving
                            ? "Guardando..."
                            : selectedPosition
                                ? "Guardar cambios"
                                : "Crear posición"}
                    </button>
                </FormActions>
            </form>
        </section>
    );
}

export default PositionForm;