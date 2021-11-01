import React from "react";
import styles from "../../Style/Global.module.scss";

function Boxe({ children, title, className = null, onClick = null }) {
    return (
        <div className={`${styles.full_width} ${styles.radius_5} ${styles.second_background} ${styles.column} ${styles.align_start} ${styles.padding_15} ${className && className}`} onClick={onClick}>
            <div className={`${styles.row} ${styles.no_wrap} ${styles.space_between}`}>
                <p style={{
                    fontWeight: 700,
                    fontSize: "18px"
                }}>{title} :</p>
            </div>
            <div className={`${styles.row} ${styles.no_wrap}`}>  
                { children }
            </div>
        </div>
    )
}

export default Boxe;