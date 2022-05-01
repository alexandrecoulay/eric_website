import React, { useContext } from "react";
import { baseapiurl } from "../../Service/constante";

import Svg from "../../Components/Svg/Svg";

import DashboardTitle from "./Components/DashboardTitle";
import commandContext from "./DashboardContext";
import { useTranslation } from "../../Context/Localization";

function DashboardActivation({ user, guild }) {

    const [commands, setCommands] = useContext(commandContext);

    const { t } = useTranslation();
    
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
            svg: "robot",
            plugin: "auto_moderation",
            h3: t("auto_moderation_title"),
            span: t("auto_moderation_description")
        },
        {
            svg: "brain-circuits",
            plugin: "artificial_intelligence",
            h3: "Artificial inteligence",
            span: "Comming soon ... you will be able to ask me some help, if you want to search something on google I will search it for you by example but you can do more. Currently in test prod"
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
            h3: t("welcome_title"),
            span: t("welcome_description")
        },
        /*{
            svg: "music",
            plugin: "music",
            h3: t("music_title"),
            span: t("music_description")
        },*/
        {
            svg: "emote-plus",
            plugin: "reaction",
            h3: t("reaction_title"),
            span: t("reaction_description")
        },
        /*{
            svg: "twitch",
            plugin: "twitch",
            h3: t("twitch_title"),
            span: t("twitch_description")
        },*/
        {
            svg: "grid-plus",
            plugin: "others",
            h3: t("various_title"),
            span: t("various_description")
        },
        {
            svg: "face-flushed",
            plugin: "emotes",
            h3: t("emote_title"),
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
                                <div>{commands[p.plugin].activate ? <label>{t("activated")}</label> : ""}<input  id="s2" type="checkbox" name={p.plugin} className="switch" checked={commands[p.plugin].activate} onChange={(e) => changeActivation(e)} /></div>
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