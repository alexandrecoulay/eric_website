import React from "react";
import DashboardTitle from "./Components/DashboardTitle";

function DashboardWelcome({ guild_id }) {
    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Welcome Settings" />
            <div className="boxes">
            </div>
        </div>
    )
}

export default DashboardWelcome;