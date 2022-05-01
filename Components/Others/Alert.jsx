import React, { useContext, useEffect } from "react";
import { AlertContext } from "../../Context/AppContext";
import AlertContent from "./Alert/Components/AlertContent";
import AlertCross from "./Alert/Components/AlertCross";
import AlertIcon from "./Alert/Components/AlertIcon";

function Alert() {
    const {alert, setAlert} = useContext(AlertContext);
    const color = alert.type === "error" ? "#ED3D3D" : alert.type === "success" ? "#339900" : "#007ad6";

    useEffect(() => {
    
        if(alert.display) {
            setTimeout(() => {
                setAlert({ ...alert, display: false })
            }, (5000));
        }
    }, [alert])

    return (
        <div className="notyf" style={{ display: `${alert.display ? "flex" : "none"}` }}>
            <div className="notyf__toast notyf__toast--dismissible notyf__toast notyf__toast">
                <div className="notyf__wrapper">
                    <AlertIcon type={alert.type} />
                    <AlertContent message={alert.message} />
                    <AlertCross setAlert={setAlert} />
                </div>
                <div className="notyf__ripple" style={{ backgroundColor: color }} />
            </div>
        </div>
    )
}

export default Alert;