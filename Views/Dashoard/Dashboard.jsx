import React, { useState, useEffect } from "react";

import Loader from "../../Components/Others/Loader";
import DashBoardNav from "./Components/DashboardNav";
import DashboardActivation from "./Components/DashboardActivation";

import DashboardSettings from "./Settings";
import DashboardVarious from "./Various";
import DashboardTwitch from "./Twitch";
import DashboardMusic from "./Music";
import DashboardReaction from "./Reaction";
import DashboardWelcome from "./Welcome";
import DashboardLevels from "./Levels";
import DashboardModeration from "./Moderation";
import { baseapiurl, discordcdnurl } from "../../Service/constante";

function DashBoard({ guild_id }) {
    
    const [info, setInfo] = useState({access: false});
    const [commands, setCommands] = useState({});
    const [page, setPage] = useState("Plugins");

    if(typeof window !== "undefined") {
        var access_token = localStorage.getItem("access_token");
    }

    useEffect(() => {

        async function getData() {
            const access_token = localStorage.getItem("access_token");
            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            };
            
            const request = await fetch(`${baseapiurl}/servers/${guild_id}`, requestOptions);

            if(request.status === 400) return;
            let res = await request.json();
            
            setCommands(res.to_send.commands)
            setInfo(res);
        }
        getData();
    }, [guild_id]);

    const view = [
        {
            name: "Plugins",
            page: <DashboardActivation commands={commands} setCommands={setCommands} guild={guild_id} />
        },
        {
            name: "Settings",
            page: <DashboardSettings guild_id={guild_id} />
        },
        {
            name: "Moderation",
            page: <DashboardModeration guild_id={guild_id} />
        },
        {
            name: "Levels",
            page: <DashboardLevels guild_id={guild_id} />
        },
        {
            name: "Welcome",
            page: <DashboardWelcome guild_id={guild_id} />
        },
        {
            name: "Reaction",
            page: <DashboardReaction guild_id={guild_id} />
        },
        {
            name: "Music",
            page: <DashboardMusic guild_id={guild_id} />
        },
        {
            name: "Twitch",
            page: <DashboardTwitch guild_id={guild_id} />
        },
        {
            name: "Various",
            page: <DashboardVarious guild_id={guild_id} />
        }
    ]

    return (
        <div className="main">
            {
                info.access ? 
                    <div className="dashboard">
                        <DashBoardNav setPage={setPage} guild={{icon: `${discordcdnurl}/icons/${guild_id}/${info.to_send.guild.icon}.webp?size=128`, name: info.to_send.guild.name}} />
                        <div className="dashboard-view">
                            { access_token ? view.find(p => p.name === page).page : ""}
                        </div>
                    </div>
                : <Loader />
            }
        </div>
    )
}

export default DashBoard;