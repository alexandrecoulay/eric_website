import React from "react";

import { baseapiurl } from "../../../Service/constante";

import Svg from "../../../Components/Svg/Svg";

import DashboardTitle from "./DashboardTitle";

function DashboardActivation({ commands, setCommands, guild}) {
    
    const changeActivation = async (e) => {

        const name = e.target.name;
        const newObject = {...commands};
        newObject[name].activate = !newObject[name].activate;

        if(typeof window !== "undefined") {
            var access_token = localStorage.getItem("access_token");
        }

        const to_send = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${access_token}`
            },
            body: JSON.stringify({
                commands
            })
        };

        const request = await fetch(`${baseapiurl}/servers/${guild}`, to_send);
        const status = request.status;

        if(status === 200) return setCommands(newObject);
    };

    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Activated Plugins" />
            <div className="boxes">
                <div className="element">
                    <div className="top">
                        <Svg name="gavel" size={26} />
                        <div>{commands.moderation.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="moderation" className="switch" checked={commands.moderation.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Moderation commands</h3>
                        <span>Moderate the server with commands and verifications</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <Svg name="trophy" size={26} />
                        <div>{commands.leveling.activate ? <label>Activated</label> : ""}<input id="s2" type="checkbox" name="leveling" className="switch" checked={commands.leveling.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Levels commands</h3>
                        <span>Let the members know they activities in the server</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <Svg name="hand-wave" size={26} />
                        <div>{commands.joining.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="joining" className="switch" checked={commands.joining.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Welcome command</h3>
                        <span>Let the bot make a verification or send a message when a member join the guild</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <Svg name="music" size={26} />
                        <div>{commands.music.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="music" className="switch" checked={commands.music.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Music system</h3>
                        <span>Let your guild members listen musics in you server</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <Svg name="emote-plus" size={26} />
                        <div>{commands.reaction.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="reaction" className="switch" checked={commands.reaction.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Reaction role</h3>
                        <span>Beautify your server with the reactions roles commands</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <Svg name="twitch" size={26} />
                        <div>{commands.twitch.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="twitch" className="switch" checked={commands.twitch.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Twitch commands</h3>
                        <span>View your or your friends Twitch statistics or send a message when someone start a stream</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <Svg name="grid-plus" size={26} />
                        <div>{commands.others.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="others" className="switch" checked={commands.others.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Others commands</h3>
                        <span>Enable all various commands of the bot</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <Svg name="grid-plus" size={26} />
                        <div>{commands.emotes.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="emotes" className="switch" checked={commands.emotes.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Emotes commands</h3>
                        <span>Enable all the emotes commands </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardActivation;