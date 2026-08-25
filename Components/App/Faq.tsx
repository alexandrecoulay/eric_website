import React from "react";

import styles from "../../Style/Doc.module.scss";

/**
 * La FAQ affichée.
 *
 * Elle double le bloc FAQPage en JSON-LD, et ce n'est pas une redondance : Google
 * exige que des données structurées correspondent à un contenu réellement visible
 * sur la page, sous peine d'action manuelle. Les deux lisent la même source,
 * Service/faq.ts et les documents, et doivent le rester.
 */
function Faq({ title, entries }: { title: string; entries: { question: string; answer: string }[] }) {
    return (
        <section className={styles.faq}>
            <h2>{title}</h2>
            {
                entries.map((entry, index) => (
                    <details key={index} className={styles.question}>
                        <summary>{entry.question}</summary>
                        <p>{entry.answer}</p>
                    </details>
                ))
            }
        </section>
    );
}

export default Faq;
