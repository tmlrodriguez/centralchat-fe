import styles from "./SectionTabs.module.css";


/**
 * SectionTabs
 *
 * Description:
 * - Mostrar navegación entre secciones internas de una página.
 *
 * Notes:
 * - Cada sección debe incluir value y label.
 */
function SectionTabs({ sections, activeSection, onChange }) {
    return (
        <div className={styles.sectionTabs}>
            {sections.map((section) => (
                <button
                    key={section.value}
                    className={`${styles.sectionTab} ${
                        activeSection === section.value
                            ? styles.sectionTabActive
                            : ""
                    }`}
                    type="button"
                    onClick={() => onChange(section.value)}
                    disabled={section.disabled}
                >
                    {section.label}
                </button>
            ))}
        </div>
    );
}

export default SectionTabs;