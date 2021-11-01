import React from "react";
import Svg from "../../../Svg/Svg";

function AlertIcon({ type }) {
    const color = type === "error" ? "#ED3D3D" : type === "success" ? "#339900" : "#007ad6";

    return (
        <div className="notyf__icon" style={{ color: color }}>
            {
                type === "error" 
                    ? <Svg name="circle-close" className="notyf__icon--error" /> 
                    : type === "success" 
                        ? <Svg name="circle-check" className="notyf__icon--success" />
                        : <Svg name="circle-info" className="notyf__icon--success" />
            }
        </div>
    )
}

export default AlertIcon;