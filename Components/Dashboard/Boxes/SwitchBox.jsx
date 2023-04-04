import React from "react";
import Boxe from "./Boxe";

function SwitchBox({ title, value, onChange, name, children }) {
    return (
        <Boxe title={<div>{<label>{title} </label>}<input id="s2" type="checkbox" name={name} className="switch" checked={value} onChange={() => onChange()} /></div>}>
            <p>{children}</p>
        </Boxe>
    )
}

export default SwitchBox;