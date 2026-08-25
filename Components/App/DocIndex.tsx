import React from "react";

import styles from "../../Style/Doc.module.scss";
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
        <div className={styles.cards}>
            {
                docs.map(doc => (
                    <Link key={doc.slug} href={`${basePath}/${doc.slug}`} className={styles.card}>
                        <strong>{doc.title}</strong>
                        <span>{doc.description}</span>
                    </Link>
                ))
            }
        </div>
    );
}

export default DocIndex;
