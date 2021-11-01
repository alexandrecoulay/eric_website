import React, { useState, useEffect } from "react";
import Link from "next/link";

import { apibaseurl, discordimageurl } from "../Service/constante";

import CrownSvg from "../Svg/crown";
import Loader from "../Components/Loader";
import NavBar from "../Components/Navbar";

function DashBoardHome() {

    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        async function getData() {
            
            const access_token = localStorage.getItem("access_token");

            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            };
            
            let response = await fetch(`${apibaseurl}/servers`, requestOptions)
            let res = await response.json();

            setGuilds(res);
        }
        getData();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="main">
                <div className="dashboard-home">
                    <h2>Select a server</h2>
                { 
                    guilds.length < 1 ? <Loader /> :
                    guilds.map((e, index) =>
                        e != null ?
                        <Link key={index} href={`/dashboard/${e.guild_id}`}>
                            <a>
                                <div className="guild-info">
                                    <div className="top-informations">
                                        <img className="pdp-40" src={`${discordimageurl}/icons/${e.guild_id}/${e.icon}.webp`} alt={e.icon}/>
                                        <span className="guild-name">{e.name}</span> 
                                        { e.owner ? <CrownSvg setClass="fa-primary" /> : "" }
                                    </div>
                                    <div className="bottom-informations">
                                        <span>Dashboard</span>
                                    </div>
                                </div> 
                            </a>
                        </Link>: e
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default DashBoardHome;