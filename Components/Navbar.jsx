import React, { useEffect } from "react";
import Link from "next/link";

import { apibaseurl } from "../Service/constante";
import Seo from "./Seo";

function NavBar() {

    if(typeof window !== "undefined") {
        var access_token = localStorage.getItem("access_token");
        var user = JSON.parse(localStorage.getItem('user')) || [];
    }

    const disconnect = (e) => {
        e.preventDefault();
        if(typeof window !== "undefined") {
            localStorage.clear();
            window.location.reload();
        }
    }

    useEffect(() => {
        async function getData() {
            const access_token = localStorage.getItem("access_token");
            const request = localStorage.getItem('request');

            if (access_token && !request) {
                const requestOptions = {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                };
    
                const request = await fetch(`${apibaseurl}/userinfo/`, requestOptions);
                const res = await request.json();

                let items = {
                    avatar: "https://cdn.discordapp.com/avatars/"+res.id+"/"+res.avatar+".png",
                    id: res.id,
                    username: res.username+res.discriminator
                }

                localStorage.setItem('user', JSON.stringify(items))
                localStorage.setItem('request', true);
            }
        }
        getData()
    }, [])

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
                           <Link href='/'><a>Home</a></Link>
                           <Link href="/premium"><a>premium</a></Link>
                           <Link href="/dashboard"><a>dashboard</a></Link>
                           <Link href="/help"><a>commands</a></Link>
                           <Link href="/stats"><a>Statistics</a></Link>
                            {
                                access_token ? <Link href="/"><a onClick={disconnect}>Disconnect from {user.username}<img className="pdp-40 avatar" src={user.avatar} alt="avatar" /></a></Link> : <Link href="https://discord.com/api/oauth2/authorize?client_id=474924489545875456&redirect_uri=https://api.boteric.fr/api/callback&response_type=code&scope=identify%20guilds"><a>login</a></Link>
                            }
                        </div>
                    </div>

                </div>
                <div className="header-web visible">
                    <div className="header-links">
                       <Link href='/'><a>Home</a></Link>
                       <Link href="/premium"><a>premium</a></Link>
                       <Link href="/dashboard"><a>dashboard</a></Link>
                       <Link href="/help"><a>commands</a></Link>
                       <Link href="/stats"><a>Statistics</a></Link>
                    </div>

                    <div className="login">
                    {
                        access_token ? <Link href="/" onClick={disconnect}><a onClick={disconnect}>Disconnect from {user.username}<img className="pdp-40 avatar" src={user.avatar} alt="avatar" /></a></Link> : <Link href="https://discord.com/api/oauth2/authorize?client_id=474924489545875456&redirect_uri=https://api.boteric.fr/api/callback&response_type=code&scope=identify%20guilds"><a>login</a></Link>
                    }
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;