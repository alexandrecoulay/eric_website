import React, { useState, useEffect, useContext } from "react";
import useTranslation from 'next-translate/useTranslation'

import { AlertContext } from "../../Context/AppContext";

import { baseapiurl } from "../../Service/constante";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";

function DashboardMusic({ guild_id, user }) {

    const [alert, setAlert] = useContext(AlertContext);
    const [modification, setModification] = useState(false);

    const [settings, setSettings] = useState({});
    const { t } = useTranslation('dashboard');

    const sendChange = () => {
        console.log("change");
    }
    
    return (
        <ActivationContainer sendModification={sendChange} text="music" modification={modification} guild_id={guild_id} user={user} plugin="music">

        </ActivationContainer>
    )
}

export default DashboardMusic;