import React, { useState, useEffect, useContext } from "react";
import CreateLink from "../Components/Text/Link";

import { apibaseurl, baseapiurl, discordcdnurl, discordimageurl } from "../Service/constante";

import Svg from "../Components/Svg/Svg";
import Loader from "../Components/Others/Loader";
import NavBar from "../Views/navbar/Navbar";
import { UserContext } from "../Context/AppContext";
import Icon from "../Components/Assets/RoundedIcon";

function DashBoardHome() {

    const [guilds, setGuilds] = useState([]);
    const [user, setUser] = useContext(UserContext)

    useEffect(() => {
        async function getData() {

            if(!user) return;
            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user.access_token}`
                }
            };
            
            let response = await fetch(`${baseapiurl}/servers`, requestOptions)
            let res = await response.json();

            setGuilds(res);
        }
        getData();
    }, [user]);

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
                        <CreateLink key={index} href={`/dashboard/${e.guild_id}`}>
                            <div className="guild-info">
                                <div className="top-informations">
                                    <Icon size={40} src={`${discordcdnurl}/icons/${e.guild_id}/${e.icon}.webp`} />
                                    <span className="guild-name">{e.name}</span> 
                                    { e.owner && <Svg name="crown" size={22} /> }
                                </div>
                                <div className="bottom-informations">
                                    <span>Dashboard</span>
                                </div>
                            </div> 
                        </CreateLink>: e
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default DashBoardHome;