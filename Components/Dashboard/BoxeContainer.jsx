import React from "react";
import styles from "../../Style/Global.module.scss";

function BoxeContainer({ children, title, className = ""}) {

    return (
        <div className={`${styles.column} ${styles.align_start} ${className}`}>
            <div className={`${styles.row} ${styles.space_between} ${styles.full_width}`}>
                <h2>{title}</h2>
            </div>
            <div style={{ gap: "20px" }} className={`${styles.column} ${styles.align_start} ${styles.full_width}`}>
                { children }
            </div>
        </div>
    )
}

export default BoxeContainer;