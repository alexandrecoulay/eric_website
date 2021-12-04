import React, { useState, useEffect } from "react";
import { baseapiurl, discordcdnurl, inviteboturl } from "../../Service/constante";

import Loader from "../../Components/Others/Loader";
import Seo from "../../Components/Seo";
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

function DashBoard({ guild_id, user }) {
    
    const [info, setInfo] = useState({access: false});
    const [commands, setCommands] = useState({});
    const [page, setPage] = useState("Plugins");

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

    const view = [
        {
            name: "Plugins",
            page: <DashboardActivation user={user} commands={commands} setCommands={setCommands} guild={guild_id} />
        },
        {
            name: "Settings",
            page: <DashboardSettings user={user} guild_id={guild_id} />
        },
        {
            name: "Moderation",
            page: <DashboardModeration user={user} guild_id={guild_id} />
        },
        {
            name: "Levels",
            page: <DashboardLevels user={user} guild_id={guild_id} />
        },
        {
            name: "Welcome",
            page: <DashboardWelcome user={user} guild_id={guild_id} />
        },
        {
            name: "Reaction",
            page: <DashboardReaction user={user} guild_id={guild_id} />
        },
        {
            name: "Music",
            page: <DashboardMusic user={user} guild_id={guild_id} />
        },
        {
            name: "Twitch",
            page: <DashboardTwitch user={user} guild_id={guild_id} />
        },
        {
            name: "Various",
            page: <DashboardVarious user={user} guild_id={guild_id} />
        }
    ]

    return (
        <div className="main">
            <Seo title={`${info?.to_send?.guild?.name ?? "Server"} - Dashboard`} description={`Dashboard of the guild ${info?.to_send?.guild?.name}`} image={`${discordcdnurl}/icons/${guild_id}/${info?.to_send?.guild?.icon}.webp?size=128`} />
            {
                info.access ? 
                    <div className="dashboard">
                        <DashBoardNav setPage={setPage} guild={{icon: `${discordcdnurl}/icons/${guild_id}/${info.to_send.guild.icon}.webp?size=128`, name: info.to_send.guild.name }} />
                        <div className="dashboard-view">
                            { user?.access_token && view.find(p => p.name === page).page }
                        </div>
                    </div>
                : <Loader />
            }
        </div>
    )
}

export default DashBoard;