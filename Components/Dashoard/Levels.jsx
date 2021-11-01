import React from "react";
import DashboardTitle from "./Components/DashboardTitle";

function DashboardLevels({ guild_id }) {
    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Leveling Settings" />
            <div className="boxes">
            </div>
        </div>
    )
}

export default DashboardLevels;