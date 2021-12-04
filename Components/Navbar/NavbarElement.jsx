import React from "react";
import styles from "../../Style/Global.module.scss";
import NavbarDiv from "./NavbarDiv";

function NavbarElement({ children, className = "", rightElement }) {

    const addClass = () => {
        if(typeof document !== "undefined") {
            document.getElementById("mobile").classList.contains("visible") ? document.getElementById("mobile").classList.remove("visible") : document.getElementById("mobile").classList.add("visible");
        }
    }

    return (
        <header className={`${styles.row} ${styles.space_between} ${styles.wrap} ${styles.full_width} ${className && className}`}>
            <div className={`header-mobile ${styles.full_width} ${styles.space_between}`}>
                <div className={`mobile-head ${styles.full_width} ${styles.space_between}`}>
                    <h2 className="mobile-title">Eric</h2>
                    <div className="mobile-hamburger" onClick={addClass}>
                        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 20" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="20" y2="18"></line>
                        </svg>
                    </div>
                </div>
                <div className="mobile-container" id="mobile">
                    <div className="NavBar-mobile-links">                     
                        { children }
                        { rightElement }
                    </div>
                </div>
            </div>
            <div className={`header-web visible ${styles.full_width}`}>
                    <NavbarDiv>   
                        { children }
                    </NavbarDiv>
                    <NavbarDiv>
                        { rightElement }
                    </NavbarDiv>
            </div>
        </header>
    )
}

export default NavbarElement;