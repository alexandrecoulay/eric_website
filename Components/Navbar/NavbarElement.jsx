import React from "react";
import styles from "../../Style/Global.module.scss";

function NavbarElement({ children, className = null }) {

    return (
        <header className={`${styles.row} ${styles.space_between} ${styles.wrap} ${className && className}`}>
            { children }
        </header>
    )
}

export default NavbarElement;