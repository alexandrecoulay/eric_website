import React from "react";
import useTranslation from 'next-translate/useTranslation'

import { baseapiurl } from "../../../Service/constante";

import Svg from "../../../Components/Svg/Svg";

import DashboardTitle from "./DashboardTitle";

function DashboardActivation({ user, commands, setCommands, guild}) {

    const { t } = useTranslation('dashboard');
    
    const changeActivation = async (e) => {

        const name = e.target.name;
        const newObject = {...commands};
        newObject[name].activate = !newObject[name].activate;

        const to_send = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user?.access_token}`
            },
            body: JSON.stringify({
                commands
            })
        };

        const request = await fetch(`${baseapiurl}/servers/${guild}`, to_send);
        const status = request.status;

        if(status === 200) return setCommands(newObject);
    };

    const plugins_element = [
        {
            svg: "gavel",
            plugin: "moderation",
            h3: t("moderation_title"),
            span: t("moderation_description")
        },
        {
            svg: "trophy",
            plugin: "leveling",
            h3: t("level_title"),
            span: t("level_description")
        },
        {
            svg: "hand-wave",
            plugin: "joining",
            h3: t("welcome_commands"),
            span: t("welcome_description")
        },
        {
            svg: "music",
            plugin: "music",
            h3: t("music_commands"),
            span: t("music_description")
        },
        {
            svg: "emote-plus",
            plugin: "reaction",
            h3: t("reaction_commands"),
            span: t("reaction_description")
        },
        {
            svg: "twitch",
            plugin: "twitch",
            h3: t("twitch_commands"),
            span: t("twitch_description")
        },
        {
            svg: "grid-plus",
            plugin: "others",
            h3: t("various_commands"),
            span: t("various_description")
        },
        {
            svg: "face-flushed",
            plugin: "emotes",
            h3: t("emote_commands"),
            span: t("emote_description")
        }
    ]

    const title = t("activate_plugins");

    return (
        <div className="dashboard-activation">
            <DashboardTitle title={title} />
            <div className="boxes">
                {
                    plugins_element.map((p, index) => 
                        <div key={index} className="element">
                            <div className="top">
                                <Svg name={p.svg} size={26} />
                                <div>{commands[p.plugin].activate ? <label>{t("common:activated")}</label> : ""}<input  id="s2" type="checkbox" name={p.plugin} className="switch" checked={commands[p.plugin].activate} onChange={(e) => changeActivation(e)} /></div>
                            </div>
                            <div className="content">
                                <h3>{p.h3}</h3>
                                <span>{p.span}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DashboardActivation;