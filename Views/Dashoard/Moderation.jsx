import React from "react";
import DashboardTitle from "./Components/DashboardTitle";

function DashboardModeration({ guild_id }) {
    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Moderation Settings" />
            <div className="boxes">
            </div>
        </div>
    )
}

export default DashboardModeration;