import React from "react";

function DashboardTitle({ title }) {

    return (
        <div className="dashboard-title">
            <div className="gauche">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default DashboardTitle;