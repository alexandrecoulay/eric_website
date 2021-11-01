import React from "react";

import DisplaySvg from "../../../Svg/display";
import EmotePlusSvg from "../../../Svg/emote-plus";
import GavelSvg from "../../../Svg/gavel";
import GridPlusSvg from "../../../Svg/grid-plus";
import HandWaveSvg from "../../../Svg/hand-wave";
import MusicSvg from "../../../Svg/music";
import SettingSvg from "../../../Svg/setting-svg";
import TrophyStarSvg from "../../../Svg/trophy-star";
import TwitchSvg from "../../../Svg/twitch";

function DashBoardNav({ setPage, guild = {icon: "", name: ""} }) {
    return (
        <nav>
            <section className="header">
                <img className="pdp-40" src={guild.icon} alt={guild.icon} />
                <span>{guild.name}</span>
            </section>
            <section>
                <div>
                    <button onClick={() => setPage("Plugins")}>
                        <DisplaySvg setClass="fa-primary" />
                        <span>Dashboard</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Settings")}>
                        <SettingSvg setClass={["fa-primary", "fa-secondary", "fa-third"]} />
                        <span>Settings</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Moderation")}>
                        <GavelSvg setClass="fa-primary" />
                        <span>Moderation</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Levels")}>
                        <TrophyStarSvg setClass="fa-primary" />
                        <span>Levels</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Welcome")}>
                        <HandWaveSvg setClass="fa-primary" />
                        <span>Welcome</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Reaction")}>
                        <EmotePlusSvg setClass="fa-primary"/>
                        <span>Reaction</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Music")}>
                        <MusicSvg setClass="fa-primary"/>
                        <span>Music</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Twitch")}>
                        <TwitchSvg setClass="fa-primary"/>
                        <span>Twitch</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Various")}>
                        <GridPlusSvg setClass="fa-primary"/>
                        <span>Various</span>
                    </button>
                </div>
            </section>    
        </nav>
    )
}

export default DashBoardNav;