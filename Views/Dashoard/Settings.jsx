import React, { useState, useEffect, useContext } from "react";
import useTranslation from 'next-translate/useTranslation'
import { AlertContext } from "../../Context/AppContext";
import { modificationContext } from "./DashboardContext";

import { baseapiurl, basecdnurl } from "../../Service/constante";
import Svg from "../../Components/Svg/Svg";
import Loader from "../../Components/Others/Loader";
import DashboardTitle from "./Components/DashboardTitle";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";
import Boxe from "../../Components/Dashboard/Boxes/Boxe";
import ListBoxe from "../../Components/Dashboard/Boxes/ListBoxe";
import { languages } from "../../Service/Languages";
import Icon from "../../Components/Assets/RoundedIcon";
import styles from "../../Style/Global.module.scss";
import InputBoxe from "../../Components/Dashboard/Boxes/InputBoxe";

function DashboardSettings({ guild_id, user }) {

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
            const request = await fetch(`${baseapiurl}/servers/${guild_id}/settings`, requestOptions)

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
                        language: settings.language,
                        moderation_roles: [],
                        prefix: settings.prefix
                    })
                };

               setModification({ ...modification, loading: true })

                const request = await fetch(`${baseapiurl}/servers/${guild_id}/settings`, requestOptions)
    
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

               const request = await fetch(`${baseapiurl}/servers/${guild_id}/settings`, requestOptions)
    
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
                <ActivationContainer sendModification={sendModification} text="setting" guild_id={guild_id} user={user} plugin="setting" noSwitch >
                    <InputBoxe value={settings.prefix} onChange={(e) => setChange("prefix", e.target.value)} name="prefix" title={t("change_prefix")} />
                    <ListBoxe title={t("change_language")} input={<input placeholder="Select" type="text" onChange={(e) => setFilter(e.target.value)} />} text={<span className={`${styles.row}`}><Icon size={22} src={`${basecdnurl}/assets/flags/${settings?.language ?? "en_UK"}.png`} /> {languages.find(l => l.local === settings?.language ?? "en_UK")?.language}</span>}>
                        {
                            languages.filter(l => l.language.match(new RegExp(filter, "gi"))).map((l, index) => 
                                <div onClick={() => {
                                    setChange("language", l.local);
                                    return setFilter("")
                                }} key={index} className={`option ${l.local === settings.language ? "selected" : ""}`}>
                                    <span className={`${styles.row}`}><Icon size={22} src={`${basecdnurl}/assets/flags/${l.local}.png`} /> {l.language}</span>
                                </div>
                            )
                        }
                    </ListBoxe>
                </ActivationContainer> 
            }
        </modificationContext.Provider>
    )
}

export default DashboardSettings;