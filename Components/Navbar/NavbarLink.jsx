import React from "react";
import styles from "../../Style/Global.module.scss";
import CreateLink from "../Text/Link";

function NavbarLink({ children, text, href, className = null, onClick = null }) {

    return (
        <CreateLink onClick={onClick} href={href} className={`${styles.uppercase} ${className && className}`}>
            { children ?? text }
        </CreateLink>
        
    )
}

export default NavbarLink;