import React from "react";

function RoleBox({ role }) {

    return (
        <div style={{ border: `1px solid ${role.color}` }} className="role">
            <span>{role.name}</span>
            <div style={{ backgroundColor: `${role.color}` }} className="rounded" />
        </div>
    )
}

export default RoleBox;