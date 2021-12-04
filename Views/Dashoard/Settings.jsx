import React, { useState, useEffect, useContext } from "react";
import useTranslation from 'next-translate/useTranslation'
import { AlertContext } from "../../Context/AppContext";
import { modificationContext } from "./DashboardContext";

import { baseapiurl } from "../../Service/constante";
import Svg from "../../Components/Svg/Svg";
import Loader from "../../Components/Others/Loader";
import DashboardTitle from "./Components/DashboardTitle";
import RoleBox from "./Views/RoleBox";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";
import Boxe from "../../Components/Dashboard/Boxes/Boxe";

function DashboardSettings({ guild_id, user }) {

    const [alert, setAlert] = useContext(AlertContext);
    const [modification, setModification] = useState({
        activated: false,
        type: ""
    });

    const [settings, setSettings] = useState({});
    const { t } = useTranslation('dashboard');

    useEffect(() => {
        async function getData() {

            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user?.access_token}`
                }
            };
            const request = await fetch(`${baseapiurl}/servers/${guild_id}/settings`, requestOptions)

            if(request.status !== 200) return setAlert({ display: true, type: "error", message: "Error !" })
            const response = await request.json()

            setSettings(response)
        
        }
        getData()

    }, [guild_id, user])

    useEffect(() => {
        if(modification.type === "save") return setAlert({ display: true, type: "success", message: "Saved !" })
        if(modification.type === "cancel") return setAlert({ display: true, type: "error", message: "Canceled !" })

    }, [modification])

    const sendChange = () => {
        console.log("change");
    }

    return (
        <modificationContext.Provider value={[modification, setModification]}>
            <ActivationContainer sendModification={sendChange} text="setting" guild_id={guild_id} user={user} plugin="setting" noSwitch >
                <Boxe title="Text here">
                    <span>{guild_id}</span>
                </Boxe>
            </ActivationContainer>
        </modificationContext.Provider>
    )
}

export default DashboardSettings;