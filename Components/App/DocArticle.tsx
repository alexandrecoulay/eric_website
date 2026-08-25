import React from "react";

import styles from "../../Style/Doc.module.scss";
import type { Doc } from "../../Service/docTypes";

/**
 * Rendu d'un document.
 *
 * Le chapô est un <div> et non un <header> : la feuille globale pose
 * `header { height: 80px }` pour la barre de navigation, et un header d'article
 * s'y écrasait, son contenu débordant sur la section suivante.
 *
 * La structure reste sémantique — h1, h2, ul, dl — parce que c'est elle qui
 * permet à un moteur d'extraire une réponse de la page.
 */
function DocArticle({ doc, updatedLabel }: { doc: Doc; updatedLabel: string }) {
    return (
        <article className={styles.prose}>
            <div className={styles.head}>
                <h1>{doc.title}</h1>
                { doc.intro.map((paragraph, index) => <p key={index} className={styles.lead}>{paragraph}</p>) }
                <p className={styles.meta}>
                    {updatedLabel} <time dateTime={doc.updated}>{doc.updated}</time>
                </p>
            </div>

            {
                doc.sections.map((section, index) => (
                    <section key={index} className={styles.section}>
                        <h2>{section.heading}</h2>

                        { section.paragraphs?.map((paragraph, i) => <p key={i}>{paragraph}</p>) }

                        {
                            section.list && (
                                <ul>
                                    { section.list.map((item, i) => <li key={i}>{item}</li>) }
                                </ul>
                            )
                        }

                        {
                            section.commands && (
                                <dl className={styles.commands}>
                                    {
                                        section.commands.map((command, i) => (
                                            <div key={i} className={styles.command}>
                                                <dt><code className={styles.syntax}>{command.syntax}</code></dt>
                                                <dd>
                                                    {command.description}
                                                    { command.permission && <span className={styles.permission}>{command.permission}</span> }
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
