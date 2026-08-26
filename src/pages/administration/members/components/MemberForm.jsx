import FormActions from "../../../../components/common/FormActions/FormActions.jsx";
import FormField from "../../../../components/common/FormField/FormField.jsx";
import styles from "./MemberForms.module.css";


/**
 * MemberForm
 *
 * Description:
 * - Renderizar el formulario de miembros.
 */
function MemberForm({
    selectedMember,
    companyId,
    branchId,
    positionId,
    memberCode,
    firstName,
    lastName,
    email,
    notes,
    branches,
    positions,
    isSaving,
    isDeleting,
    isLoadingBranches,
    isLoadingPositions,
    onBranchChange,
    onPositionChange,
    onMemberCodeChange,
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onNotesChange,
    onSubmit,
    onReset,
    onDeactivate,
}) {
    const branchOptions = branches.length > 0
        ? branches.map((branch) => ({
            value: branch.id,
            label: branch.name,
        }))
        : [
            {
                value: "",
                label: "No existen sucursales disponibles",
            },
        ];

    const positionOptions = positions.length > 0
        ? positions.map((position) => ({
            value: position.id,
            label: position.name,
        }))
        : [
            {
                value: "",
                label: "No existen posiciones disponibles",
            },
        ];

    return (
        <section className={styles.formPanel}>
            <div className={styles.panelHeader}>
                <div>
                    <h2>
                        {selectedMember ? "Editar miembro" : "Nuevo miembro"}
                    </h2>

                    <p>
                        {selectedMember
                            ? "Modifique la información del miembro seleccionado."
                            : "Complete la información para registrar un nuevo miembro."}
                    </p>
                </div>
            </div>

            <form className={styles.entityForm} onSubmit={onSubmit}>
                <div className={styles.formGrid}>
                    <FormField
                        id="member-first-name"
                        label="Nombre"
                        value={firstName}
                        onChange={onFirstNameChange}
                        placeholder="Nombre"
                        disabled={!companyId || isSaving || isDeleting}
                        required
                    />

                    <FormField
                        id="member-last-name"
                        label="Apellido"
                        value={lastName}
                        onChange={onLastNameChange}
                        placeholder="Apellido"
                        disabled={!companyId || isSaving || isDeleting}
                        required
                    />
                </div>

                <FormField
                    id="member-code"
                    label="Código de miembro"
                    value={memberCode}
                    onChange={onMemberCodeChange}
                    placeholder="Código único del miembro"
                    disabled={!companyId || isSaving || isDeleting}
                    required
                />

                <FormField
                    id="member-email"
                    label="Correo electrónico"
                    type="email"
                    value={email}
                    onChange={onEmailChange}
                    placeholder="correo@empresa.com"
                    disabled={!companyId || isSaving || isDeleting}
                    required
                />

                <div className={styles.formGrid}>
                    <FormField
                        id="member-branch"
                        label="Sucursal"
                        type="select"
                        value={branchId}
                        onChange={onBranchChange}
                        options={branchOptions}
                        disabled={!companyId || isLoadingBranches || branches.length === 0 || isSaving || isDeleting}
                        required
                    />

                    <FormField
                        id="member-position"
                        label="Posición"
                        type="select"
                        value={positionId}
                        onChange={onPositionChange}
                        options={positionOptions}
                        disabled={!companyId || isLoadingPositions || positions.length === 0 || isSaving || isDeleting}
                        required
                    />
                </div>

                <FormField
                    id="member-notes"
                    label="Notas"
                    type="textarea"
                    value={notes}
                    onChange={onNotesChange}
                    placeholder="Notas opcionales"
                    disabled={!companyId || isSaving || isDeleting}
                />

                <FormActions
                    destructive={
                        selectedMember ? (
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
                    {selectedMember && (
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
                        disabled={
                            !companyId ||
                            !branchId ||
                            !positionId ||
                            isSaving ||
                            isDeleting
                        }
                    >
                        {isSaving
                            ? "Guardando..."
                            : selectedMember
                                ? "Guardar cambios"
                                : "Crear miembro"}
                    </button>
                </FormActions>
            </form>
        </section>
    );
}

export default MemberForm;