import React from "react";
import styles from "../../Style/Global.module.scss";

function NavbarDiv({ children, className = null }) {
    return (
        <div className={`${styles.row} ${className && className}`}>
            { children }
        </div>
    )
}

export default NavbarDiv;