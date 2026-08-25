import React, { useCallback, useRef } from "react";

import styles from "./Menu.module.scss";
import useOutsideClick from "../../hooks/useOutsideClick";

interface FixedMenuProps {
    children: React.ReactNode;
    /** Appelée avec false pour fermer le menu. Nom conservé, appelants existants. */
    oustideClick: (open: boolean) => void;
    width?: number;
    text_left?: boolean;
}

function FixedMenu({ children, oustideClick, width = 400, text_left = false }: FixedMenuProps){

    const ref = useRef<HTMLDivElement>(null);

    const close = useCallback(() => oustideClick(false), [oustideClick]);

    useOutsideClick(ref, close);

    return (
        <div className={styles["fixed-menu"]}>
            <div ref={ref}>
                <div style={{
                    gap: "10px",
                    width: `${width}px`,
                    maxWidth: `100vw`
                }} className={`${styles.box} ${text_left ?? styles.align_center}`}>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default FixedMenu;
