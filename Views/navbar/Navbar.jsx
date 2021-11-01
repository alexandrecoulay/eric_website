import React, { useContext } from "react";
import Link from "next/link";

import { oauth2url } from "../../Service/constante";
import { UserContext } from "../../Context/AppContext";
import CreateLink from "../../Components/Text/Link";

function NavBar() {

    const [user, setUser] = useContext(UserContext);

    const disconnect = (e) => {
        e.preventDefault();
        if(typeof window !== "undefined") {
            localStorage.clear();
            setUser(null)
        }
    }

    const addClass = () => {
        if(typeof document !== "undefined") {
            document.getElementById("mobile").classList.contains("visible") ? document.getElementById("mobile").classList.remove("visible") : document.getElementById("mobile").classList.add("visible");
        }
    }

    return(
        <header>
            <nav className="NavBar">
                <div className="header-mobile">
                    <div className="mobile-head">
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
                           <CreateLink href='/'>Home</CreateLink>
                           { user && <CreateLink href="/dashboard">dashboard</CreateLink> }
                           <CreateLink href="/help">commands</CreateLink>
                           <CreateLink href="/stats">Statistics</CreateLink>
                           <CreateLink href="/bot/invite">Invite</CreateLink>
                            {
                                user ? <CreateLink onClick={disconnect} href="/">Disconnect from {user.username}<img className="pdp-40 avatar" src={user.avatar} alt="avatar" /></CreateLink> : <CreateLink href={`${oauth2url}`}>login</CreateLink>
                            }
                        </div>
                    </div>

                </div>
                <div className="header-web visible">
                    <div className="header-links">
                        <CreateLink href='/'>Home</CreateLink>
                        { user && <CreateLink href="/dashboard">dashboard</CreateLink> }
                        <CreateLink href="/help">commands</CreateLink>
                        <CreateLink href="/stats">Statistics</CreateLink>
                        <CreateLink href="/bot/invite">Invite</CreateLink>
                    </div>

                    <div className="login">
                    {
                        user ? <CreateLink onClick={disconnect} href="/">Disconnect from {user.username}<img className="pdp-40 avatar" src={user.avatar} alt="avatar" /></CreateLink> : <CreateLink href={`${oauth2url}`}>login</CreateLink>
                    }
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;