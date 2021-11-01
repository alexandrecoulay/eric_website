import React from "react";
import DashboardTitle from "./Components/DashboardTitle";

function DashboardMusic({ guild_id }) {
    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Music Settings" />
            <div className="boxes">
            </div>
        </div>
    )
}

export default DashboardMusic;