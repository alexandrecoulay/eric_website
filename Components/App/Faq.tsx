import React from "react";

import styles from "../../Style/Global.module.scss";

/**
 * La FAQ affichée.
 *
 * Elle double le bloc FAQPage en JSON-LD, et ce n'est pas une redondance : Google
 * exige que des données structurées correspondent à un contenu réellement visible
 * sur la page, sous peine d'action manuelle. Les deux doivent donc rester
 * synchronisés — ils lisent la même source, Service/faq.ts.
 */
function Faq({ title, entries }: { title: string; entries: { question: string; answer: string }[] }) {
    return (
        <section className={`${styles.column} ${styles.align_start} ${styles.full_width}`} style={{ gap: "20px", paddingTop: "40px" }}>
            <h2>{title}</h2>
            <div className={`${styles.column} ${styles.align_start} ${styles.full_width}`} style={{ gap: "10px" }}>
                {
                    entries.map((entry, index) => (
                        <details
                            key={index}
                            className={`${styles.full_width} ${styles.radius_5} ${styles.second_background} ${styles.padding_15}`}>
                            <summary className={`${styles.pointer} ${styles.text_left}`} style={{ fontWeight: 700, fontSize: "18px" }}>
                                {entry.question}
                            </summary>
                            <p className={`${styles.text_left}`} style={{ paddingTop: "10px" }}>
                                {entry.answer}
                            </p>
                        </details>
                    ))
                }
            </div>
        </section>
    );
}

export default Faq;
