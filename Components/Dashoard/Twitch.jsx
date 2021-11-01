import React from "react";
import DashboardTitle from "./Components/DashboardTitle";

function DashboardTwitch({ guild_id }) {
    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Twitch Settings" />
            <div className="boxes">
            </div>
        </div>
    )
}

export default DashboardTwitch;