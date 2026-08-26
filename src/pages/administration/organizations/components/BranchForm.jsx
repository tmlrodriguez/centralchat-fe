import FormActions from "../../../../components/common/FormActions/FormActions.jsx";
import FormField from "../../../../components/common/FormField/FormField.jsx";

import styles from "./OrganizationForms.module.css";


/**
 * BranchForm
 *
 * Description:
 * - Renderizar el formulario de creación y edición de sucursales.
 *
 * Notes:
 * - La sucursal permanece asociada a la empresa seleccionada.
 */
function BranchForm({
    selectedBranch,
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
                        {selectedBranch ? "Editar sucursal" : "Nueva sucursal"}
                    </h2>

                    <p>
                        {selectedBranch
                            ? "Modifique la información de la sucursal seleccionada."
                            : "Complete la información para registrar una nueva sucursal."}
                    </p>
                </div>
            </div>

            <form className={styles.entityForm} onSubmit={onSubmit}>
                <FormField
                    id="branch-name"
                    label="Nombre"
                    value={name}
                    onChange={onNameChange}
                    placeholder="Nombre de la sucursal"
                    disabled={!companyId || isSaving || isDeleting}
                    required
                />

                <FormField
                    id="branch-code"
                    label="Código"
                    value={code}
                    onChange={onCodeChange}
                    placeholder="Código de la sucursal"
                    disabled={!companyId || isSaving || isDeleting}
                    required
                />

                <FormField
                    id="branch-description"
                    label="Descripción"
                    type="textarea"
                    value={description}
                    onChange={onDescriptionChange}
                    placeholder="Descripción opcional"
                    disabled={!companyId || isSaving || isDeleting}
                />

                <FormActions
                    destructive={
                        selectedBranch ? (
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
                    {selectedBranch && (
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
                            : selectedBranch
                                ? "Guardar cambios"
                                : "Crear sucursal"}
                    </button>
                </FormActions>
            </form>
        </section>
    );
}

export default BranchForm;