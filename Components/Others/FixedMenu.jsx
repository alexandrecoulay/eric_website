import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

import styles from "../../Style/Global.module.scss";

function FixedMenu({ children, oustiClick }){
    return (
        <div className={`${styles.fixed} ${styles.row} ${styles.justify_center} ${styles.blur_background}`} style={{
            zIndex: 999,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }}>   
            <OutsideClickHandler onOutsideClick={() => oustiClick(false)} >
                <div style={{
                    gap: "10px",
                    width: "400px"
                }} className={`${styles.shadow} ${styles.column} ${styles.radius_8} ${styles.second_background} ${styles.padding_15} ${styles.align_center}`}>
                    { children }
                </div>  
            </OutsideClickHandler>
        </div>
    )
}

export default FixedMenu;