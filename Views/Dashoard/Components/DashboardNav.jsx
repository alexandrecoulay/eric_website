import React from "react";
import useTranslation from 'next-translate/useTranslation'

import Svg from "../../../Components/Svg/Svg";

function DashBoardNav({ setPage, guild = {icon: "", name: ""} }) {

    const { t } = useTranslation('dashboard');

    const links = [
        {
            page: "Plugins",
            name: "display",
            text: t("dashboard")
            
        },
        {
            page: "Settings",
            name: "settings",
            text: t("settings")
            
        },
        {
            page: "Moderation",
            name: "gavel",
            text: t("moderation")
            
        },
        {
            page: "Welcome",
            name: "hand-wave",
            text: t("welcome")
            
        },
        {
            page: "Levels",
            name: "trophy",
            text: t("level")
            
        },
        /*{
            page: "Reaction",
            name: "emote-plus",
            text: t("reaction")
            
        },
        {
            page: "Music",
            name: "music",
            text: t("music")
            
        },
        {
            page: "Twitch",
            name: "twitch",
            text: t("twitch")
            
        },
        {
            page: "Various",
            name: "grid-plus",
            text: t("various")
            
        }*/
    ]
    return (
        <nav>
            <section className="header">
                <img className="pdp-40" src={guild.icon} alt={guild.icon} />
                <span>{guild.name}</span>
            </section>
            <section>
            {
                links.map((l, index) => 
                    <div key={index}>
                        <button onClick={() => setPage(l.page)}>
                            <Svg name={l.name} size={22} />
                            <span>{l.text}</span>
                        </button>
                    </div>
                )
            }
            </section>    
        </nav>
    )
}

export default DashBoardNav;