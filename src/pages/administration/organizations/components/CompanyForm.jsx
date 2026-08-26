import FormActions from "../../../../components/common/FormActions/FormActions.jsx";
import FormField from "../../../../components/common/FormField/FormField.jsx";

import styles from "./OrganizationForms.module.css";


/**
 * CompanyForm
 *
 * Description:
 * - Renderizar el formulario de creación y edición de empresas.
 *
 * Notes:
 * - La página controla el estado y las operaciones.
 */
function CompanyForm({
    selectedCompany,
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
                        {selectedCompany ? "Editar empresa" : "Nueva empresa"}
                    </h2>

                    <p>
                        {selectedCompany
                            ? "Modifique la información de la empresa seleccionada."
                            : "Complete la información para registrar una nueva empresa."}
                    </p>
                </div>
            </div>

            <form className={styles.entityForm} onSubmit={onSubmit}>
                <FormField
                    id="company-name"
                    label="Nombre"
                    value={name}
                    onChange={onNameChange}
                    placeholder="Nombre de la empresa"
                    disabled={isSaving || isDeleting}
                    required
                />

                <FormField
                    id="company-code"
                    label="Código"
                    value={code}
                    onChange={onCodeChange}
                    placeholder="Código único"
                    disabled={isSaving || isDeleting}
                    required
                />

                <FormField
                    id="company-description"
                    label="Descripción"
                    type="textarea"
                    value={description}
                    onChange={onDescriptionChange}
                    placeholder="Descripción opcional"
                    disabled={isSaving || isDeleting}
                />

                <FormActions
                    destructive={
                        selectedCompany ? (
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
                    {selectedCompany && (
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
                        disabled={isSaving || isDeleting}
                    >
                        {isSaving
                            ? "Guardando..."
                            : selectedCompany
                                ? "Guardar cambios"
                                : "Crear empresa"}
                    </button>
                </FormActions>
            </form>
        </section>
    );
}

export default CompanyForm;