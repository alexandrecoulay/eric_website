import React from 'react';
import Head from 'next/head';

/**
 * Métadonnées des pages restées en Pages Router : tableau de bord, callbacks
 * OAuth2, leaderboard et /emojis.
 *
 * Les pages publiques sont passées en App Router et utilisent la Metadata API
 * (Service/seo.ts). Ce composant ne couvre donc plus que des pages privées ou sans
 * contenu propre, d'où le `noIndex` à true par défaut — cohérent avec les règles
 * de app/robots.ts.
 *
 * Ce qui a été retiré de la version précédente, et pourquoi :
 * - `googlebot: noindex,nofollow` cohabitait avec `robots: index,follow` et
 *   `googlebot: index,follow,nosnippet`. Google retient la directive la plus
 *   restrictive : le site demandait sa propre désindexation, et s'interdisait tout
 *   extrait — donc toute citation en AI Overview ou featured snippet.
 * - Le canonical retombait sur la page d'accueil pour toute page ne passant pas
 *   d'URL, c'est-à-dire toutes. Chaque page se déclarait doublon de l'accueil.
 * - `og:image` pointait vers un .ico de 32 pixels, en URL relative : invalide pour
 *   une carte sociale, qui exige une image absolue d'au moins 1200x630.
 * - Métas sans effet supprimées : dc.*, httpEquiv pragma/cleartype/default-style,
 *   nositelinkssearchbox, copyright, format-detection, et un viewport en double.
 */
function Seo({ children, title, description, url, noIndex = true }) {

    const meta_title = title ?? "Eric — Discord bot";
    const meta_description = description ?? "Eric is a free Discord bot: auto-moderation, levels, AI assistant and Twitch alerts.";
    const site_url = process.env.NEXT_PUBLIC_WEBSITE_URL ?? "https://boteric.fr";
    const meta_url = url ? `${site_url}${url}` : null;
    const meta_image = `${site_url}/og.png`;

    return (
        <Head>
            <title>{meta_title}</title>
            <meta name="description" content={meta_description} />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="icon" href="/assets/favicons/favicon.ico" />

            {/* Une seule directive robots, et un canonical seulement si la page en a un. */}
            <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large"} />
            { meta_url && <link rel="canonical" href={meta_url} /> }

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Eric" />
            <meta property="og:title" content={meta_title} />
            <meta property="og:description" content={meta_description} />
            <meta property="og:image" content={meta_image} />
            { meta_url && <meta property="og:url" content={meta_url} /> }

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta_title} />
            <meta name="twitter:description" content={meta_description} />
            <meta name="twitter:image" content={meta_image} />

            { children }
        </Head>
    )
};

export default Seo;
