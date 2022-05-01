import React, { useState, useEffect } from "react";
import { baseapiurl, discordcdnurl, inviteboturl } from "../../Service/constante";
import { Loader } from "../../Components/Others";
import Seo from "../../Components/Seo";
import NavBar from "../navbar/Navbar";
import commandContext from "./DashboardContext";
import { useContext } from "react";
import { UserContext } from "../../Context/AppContext";
import DashBoardNav from "./Components/DashboardNav";

function DashBoardContainer({ guild_id, children }) {
    
    const [info, setInfo] = useState({ access: false });
    const [commands, setCommands] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {

        async function getData() {
            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user?.access_token}`
                }
            };
            
            const request = await fetch(`${baseapiurl}/servers/${guild_id}`, requestOptions);
            const res = await request.json();

            if(request.status === 400) {
                if(res.redirect) return window.open(inviteboturl);
                return;
            }
            
            setCommands(res.to_send.commands)
            setInfo(res);
        }
        getData();
    }, [guild_id]);

    return (
        <>
            <NavBar />
            <Seo /> 
            <div className="main">
            {
                info.access ? 
                    <div className="dashboard">
                        <DashBoardNav guild_id={guild_id} guild={{icon: `${discordcdnurl}/icons/${guild_id}/${info.to_send.guild.icon}.webp?size=128`, name: info.to_send.guild.name }} />
                        <div className="dashboard-view">
                            <commandContext.Provider value={[commands, setCommands]}>
                                { children }
                            </commandContext.Provider>
                        </div>
                    </div>
                : <Loader />
            }
            </div>
        </>
    )
}

export default DashBoardContainer;