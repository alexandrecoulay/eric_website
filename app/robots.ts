import type { MetadataRoute } from "next";

import { site_url } from "../Service/seo";

/**
 * robots.txt.
 *
 * Le fichier statique qu'il remplace tenait en une ligne, « User-agent: * », sans
 * aucune règle ni référence au sitemap : il ne disait rien à personne.
 *
 * Les crawlers d'IA sont nommés et autorisés explicitement. Pour un site dont
 * l'objectif est d'être cité en réponse à « quel bot Discord pour… », bloquer les
 * robots d'entraînement reviendrait à refuser d'exister dans le corpus.
 */
export default function robots(): MetadataRoute.Robots {
    // Pages privées ou sans contenu propre : rien à indexer, et le tableau de bord
    // exige de toute façon une session.
    const disallow = [
        "/dashboard",
        "/dashboard/",
        "/callback/",
        "/leaderboard/",
        "/emojis",
        "/api/",
        "/_next/"
    ];

    const aiBots = [
        "GPTBot",           // OpenAI — entraînement
        "OAI-SearchBot",    // OpenAI — recherche, source directe des citations
        "ChatGPT-User",     // OpenAI — consultation en temps réel pendant une conversation
        "ClaudeBot",        // Anthropic — entraînement
        "Claude-SearchBot", // Anthropic — recherche
        "PerplexityBot",    // Perplexity
        "Google-Extended",  // Google — Gemini et AI Overviews
        "CCBot",            // Common Crawl, réutilisé par de nombreux modèles
        "cohere-ai"
    ];

    return {
        rules: [
            { userAgent: "*", allow: "/", disallow },
            ...aiBots.map(userAgent => ({ userAgent, allow: "/", disallow })),
            // Robots d'analyse SEO : ils consomment du crawl sans rien apporter.
            { userAgent: "AhrefsBot", disallow: ["/"] },
            { userAgent: "SemrushBot", disallow: ["/"] },
            { userAgent: "MJ12bot", disallow: ["/"] }
        ],
        host: "boteric.fr",
        sitemap: `${site_url}/sitemap.xml`
    };
}
