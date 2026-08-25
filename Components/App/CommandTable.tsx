import React from "react";

import styles from "../../Style/Doc.module.scss";
import { Link } from "../../i18n/navigation";
import type { CommandEntry } from "../../Service/docTypes";

/**
 * Référence plate de toutes les commandes.
 *
 * Dérivée des pages par module plutôt que saisie séparément : l'ancienne liste
 * était une copie indépendante et avait fini par documenter une commande retirée
 * du bot. Ici, ajouter une commande à un module la fait apparaître ici aussi.
 *
 * Groupée par module, avec un lien vers chaque page : la table donne la syntaxe
 * et la permission, la page donne le contexte.
 */
function CommandTable({
    commands,
    labels
}: {
    commands: CommandEntry[];
    labels: { command: string; description: string; permission: string; none: string };
}) {
    // Ordre des modules préservé, une entrée par module ayant au moins une commande.
    const groups: { slug: string; title: string; commands: CommandEntry[] }[] = [];

    for (const command of commands) {
        const last = groups[groups.length - 1];
        if (last && last.slug === command.moduleSlug) last.commands.push(command);
        else groups.push({ slug: command.moduleSlug, title: command.moduleTitle, commands: [command] });
    }

    return (
        <div className={styles.tableGroups}>
            {/* Raccourcis vers chaque groupe, comme sur l'ancienne page d'aide :
                la table est longue, et on y vient le plus souvent pour une
                famille de commandes precise. */}
            <nav className={styles.anchors}>
                {
                    groups.map(group => (
                        <a key={group.slug} href={`#${group.slug}`}>{group.title}</a>
                    ))
                }
            </nav>

            {
                groups.map(group => (
                    <div key={group.slug} id={group.slug} className={styles.tableGroup}>
                        <h3>
                            <Link href={`/help/${group.slug}`}>{group.title}</Link>
                        </h3>

                        {/* Le conteneur défile horizontalement sur mobile : une table
                            de trois colonnes ne se plie pas sous 400 px de large. */}
                        <div className={styles.tableScroll}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th scope="col">{labels.command}</th>
                                        <th scope="col">{labels.description}</th>
                                        <th scope="col">{labels.permission}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        group.commands.map((command, index) => (
                                            <tr key={index}>
                                                <td><code className={styles.syntax}>{command.syntax}</code></td>
                                                <td>{command.description}</td>
                                                <td className={styles.permissionCell}>
                                                    {command.permission?.replace(/^[^:]*:\s*/, "") ?? labels.none}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CommandTable;
