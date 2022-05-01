import React, { useContext } from "react";

import { oauth2url } from "../../Service/constante";
import { UserContext } from "../../Context/AppContext";
import { NavbarLink, NavbarElement } from "../../Components/Navbar";
import { useTranslation } from "../../Context/Localization";
import { ChangeLanguages } from "../../Components/Menu";

function NavBar() {

    const {user, setUser} = useContext(UserContext);

    const { t } = useTranslation()

    const disconnect = (e) => {
        e.preventDefault();
        if(typeof window !== "undefined") {
            localStorage.clear();
            setUser(null)
        }
    }

    return(
        <NavbarElement rightElement={user ? <NavbarLink onClick={disconnect} href="/">{t("disconnect")} {user.username}<img className="pdp-40 avatar" src={user.avatar} alt="avatar" /></NavbarLink> : <NavbarLink href={`${oauth2url}`}>{t("login")}</NavbarLink>}>
            <NavbarLink href='/'>{t("home")}</NavbarLink>
            { user && <NavbarLink href="/dashboard">{t("dashboard")}</NavbarLink> }
            <NavbarLink href="/help">{t("commands")}</NavbarLink>
            <NavbarLink href="/bot/invite">{t("invite")}</NavbarLink>
            <ChangeLanguages size={22} />
        </NavbarElement>
    );
}

export default NavBar;