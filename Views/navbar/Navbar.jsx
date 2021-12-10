import React, { useContext } from "react";
import useTranslation from 'next-translate/useTranslation'
import Router, { useRouter } from 'next/router'


import styles from "../../Style/Global.module.scss";

import { oauth2url, websitebaseurl } from "../../Service/constante";
import { UserContext } from "../../Context/AppContext";
import CreateLink from "../../Components/Text/Link";
import NavbarElement from "../../Components/Navbar/NavbarElement";
import NavbarDiv from "../../Components/Navbar/NavbarDiv";
import NavbarLink from "../../Components/Navbar/NavbarLink";

function NavBar() {

    const [user, setUser] = useContext(UserContext);
    const router = useRouter();

    const pathname = router.asPath;

    const { t, lang } = useTranslation()

    const disconnect = (e) => {
        e.preventDefault();
        if(typeof window !== "undefined") {
            localStorage.clear();
            setUser(null)
        }
    }

    return(
        <NavbarElement rightElement={user ? <NavbarLink onClick={disconnect} href="/">{t("common:disconnect")} {user.username}<img className="pdp-40 avatar" src={user.avatar} alt="avatar" /></NavbarLink> : <NavbarLink href={`${oauth2url}`}>{t("common:login")}</NavbarLink>}>
                <NavbarLink href='/'>{t("common:home")}</NavbarLink>
                { user && <NavbarLink href="/dashboard">{t("common:dashboard")}</NavbarLink> }
                <NavbarLink href="/help">{t("common:commands")}</NavbarLink>
                <NavbarLink href="/emojis">{t("common:emotes")}</NavbarLink>
                <NavbarLink href="/bot/invite">{t("common:invite")}</NavbarLink>
                <a className={`${styles.uppercase} ${styles.padding_15}`} onClick={() => router.push(`${websitebaseurl}/${pathname}`, undefined, { locale: lang === "fr" ? "en" : "fr" })}>{t("common:change_language")}</a>
        </NavbarElement>
    );
}

export default NavBar;