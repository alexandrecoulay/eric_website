import { defineRouting } from "next-intl/routing";

/**
 * Les langues deviennent des URLs.
 *
 * Avant cette migration la langue vivait dans le localStorage : une seule URL par
 * page, dont le HTML initial était toujours anglais. Le contenu français n'était
 * donc jamais visible d'un crawler, alors que c'est le marché principal du bot et
 * celui où la concurrence est la plus faible.
 *
 * `localePrefix: "as-needed"` garde l'anglais sur les URLs actuelles (/help) et
 * n'ajoute un préfixe que pour le français (/fr/help). Aucune URL existante ne
 * change, donc aucune redirection à mettre en place.
 */
export const routing = defineRouting({
    locales: ["en", "fr"],
    defaultLocale: "en",
    localePrefix: "as-needed",
    localeDetection: false
});

export type Locale = (typeof routing.locales)[number];

/** Fichier de traduction correspondant à chaque locale, sous public/locales. */
export const localeFiles: Record<Locale, string> = {
    en: "en_UK",
    fr: "fr_FR"
};

/** Valeur attendue par OpenGraph pour og:locale. */
export const ogLocales: Record<Locale, string> = {
    en: "en_GB",
    fr: "fr_FR"
};

/** Préfixe un chemin racine avec la locale, comme le fait le routeur. */
export function localizedPath(locale: string, path: string): string {
    return locale === routing.defaultLocale ? path : `/${locale}${path}`;
}
