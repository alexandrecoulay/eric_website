import React from "react";
import styles from "../../Style/Global.module.scss";
import { CreateLink } from "../Text";

function NavbarLink({ children, text, href, className = null, onClick = null }) {

    return (
        <CreateLink onClick={onClick} href={href} className={`${styles.uppercase} ${styles.padding_15} ${styles.row} ${className && className}`}>
            { children ?? text }
        </CreateLink>
        
    )
}

export default NavbarLink;