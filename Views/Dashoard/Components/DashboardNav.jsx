import React from "react";

import Svg from "../../../Components/Svg/Svg";

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
                        <Svg name="display" size={22} />
                        <span>Dashboard</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Settings")}>
                        <Svg name="settings" size={22} />
                        <span>Settings</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Moderation")}>
                        <Svg name="gavel" size={22} />
                        <span>Moderation</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Levels")}>
                        <Svg name="trophy" size={22} />
                        <span>Levels</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Welcome")}>
                        <Svg name="hand-wave" size={22} />
                        <span>Welcome</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Reaction")}>
                        <Svg name="emote-plus" size={22} />
                        <span>Reaction</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Music")}>
                        <Svg name="music" size={22} />
                        <span>Music</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Twitch")}>
                        <Svg name="twitch" size={22} />
                        <span>Twitch</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => setPage("Various")}>
                        <Svg name="grid-plus" size={22} />
                        <span>Various</span>
                    </button>
                </div>
            </section>    
        </nav>
    )
}

export default DashBoardNav;