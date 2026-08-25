"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import NextLink from "next/link";

import { Link } from "../../i18n/navigation";
import { NavbarElement } from "../Navbar";
import globals from "../../Style/Global.module.scss";
import LocaleSwitcher from "./LocaleSwitcher";
import { oauth2url, baseapiurl, discordcdnurl } from "../../Service/constante";

type SessionUser = { username: string; avatar: string };

/** Mêmes classes que NavbarLink, mais sur le Link localisé de next-intl. */
const nav_class = `${globals.uppercase} ${globals.padding_15} ${globals.row}`;

/**
 * Barre de navigation des pages publiques.
 *
 * Distincte de Views/navbar/Navbar.jsx, restée en Pages Router pour le tableau de
 * bord : celle-ci utilise le Link localisé de next-intl, qui préfixe les liens par
 * la langue courante, là où l'autre écrit des chemins bruts.
 */
function NavBar() {

    const t = useTranslations();
    const [user, setUser] = useState<SessionUser | null>(null);

    useEffect(() => {
        const access_token = localStorage.getItem("access_token");
        if (!access_token) return;

        let cancelled = false;

        (async () => {
            try {
                const request = await fetch(`${baseapiurl}/discord/userinfo/`, {
                    headers: { Authorization: `Bearer ${access_token}` }
                });

                if (request.status !== 200) return localStorage.clear();

                const res = await request.json();
                if (cancelled) return;

                setUser({
                    username: res.username,
                    avatar: `${discordcdnurl}/avatars/${res.id}/${res.avatar}.png`
                });
            } catch {
                // Session invalide ou API injoignable : on reste sur l'état déconnecté.
            }
        })();

        return () => { cancelled = true; };
    }, []);

    const disconnect = () => {
        localStorage.clear();
        setUser(null);
    };

    const right = user
        ? <button type="button" className={nav_class} onClick={disconnect} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>{t("disconnect")} {user.username}<img className="pdp-40 avatar" src={user.avatar} alt="" /></button>
        : <a className={nav_class} href={oauth2url}>{t("login")}</a>;

    return (
        <NavbarElement rightElement={right}>
            <Link className={nav_class} href="/">{t("home")}</Link>
            { /* Le tableau de bord est resté en Pages Router : lien brut, non localisé. */ }
            { user && <NextLink className={nav_class} href="/dashboard">{t("dashboard")}</NextLink> }
            <Link className={nav_class} href="/help">{t("commands")}</Link>
            <Link className={nav_class} href="/bot/invite">{t("invite")}</Link>
            <Link className={nav_class} href="/guides">{t("guides")}</Link>
            <Link className={nav_class} href="/vs">{t("compare")}</Link>
            <Link className={nav_class} href="/privacy">{t("privacy")}</Link>
            <LocaleSwitcher size={22} />
        </NavbarElement>
    );
}

export default NavBar;
