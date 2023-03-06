import React from "react";

import Svg from "../../../Components/Svg/Svg";
import { useTranslation } from "../../../Context/Localization";

function DashBoardNav({ setPage, guild = {icon: "", name: ""} }) {

    const { t } = useTranslation();

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
        {
            page: "IA",
            name: "brain-circuits",
            text: t("ai_title")
            
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