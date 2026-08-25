import type { MetadataRoute } from "next";

import { routing } from "../i18n/routing";
import { urlFor } from "../Service/seo";
import { docSlugs } from "../Service/docTypes";
import modules from "../Service/modules";
import guides from "../Service/guides";
import competitors from "../Service/competitors";

/**
 * Sitemap généré au build.
 *
 * Il remplace un public/sitemap.xml figé au 6 mars 2023, qui ignorait /privacy et
 * déclarait /dashboard, une page privée. next-sitemap, qui était censé le
 * régénérer, écrivait dans un répertoire jamais servi.
 *
 * Chaque page est déclarée dans les deux langues, chaque entrée portant la grappe
 * hreflang complète : c'est ce qui rend /fr/help éligible aux requêtes françaises
 * au lieu de la laisser dans l'ombre de son équivalent anglais.
 */
interface Entry {
    path: string;
    /**
     * Date écrite à la main, pas la date du build. Déclarer chaque page comme
     * modifiée à chaque déploiement fait dévaluer le champ par les moteurs, qui
     * constatent qu'il ne correspond à aucun changement réel.
     */
    lastModified: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
}

const CONTENT_DATE = "2026-08-25";

const staticPages: Entry[] = [
    { path: "/", lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 1 },
    { path: "/help", lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.9 },
    { path: "/guides", lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.9 },
    { path: "/vs", lastModified: CONTENT_DATE, changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy", lastModified: CONTENT_DATE, changeFrequency: "yearly", priority: 0.3 }
];

/** Une entrée par document d'une collection, sous son chemin de base. */
function collection(
    basePath: string,
    slugs: string[],
    priority: number
): Entry[] {
    return slugs.map(slug => ({
        path: `${basePath}/${slug}`,
        lastModified: CONTENT_DATE,
        changeFrequency: "monthly" as const,
        priority
    }));
}

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: Entry[] = [
        ...staticPages,
        ...collection("/help", docSlugs(modules), 0.8),
        ...collection("/guides", docSlugs(guides), 0.8),
        ...collection("/vs", docSlugs(competitors), 0.7)
    ];

    return entries.flatMap(entry => {
        const languages = Object.fromEntries(
            routing.locales.map(locale => [locale, urlFor(entry.path, locale)])
        );

        return routing.locales.map(locale => ({
            url: urlFor(entry.path, locale),
            lastModified: entry.lastModified,
            changeFrequency: entry.changeFrequency,
            priority: entry.priority,
            alternates: { languages }
        }));
    });
}
