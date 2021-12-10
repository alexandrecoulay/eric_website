import React, { useState, useEffect, useContext } from "react";
import useTranslation from 'next-translate/useTranslation'
import { AlertContext } from "../../Context/AppContext";
import { modificationContext } from "./DashboardContext";

import { baseapiurl } from "../../Service/constante";
import Loader from "../../Components/Others/Loader";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";
import ListBoxe from "../../Components/Dashboard/Boxes/ListBoxe";
import styles from "../../Style/Global.module.scss";
import Svg from "../../Components/Svg/Svg";
import Boxe from "../../Components/Dashboard/Boxes/Boxe";
import LittleListBoxe from "../../Components/Dashboard/Boxes/LittleListBoxe";
import CheckListBoxe from "../../Components/Dashboard/Boxes/CheckListBoxe";

function DashboardLevel({ guild_id, user }) {

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
            const request = await fetch(`${baseapiurl}/servers/${guild_id}/level`, requestOptions)

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
                        channels: settings.channels,
                        roles: settings.roles.filter(r => r.role_id !== "-" && r.level < 101 && Number(r.role_id))
                    })
                };

               setModification({ ...modification, loading: true })

                const request = await fetch(`${baseapiurl}/servers/${guild_id}/level`, requestOptions)
    
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

               const request = await fetch(`${baseapiurl}/servers/${guild_id}/level`, requestOptions)
    
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

    const changeInput = (verif, value, field) => {
        var index = settings.roles.findIndex(rol => rol.level === verif);
        var array = settings.roles
        array[index][field] = value
        return setChange("roles", array)
    }

    return (
        <modificationContext.Provider value={[modification, setModification]}>
            {
                !settings ? <Loader /> :
                <ActivationContainer sendModification={sendModification} text="level" guild_id={guild_id} user={user} plugin="leveling" >
                    <CheckListBoxe list={settings.channels.map(c => `# ${settings.guild_channels.find(e => e.id === c)?.name ?? "-"}`)} title={t("banned_channels")} input={<input placeholder={t("common:research")} type="text" onChange={(e) => setFilter(e.target.value)} />} text={<span className={`${styles.row}`}>{t("common:research")}</span>}>
                        {
                            settings.guild_channels.filter(l => l.name.match(new RegExp(filter, "gi"))).map((l, index) => 
                                <div onClick={() => {
                                    if(settings.channels.some(e => e === l.id)) setChange("channels", settings.channels.filter(e => e !== l.id))
                                    else setChange("channels", [ l.id, ...settings.channels ]);
                                    return setFilter("")
                                }} key={index} className={`option ${settings.channels.some(e => e === l.id) ? "selected" : ""}`}>
                                    <span className={`${styles.row} selected`}># {l.name}</span>
                                </div>
                            )
                        }
                    </CheckListBoxe>
                    <Boxe title={<span className={`${styles.row} ${styles.full_width}`}>{t("roles_to_give")} (<span className={`${styles.muted}`}>{t("role_bot_higher_than_role_hierarchy")}</span>) <Svg className={`${styles.pointer} ${styles.hover}`} onClick={() => {
                        return setChange("roles", [ { level: 0, role_id: "0" }, ...settings.roles ])
                    }} name="circle-plus" /></span>}>
                        <div className={`${styles.column} ${styles.full_width}`}>
                            {
                                settings.roles.map(role => 
                                    <LittleListBoxe title={<span className={`${styles.row}`}><Svg className={`${styles.pointer} ${styles.hover}`} onClick={() => {
                                        return setChange("roles", settings.roles.filter(r => r.level !== role.level))
                                    }} size={18} name="circle-close" /><input onChange={(e) => changeInput(role.level, e.target.value, "level")} type="number" value={role.level} /></span>} input={<input placeholder={t("common:research")} type="text" onChange={(e) => setFilter(e.target.value)} />} text={<span className={`${styles.row}`}><Svg size={10} name="circle" color={settings.guild_roles.find(c => c.id === role.role_id)?.color} /> {settings.guild_roles.find(c => c.id === role.role_id)?.name ?? ""}</span>}>
                                        {
                                            settings.guild_roles.filter(l => l.name.match(new RegExp(filter, "gi"))).map((l, index) => 
                                                <div onClick={() => {
                                                    changeInput(role.level, l.id, "role_id")
                                                    return setFilter("")
                                                }} key={index} className={`option ${l.id === role.role_id ? "selected" : ""}`}>
                                                    <span className={`${styles.row}`}><Svg size={10} name="circle" color={l.color} /> {l.name}</span>
                                                </div>
                                            )
                                        }
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

export default DashboardLevel;