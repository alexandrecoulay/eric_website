import React, { useState, useEffect, useContext } from "react";
import { AlertContext } from "../../Context/AppContext";
import { modificationContext } from "./DashboardContext";

import { baseapiurl } from "../../Service/constante";
import { Loader } from "../../Components/Others";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";
import ListBoxe from "../../Components/Dashboard/Boxes/ListBoxe";
import styles from "../../Style/Global.module.scss";
import Boxe from "../../Components/Dashboard/Boxes/Boxe";
import LittleListBoxe from "../../Components/Dashboard/Boxes/LittleListBoxe";
import Svg from "../../Components/Svg/Svg";
import { useTranslation } from "../../Context/Localization";

function DashboardModeration({ guild_id, user }) {

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
                        channel_id: settings.channel_id,
                        words: settings.words
                    })
                };

               setModification({ ...modification, loading: true })

                const request = await fetch(`${baseapiurl}/servers/${guild_id}/moderation`, requestOptions)
    
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

               const request = await fetch(`${baseapiurl}/servers/${guild_id}/moderation`, requestOptions)
    
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

    const changeWordsInput = (verif, value, field) => {
        var index = settings.words.findIndex(w => w.word === verif);
        var array = settings.words
        array[index][field] = value
        return setChange("words", array)
    }

    return (
        <modificationContext.Provider value={[modification, setModification]}>
            {
                !settings ? <Loader /> :
                <ActivationContainer sendModification={sendModification} text="moderation" guild_id={guild_id} user={user} plugin="moderation" >
                    <ListBoxe title={t("logs_channel")} input={<input placeholder={t("research")} type="text" onChange={(e) => setFilter(e.target.value)} />} text={<span className={`${styles.row}`}># {settings.channels.find(c => c.id === settings.channel_id)?.name ?? ""}</span>}>
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
                    <Boxe title={<span className={`${styles.row} ${styles.full_width}`}>{t("auto_moderation_text")} <Svg className={`${styles.pointer} ${styles.hover}`} onClick={() => {
                        return setChange("words", [ { word: "word", to_do: "warn" }, ...settings.words ])
                    }} name="circle-plus" /></span>}>
                        <div className={`${styles.column} ${styles.full_width}`}>
                            {
                                settings.words.map(words => 
                                    <LittleListBoxe title={<span className={`${styles.row}`}><Svg className={`${styles.pointer} ${styles.hover}`} onClick={() => {
                                        return setChange("words", settings.words.filter(w => w.word !== words.word))
                                    }} size={18} name="circle-close" /><input onChange={(e) => changeWordsInput(words.word, e.target.value, "word")} type="text" value={words.word} /></span>} input={<input placeholder={t("research")} type="text" onChange={(e) => setFilter(e.target.value)} />} text={"Warn"}>
                                        <div onClick={() => {
                                            changeWordsInput(words.word, "warn", "to_do")
                                        }} className={`option`}>
                                            <span className={`${styles.row}`}>Warn</span>
                                        </div>
                                    </LittleListBoxe>    
                                )
                            }
                        </div>
                    </Boxe>
                </ActivationContainer> 
            }
        </modificationContext.Provider>
    )
}

export default DashboardModeration;