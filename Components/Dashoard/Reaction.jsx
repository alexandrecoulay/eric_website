import React from "react";
import DashboardTitle from "./Components/DashboardTitle";

function DashboardReaction({ guild_id }) {
    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Reaction Settings" />
            <div className="boxes">
            </div>
        </div>
    )
}

export default DashboardReaction;