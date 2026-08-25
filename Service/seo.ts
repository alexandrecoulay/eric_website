import type { Metadata } from "next";

import { routing, ogLocales, type Locale } from "../i18n/routing";

export const site_url = process.env.NEXT_PUBLIC_WEBSITE_URL ?? "https://boteric.fr";

export const site_name = "Eric";

/**
 * Image de partage, générée à la volée par app/og.png. Un .ico de 32 pixels était
 * déclaré ici : les réseaux sociaux et les moteurs l'ignorent, il faut un PNG d'au
 * moins 1200x630 en URL absolue.
 */
export const default_og_image = `${site_url}/og.png`;

export const support_server = "https://discord.gg/p3Sj432";

export const contact_email = "contact@trenderapp.com";

/** URL d'un chemin dans une locale : la locale par défaut n'est pas préfixée. */
export function urlFor(path: string, locale: string): string {
    const clean = path === "/" ? "" : path;
    return locale === routing.defaultLocale ? `${site_url}${clean}` : `${site_url}/${locale}${clean}`;
}

interface PageMetadataParams {
    locale: Locale;
    /** Chemin racine, sans préfixe de locale. "/" pour l'accueil. */
    path: string;
    title: string;
    description: string;
    keywords?: string;
    noIndex?: boolean;
    image?: string;
}

/**
 * Métadonnées complètes d'une page, canonical et hreflang compris.
 *
 * Deux erreurs de l'ancien composant Seo.jsx sont corrigées ici :
 *
 * 1. Le canonical retombait sur la page d'accueil dès qu'une page ne passait pas
 *    d'URL — ce qui était le cas de toutes. Chaque page se déclarait donc comme un
 *    doublon de l'accueil et s'excluait de l'index. Le canonical est maintenant
 *    calculé depuis le chemin réel, dans la locale courante.
 *
 * 2. Trois directives robots contradictoires cohabitaient, dont un
 *    `googlebot: noindex,nofollow` et un `nosnippet`. Google retient la plus
 *    restrictive de chaque directive : le site demandait littéralement sa propre
 *    désindexation et s'interdisait tout extrait, donc toute citation. Une seule
 *    directive est émise désormais.
 *
 * Chaque page est auto-canonique dans sa langue et déclare la grappe hreflang
 * complète, ce qui permet à /fr/help de ressortir sur les requêtes françaises au
 * lieu de pointer vers son jumeau anglais.
 */
export function pageMetadata({
    locale,
    path,
    title,
    description,
    keywords,
    noIndex = false,
    image = default_og_image
}: PageMetadataParams): Metadata {
    const canonical = urlFor(path, locale);

    const languages = Object.fromEntries(
        routing.locales.map(loc => [loc, urlFor(path, loc)])
    ) as Record<string, string>;
    languages["x-default"] = urlFor(path, routing.defaultLocale);

    return {
        metadataBase: new URL(site_url),
        title,
        description,
        keywords,
        alternates: { canonical, languages },
        robots: noIndex
            ? { index: false, follow: true }
            : {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    "max-snippet": -1,
                    "max-image-preview": "large",
                    "max-video-preview": -1
                }
            },
        openGraph: {
            type: "website",
            url: canonical,
            siteName: site_name,
            title,
            description,
            locale: ogLocales[locale],
            alternateLocale: routing.locales.filter(l => l !== locale).map(l => ogLocales[l]),
            images: [{ url: image, width: 1200, height: 630, alt: title }]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image]
        }
    };
}
