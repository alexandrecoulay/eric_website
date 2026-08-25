import React from "react";

import styles from "../../Style/Global.module.scss";
import type { Doc } from "../../Service/docTypes";

/**
 * Rendu d'un document. Volontairement sémantique — h1, h2, ul, dl — plutôt que
 * des div stylées : c'est la structure du HTML qui permet à un moteur d'extraire
 * une réponse d'une page, et c'est précisément ce qui manquait à l'ancienne page
 * d'aide, dont le contenu venait de clés nommées title_4_10.
 */
function DocArticle({ doc, updatedLabel }: { doc: Doc; updatedLabel: string }) {
    return (
        <article className={`${styles.column} ${styles.align_start} ${styles.full_width}`} style={{ gap: "28px", maxWidth: "820px" }}>
            <header className={`${styles.column} ${styles.align_start} ${styles.full_width}`} style={{ gap: "12px" }}>
                <h1 style={{ margin: 0 }}>{doc.title}</h1>
                {
                    doc.intro.map((paragraph, index) => (
                        <p key={index} className={`${styles.text_left}`} style={{ margin: 0, fontSize: "18px", lineHeight: 1.6 }}>
                            {paragraph}
                        </p>
                    ))
                }
                <p className={`${styles.muted} ${styles.text_left}`} style={{ margin: 0, fontSize: "14px" }}>
                    {updatedLabel} <time dateTime={doc.updated}>{doc.updated}</time>
                </p>
            </header>

            {
                doc.sections.map((section, index) => (
                    <section key={index} className={`${styles.column} ${styles.align_start} ${styles.full_width}`} style={{ gap: "12px" }}>
                        <h2 style={{ margin: 0, fontSize: "24px" }}>{section.heading}</h2>

                        {
                            section.paragraphs?.map((paragraph, i) => (
                                <p key={i} className={`${styles.text_left}`} style={{ margin: 0, lineHeight: 1.7 }}>{paragraph}</p>
                            ))
                        }

                        {
                            section.list && (
                                <ul className={`${styles.text_left} ${styles.full_width}`} style={{ paddingLeft: "20px", margin: 0, lineHeight: 1.7 }}>
                                    { section.list.map((item, i) => <li key={i} style={{ paddingBottom: "6px" }}>{item}</li>) }
                                </ul>
                            )
                        }

                        {
                            section.commands && (
                                <dl className={`${styles.full_width} ${styles.column} ${styles.align_start}`} style={{ gap: "10px", margin: 0 }}>
                                    {
                                        section.commands.map((command, i) => (
                                            <div
                                                key={i}
                                                className={`${styles.full_width} ${styles.radius_5} ${styles.second_background} ${styles.padding_15} ${styles.column} ${styles.align_start}`}
                                                style={{ gap: "6px" }}>
                                                <dt style={{ margin: 0 }}>
                                                    <code style={{ fontSize: "16px", fontWeight: 700 }}>{command.syntax}</code>
                                                </dt>
                                                <dd className={`${styles.text_left}`} style={{ margin: 0, lineHeight: 1.6 }}>
                                                    {command.description}
                                                    {
                                                        command.permission &&
                                                        <span className={`${styles.muted}`} style={{ display: "block", fontSize: "14px", paddingTop: "4px" }}>
                                                            {command.permission}
                                                        </span>
                                                    }
                                                </dd>
                                            </div>
                                        ))
                                    }
                                </dl>
                            )
                        }
                    </section>
                ))
            }
        </article>
    );
}

export default DocArticle;
