/**
 * Structure commune aux pages de contenu : documentation des modules, guides et
 * comparaisons.
 *
 * Le contenu est de la donnée, pas du JSX, pour trois raisons : il est traduit en
 * bloc et non clé par clé, le même objet alimente à la fois la page HTML et le
 * llms.txt, et une relecture éditoriale se fait dans un seul fichier plutôt que
 * dispersée dans des composants.
 */

export interface CommandDoc {
    /** Syntaxe telle qu'elle se tape, préfixe compris. <requis> et {optionnel}. */
    syntax: string;
    description: string;
    /** Permission Discord exigée de l'auteur, si le bot en vérifie une. */
    permission?: string;
}

export interface DocSection {
    heading: string;
    paragraphs?: string[];
    list?: string[];
    commands?: CommandDoc[];
}

export interface Doc {
    slug: string;
    title: string;
    /** Titre de l'onglet et des métadonnées, souvent plus explicite que `title`. */
    metaTitle: string;
    description: string;
    keywords: string;
    /** Chapô : les premières phrases, celles qu'un moteur cite en priorité. */
    intro: string[];
    sections: DocSection[];
    faq?: { question: string; answer: string }[];
    /** Date de dernière révision du contenu, au format ISO. */
    updated: string;
}

export type DocsByLocale = Record<string, Doc[]>;

/** Retrouve un document par son slug, avec repli sur l'anglais. */
export function findDoc(docs: DocsByLocale, locale: string, slug: string): Doc | undefined {
    return (docs[locale] ?? docs.en).find(doc => doc.slug === slug);
}

/** Slugs disponibles, identiques dans toutes les langues pour garder une grappe hreflang simple. */
export function docSlugs(docs: DocsByLocale): string[] {
    return docs.en.map(doc => doc.slug);
}

/** Une commande, rattachée au module qui la documente. */
export interface CommandEntry extends CommandDoc {
    moduleSlug: string;
    moduleTitle: string;
}

/**
 * Toutes les commandes d'un ensemble de documents, à plat.
 *
 * Sert la table de référence de /help. Elle est dérivée des mêmes données que les
 * pages par module, et non saisie une seconde fois : l'ancienne liste plate était
 * une copie indépendante, et avait fini par documenter une commande `ms` retirée
 * du bot depuis longtemps.
 */
export function allCommands(docs: DocsByLocale, locale: string): CommandEntry[] {
    return (docs[locale] ?? docs.en).flatMap(doc =>
        doc.sections.flatMap(section =>
            (section.commands ?? []).map(command => ({
                ...command,
                moduleSlug: doc.slug,
                moduleTitle: doc.title
            }))
        )
    );
}
