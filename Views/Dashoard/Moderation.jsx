import React, { useState, useEffect, useContext } from "react";
import useTranslation from 'next-translate/useTranslation'
import { AlertContext } from "../../Context/AppContext";
import { modificationContext } from "./DashboardContext";

import { baseapiurl } from "../../Service/constante";
import Loader from "../../Components/Others/Loader";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";
import ListBoxe from "../../Components/Dashboard/Boxes/ListBoxe";
import styles from "../../Style/Global.module.scss";

function DashboardModeration({ guild_id, user }) {

    const [alert, setAlert] = useContext(AlertContext);
    const [modification, setModification] = useState({
        activated: false,
        type: "",
        loading: false
    });

    const [filter, setFilter] = useState("")
    const [settings, setSettings] = useState();
    const { t } = useTranslation('dashboard');

    useEffect(() => {
        async function getData() {

            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user?.access_token}`
                }
            };
            const request = await fetch(`${baseapiurl}/servers/${guild_id}/moderation`, requestOptions)

            if(request.status !== 200) return setAlert({ display: true, type: "error", message: "Error !" })
            const response = await request.json()

            setSettings(response)
        
        }
        getData()

    }, [guild_id, user])

    const sendModification = async (type) => {

        if(type === "save") {
            async function getData() {

                const requestOptions = {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${user?.access_token}`
                    },
                    body: JSON.stringify({
                        channel_id: settings.channel_id
                    })
                };

               setModification({ ...modification, loading: true })

                const request = await fetch(`${baseapiurl}/servers/${guild_id}/moderation`, requestOptions)
    
                if(request.status !== 200) return setAlert({ display: true, type: "error", message: "Error !" })

                console.log("save");
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

               const request = await fetch(`${baseapiurl}/servers/${guild_id}/moderation`, requestOptions)
    
                if(request.status !== 200) return setAlert({ display: true, type: "error", message: "Error !" })
                const response = await request.json()

                setSettings(response)
                
                console.log("cancel");
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
                <ActivationContainer sendModification={sendModification} text="moderation" guild_id={guild_id} user={user} plugin="moderation" >
                    <ListBoxe title={t("logs_channel")} input={<input placeholder={t("common:research")} type="text" onChange={(e) => setFilter(e.target.value)} />} text={<span className={`${styles.row}`}># {settings.channels.find(c => c.id === settings.channel_id)?.name ?? ""}</span>}>
                        {
                            settings.channels.filter(l => l.name.match(new RegExp(filter, "gi"))).map((l, index) => 
                                <div onClick={() => {
                                    setChange("channel_id", l.id);
                                    return setFilter("")
                                }} key={index} className={`option ${l.id === settings.channel_id ? "selected" : ""}`}>
                                    <span className={`${styles.row} role`}># {l.name}</span>
                                </div>
                            )
                        }
                    </ListBoxe>
                </ActivationContainer> 
            }
        </modificationContext.Provider>
    )
}

export default DashboardModeration;