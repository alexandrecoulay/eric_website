import createMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

/**
 * Next 16 a renommé la convention `middleware` en `proxy`. next-intl expose
 * toujours sa fabrique sous l'ancien nom, d'où l'import ci-dessous.
 */
export default createMiddleware(routing);

/**
 * Le matcher est volontairement explicite plutôt qu'attrape-tout.
 *
 * Seules les pages publiques sont passées en App Router et localisées par URL. Le
 * tableau de bord, les callbacks OAuth2, le leaderboard et /emojis sont restés en
 * Pages Router : les inclure ici ferait préfixer leurs URLs par une locale et
 * casserait les redirections d'authentification.
 */
export const config = {
    matcher: [
        "/",
        // :path* et non le chemin nu : sans lui, /help passe mais /help/level ne
        // serait pas réécrit vers /en/help/level et répondrait 404.
        "/help/:path*",
        "/guides/:path*",
        "/vs/:path*",
        "/privacy",
        "/bot/invite",
        "/(fr|en)/:path*"
    ]
};
