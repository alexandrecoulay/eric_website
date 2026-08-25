import React from "react";

import styles from "../../Style/Global.module.scss";
import { Link } from "../../i18n/navigation";
import type { Doc } from "../../Service/docTypes";

/**
 * Sommaire d'un ensemble de documents.
 *
 * Chaque entrée porte le titre et la description réelle de sa page cible plutôt
 * qu'un libellé générique : c'est ce qui donne au sommaire une valeur propre pour
 * un moteur, et à un lecteur de quoi choisir sans ouvrir chaque lien.
 */
function DocIndex({ docs, basePath }: { docs: Doc[]; basePath: string }) {
    return (
        <div className={`${styles.column} ${styles.align_start} ${styles.full_width}`} style={{ gap: "10px" }}>
            {
                docs.map(doc => (
                    <Link
                        key={doc.slug}
                        href={`${basePath}/${doc.slug}`}
                        className={`${styles.full_width} ${styles.radius_5} ${styles.second_background} ${styles.padding_15} ${styles.column} ${styles.align_start} ${styles.hover}`}>
                        <span className={`${styles.text_left}`} style={{ fontWeight: 700, fontSize: "18px" }}>{doc.title}</span>
                        <span className={`${styles.text_left} ${styles.muted}`} style={{ lineHeight: 1.6 }}>{doc.description}</span>
                    </Link>
                ))
            }
        </div>
    );
}

export default DocIndex;
