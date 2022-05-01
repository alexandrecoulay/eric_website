import React, { useState, useEffect, useContext } from "react";
import { AlertContext } from "../../Context/AppContext";
import { modificationContext } from "./DashboardContext";

import { baseapiurl } from "../../Service/constante";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";
import { useTranslation } from "../../Context/Localization";
import { Boxe } from "../../Components/Dashboard/Boxes";

function DashboardReaction({ guild_id, user }) {

    const {alert, setAlert} = useContext(AlertContext);
    const [modification, setModification] = useState(false);

    const [settings, setSettings] = useState({});
    const { t } = useTranslation();

    useEffect(() => {
        async function getData() {

            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user?.access_token}`
                }
            };
            const request = await fetch(`${baseapiurl}/servers/${guild_id}/reactions`, requestOptions)

            if(request.status !== 200) return setAlert({ display: true, type: "error", message: "Error !" })
            const response = await request.json()

            setSettings(response)
        
        }
        getData()

    }, [guild_id, user])

    const sendModification = async (type) => {

        if(type === "save") {
            async function getData() {

                return console.log(settings);
                const requestOptions = {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${user?.access_token}`
                    },
                    body: JSON.stringify({
                        channel_id: settings.channel_id,
                        words: settings.words
                    })
                };

               setModification({ ...modification, loading: true })

                const request = await fetch(`${baseapiurl}/servers/${guild_id}/reactions`, requestOptions)
    
                if(request.status !== 200) return setAlert({ display: true, type: "error", message: "Error !" })

                setAlert({ display: true, type: "success", message: "Saved !" })
                setModification({ activated: false, type: "", loading: false })
            
            }
            return getData()
        } else if(type === "cancel") {
            async function getData() {

                const requestOptions = {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${user?.access_token}`
                    }
                };

                setModification({ ...modification, loading: true })

               const request = await fetch(`${baseapiurl}/servers/${guild_id}/reactions`, requestOptions)
    
                if(request.status !== 200) return setAlert({ display: true, type: "error", message: "Error !" })
                const response = await request.json()

                setSettings(response)
                
                setAlert({ display: true, type: "error", message: "Canceled !" })
                setModification({ activated: false, type: "", loading: false })
            
            }
            return getData()
        }
    }

    const setChange = (name, value) => {
        setSettings({ ...settings, [name]: value })
        setModification({ type: "", activated: true })
    }
    
    return (
        <modificationContext.Provider value={[modification, setModification]}>
            {
                !settings ? <Loader /> :
                    <ActivationContainer sendModification={sendModification} text="reaction" guild_id={guild_id} user={user} plugin="reaction" >
                        <Boxe title={t("create_reaction_role")}>

                        </Boxe>
                    </ActivationContainer> 
            }
        </modificationContext.Provider>
    )
}

export default DashboardReaction;