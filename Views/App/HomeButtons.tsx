"use client";

import React from "react";
import { useTranslations } from "next-intl";

import NextLink from "next/link";

import { Link } from "../../i18n/navigation";
import { oauth2url } from "../../Service/constante";
import useIsConnected from "../../hooks/useIsConnected";

/**
 * Les trois boutons de la section d'accueil. Isolés dans un composant client
 * parce qu'ils dépendent de la présence d'un jeton en localStorage ; le reste de
 * la page reste rendu sur le serveur, et donc lisible par un crawler.
 */
function HomeButtons() {

    const t = useTranslations();
    const connected = useIsConnected();

    return (
        <div className="HeroButtons">
            <div className="HeroButtonWrapper">
                {
                    connected
                        ? <NextLink className="btn_index" href="/dashboard">{t("go_dashboard")}</NextLink>
                        : <a className="btn_index" href={oauth2url}>{t("connect")}</a>
                }
                <Link className="btn_index" href="/bot/invite">{t("add_to_server")}</Link>
                <a className="btn_index" href="#fonctionalities">{t("browse_fonctionalities")}</a>
            </div>
        </div>
    );
}

export default HomeButtons;
