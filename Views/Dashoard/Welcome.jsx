import React, { useState, useEffect, useContext } from "react";
import { AlertContext } from "../../Context/AppContext";
import { modificationContext } from "./DashboardContext";

import { baseapiurl } from "../../Service/constante";
import { Loader } from "../../Components/Others";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";
import ListBoxe from "../../Components/Dashboard/Boxes/ListBoxe";
import styles from "../../Style/Global.module.scss";
import Svg from "../../Components/Svg/Svg";
import { useTranslation } from "../../Context/Localization";

function DashboardWelcome({ guild_id, user }) {

    const {alert, setAlert} = useContext(AlertContext);
    const [modification, setModification] = useState({
        activated: false,
        type: "",
        loading: false
    });

    const [filter, setFilter] = useState("")
    const [settings, setSettings] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        async function getData() {

            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user?.access_token}`
                }
            };
            const request = await fetch(`${baseapiurl}/servers/${guild_id}/joining`, requestOptions)

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
                        verification: {
                            channel_id: settings.verification.channel_id,
                            role_id: settings.verification.role_id
                        }
                    })
                };

               setModification({ ...modification, loading: true })

                const request = await fetch(`${baseapiurl}/servers/${guild_id}/joining`, requestOptions)
    
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

               const request = await fetch(`${baseapiurl}/servers/${guild_id}/joining`, requestOptions)
    
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
        setSettings({ ...settings, verification: { ...settings.verification, [name]: value } })
        setModification({ type: "", activated: true })
    }

    return (
        <modificationContext.Provider value={[modification, setModification]}>
            {
                !settings ? <Loader /> :
                <ActivationContainer sendModification={sendModification} text="welcome" guild_id={guild_id} user={user} plugin="joining" >
                    <ListBoxe title={t("verification_channel")} input={<input placeholder={t("research")} type="text" onChange={(e) => setFilter(e.target.value)} />} text={<span className={`${styles.row}`}># {settings.guild_channels.find(c => c.id === settings.verification.channel_id)?.name ?? ""}</span>}>
                        {
                            settings.guild_channels.filter(l => l.name.match(new RegExp(filter, "gi"))).map((l, index) => 
                                <div onClick={() => {
                                    setChange("channel_id", l.id);
                                    return setFilter("")
                                }} key={index} className={`option ${l.id === settings.verification.channel_id ? "selected" : ""}`}>
                                    <span className={`${styles.row}`}># {l.name}</span>
                                </div>
                            )
                        }
                    </ListBoxe>
                    <ListBoxe title={<span>{t("verification_role")} (<span className={`${styles.muted}`}>{t("role_bot_higher_than_role_hierarchy")}</span>)</span>} input={<input placeholder={t("research")} type="text" onChange={(e) => setFilter(e.target.value)} />} text={<span className={`${styles.row}`}><Svg size={10} name="circle" color={settings.guild_roles.find(c => c.id === settings.verification.role_id)?.color} /> {settings.guild_roles.find(c => c.id === settings.verification.role_id)?.name ?? ""}</span>}>
                        {
                            settings.guild_roles.filter(l => l.name.match(new RegExp(filter, "gi"))).map((l, index) => 
                                <div onClick={() => {
                                    setChange("role_id", l.id);
                                    return setFilter("")
                                }} key={index} className={`option ${l.id === settings.verification.role_id ? "selected" : ""}`}>
                                    <span className={`${styles.row}`}><Svg size={10} name="circle" color={l.color} /> {l.name}</span>
                                </div>
                            )
                        }
                    </ListBoxe>
                </ActivationContainer> 
            }
        </modificationContext.Provider>
    )
}

export default DashboardWelcome;