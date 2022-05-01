import React, { useState, useEffect, useContext } from "react";

import { AlertContext } from "../../Context/AppContext";

import { baseapiurl } from "../../Service/constante";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";
import { useTranslation } from "../../Context/Localization";

function DashboardVarious({ guild_id, user }) {

    const {alert, setAlert} = useContext(AlertContext);
    const [modification, setModification] = useState(false);

    const [settings, setSettings] = useState({});
    const { t } = useTranslation();

    const sendChange = () => {
        console.log("change");
    }
    
    return (
        <ActivationContainer sendModification={sendChange} text="various" modification={modification} guild_id={guild_id} user={user} plugin="others">

        </ActivationContainer>
    )
}

export default DashboardVarious;