import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";

import { routing, localeFiles, type Locale } from "./routing";

/**
 * Charge les messages depuis public/locales, les mêmes fichiers que ceux servis
 * au client avant la migration — il n'y a donc qu'une source de traduction.
 *
 * L'anglais est fusionné sous la locale demandée : une clé absente du français
 * retombe sur l'anglais au lieu d'afficher son identifiant brut.
 */
export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale: Locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

    const en = (await import(`../public/locales/${localeFiles.en}.json`)).default;
    const messages =
        locale === routing.defaultLocale
            ? en
            : { ...en, ...(await import(`../public/locales/${localeFiles[locale]}.json`)).default };

    return { locale, messages };
});
