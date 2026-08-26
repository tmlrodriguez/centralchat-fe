import styles from "./FormField.module.css";


/**
 * FormField
 *
 * Description:
 * - Renderizar campos de formulario con estilo consistente.
 *
 * Notes:
 * - Soporta input, textarea y select.
 */
function FormField({
    id,
    label,
    type = "text",
    value,
    onChange,
    placeholder = "",
    disabled = false,
    required = false,
    autoComplete,
    rows = 5,
    options = [],
}) {
    return (
        <div className={styles.formField}>
            <label htmlFor={id}>
                {label}
            </label>

            {type === "textarea" && (
                <textarea
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    rows={rows}
                />
            )}

            {type === "select" && (
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                >
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            )}

            {type !== "textarea" && type !== "select" && (
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    autoComplete={autoComplete}
                />
            )}
        </div>
    );
}

export default FormField;