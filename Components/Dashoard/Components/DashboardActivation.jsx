import React from "react";

import { apibaseurl } from "../../../Service/constante";
import EmotePlusSvg from "../../../Svg/emote-plus";
import GavelSvg from "../../../Svg/gavel";
import GridPlusSvg from "../../../Svg/grid-plus";
import HandWaveSvg from "../../../Svg/hand-wave";
import MusicSvg from "../../../Svg/music";
import TrophyStarSvg from "../../../Svg/trophy-star";
import TwitchSvg from "../../../Svg/twitch";

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

        const request = await fetch(`${apibaseurl}/servers/${guild}`, to_send);
        const status = request.status;

        if(status === 200) return setCommands(newObject);
    };

    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Activated Plugins" />
            <div className="boxes">
                <div className="element">
                    <div className="top">
                        <GavelSvg setClass="fa-primary" />
                        <div>{commands.moderation.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="moderation" className="switch" checked={commands.moderation.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Moderation commands</h3>
                        <span>Moderate the server with commands and verifications</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <TrophyStarSvg setClass="fa-primary" />
                        <div>{commands.leveling.activate ? <label>Activated</label> : ""}<input id="s2" type="checkbox" name="leveling" className="switch" checked={commands.leveling.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Levels commands</h3>
                        <span>Let the members know they activities in the server</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <HandWaveSvg setClass="fa-primary" />
                        <div>{commands.joining.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="joining" className="switch" checked={commands.joining.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Welcome command</h3>
                        <span>Let the bot make a verification or send a message when a member join the guild</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <MusicSvg setClass="fa-primary" />
                        <div>{commands.music.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="music" className="switch" checked={commands.music.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Music system</h3>
                        <span>Let your guild members listen musics in you server</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <EmotePlusSvg setClass="fa-primary" />
                        <div>{commands.reaction.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="reaction" className="switch" checked={commands.reaction.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Reaction role</h3>
                        <span>Beautify your server with the reactions roles commands</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <TwitchSvg setClass="fa-primary" />
                        <div>{commands.twitch.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="twitch" className="switch" checked={commands.twitch.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Twitch commands</h3>
                        <span>View your or your friends Twitch statistics or send a message when someone start a stream</span>
                    </div>
                </div>
                <div className="element">
                    <div className="top">
                        <GridPlusSvg setClass="fa-primary" />
                        <div>{commands.others.activate ? <label>Activated</label> : ""}<input  id="s2" type="checkbox" name="others" className="switch" checked={commands.others.activate} onChange={(e) => changeActivation(e)} /></div>
                    </div>
                    <div className="content">
                        <h3>Others commands</h3>
                        <span>Enable all various commands of the bot</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardActivation;