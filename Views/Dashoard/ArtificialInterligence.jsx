import React, { useState, useEffect, useContext } from "react";
import { AlertContext, UserContext } from "../../Context/AppContext";
import { modificationContext } from "./DashboardContext";

import { baseapiurl } from "../../Service/constante";
import { Loader } from "../../Components/Others";
import ActivationContainer from "../../Components/Dashboard/ActivationContainer";
import ListBoxe from "../../Components/Dashboard/Boxes/ListBoxe";
import styles from "../../Style/Global.module.scss";
import { useTranslation } from "../../Context/Localization";
import CheckListBoxe from "../../Components/Dashboard/Boxes/CheckListBoxe";
import { SwitchBox } from "../../Components/Dashboard/Boxes";

function ArtificialInteligence({ guild_id }) {

    const {setAlert} = useContext(AlertContext);
    const [modification, setModification] = useState({
        activated: false,
        type: "",
        loading: false
    });
    const { user } = useContext(UserContext)

    const [filter, setFilter] = useState("")
    const [settings, setSettings] = useState();
    const { t } = useTranslation();

    const nsfw_todo = [
        {
            id: "kick",
            text: t("nsfw_todo_kick")
        },
        {
            id: "ban",
            text: t("nsfw_todo_ban")
        },
        {
            id: "warn",
            text: t("nsfw_todo_warn")
        },
        {
            id: "nothing",
            text: t("nsfw_todo_nothing")
        }
    ]

    useEffect(() => {
        async function getData() {

            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user?.access_token}`
                }
            };
            const request = await fetch(`${baseapiurl}/servers/${guild_id}/ai`, requestOptions)

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
                        activated: {
                            nsfw: settings.activated.nsfw,
                            chatbot: settings.activated.chatbot
                        },
                        nsfw_settings: {
                            excepted_channels: settings.nsfw_settings.excepted_channels,
                            todo: settings.nsfw_settings?.todo ?? "nothing"
                        }
                    })
                };

               setModification({ ...modification, loading: true })

                const request = await fetch(`${baseapiurl}/servers/${guild_id}/ai`, requestOptions)
    
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

               const request = await fetch(`${baseapiurl}/servers/${guild_id}/ai`, requestOptions)
    
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

    const addNSFWTodo = (value) => {
        if(settings.nsfw_settings.excepted_channels.some(i => i === value)) return;
        setSettings({ ...settings, nsfw_settings: {
            ...settings.nsfw_settings,
            todo: value
        }})
        setModification({ type: "", activated: true })
    }

    const changeActivation = (value) => {
        setSettings({ 
            ...settings, 
            activated: {
                ...settings.activated,
                [value]: settings?.activated[value] ? false : true
            }
        })
        setModification({ type: "", activated: true })
    }

    const changeNSFWExceptChannels = (value) => {
        if(settings.nsfw_settings.excepted_channels.some(i => i === value)) return;
        setSettings({ ...settings, nsfw_settings: {
            ...settings.nsfw_settings,
            excepted_channels: value
        }})
        setModification({ type: "", activated: true })
    }

    return (
        <modificationContext.Provider value={[modification, setModification]}>
            {
                !settings ? <Loader /> :
                <ActivationContainer sendModification={sendModification} text="ai" guild_id={guild_id} user={user} plugin="artificial_intelligence">
                    <SwitchBox title={t("nsfw_activation_title")} name={"nsfw"} value={settings?.activated?.nsfw} onChange={() => changeActivation("nsfw")} />
                    <ListBoxe title={t("todo_on_nsfw_detect")} input={<input placeholder={t("research")} type="text" onChange={(e) => setFilter(e.target.value)} />} text={<span className={`${styles.row}`}>{nsfw_todo.find(l => l.id === settings?.nsfw_settings?.todo ?? "nothing")?.text}</span>}>
                        {
                            nsfw_todo.filter(l => l.text.match(new RegExp(filter, "gi"))).map((l, index) => 
                                <div onClick={() => {
                                    addNSFWTodo(l.id);
                                    return setFilter("")
                                }} key={index} className={`option ${l.id === settings.nsfw_settings.todo ? "selected" : ""}`}>
                                    <span className={`${styles.row}`}>{l.text}</span>
                                </div>
                            )
                        }
                    </ListBoxe>
                    <CheckListBoxe list={settings.nsfw_settings.excepted_channels.map(c => `# ${settings.guild_channels.find(e => e.id === c)?.name ?? "-"}`)} title={t("nsfw_allowed_channel")} input={<input placeholder={t("research")} type="text" onChange={(e) => setFilter(e.target.value)} />} text={<span className={`${styles.row}`}>{t("research")}</span>}>
                        {
                            settings.guild_channels.filter(l => l.name.match(new RegExp(filter, "gi"))).map((l, index) => 
                                <div onClick={() => {
                                    if(settings.nsfw_settings.excepted_channels.some(e => e === l.id)) changeNSFWExceptChannels(settings.nsfw_settings.excepted_channels.filter(e => e !== l.id))
                                    else changeNSFWExceptChannels([ l.id, ...settings.nsfw_settings.excepted_channels ]);
                                    return setFilter("")
                                }} key={index} className={`option ${settings.nsfw_settings.excepted_channels.some(e => e === l.id) ? "selected" : ""}`}>
                                    <span className={`${styles.row} selected`}># {l.name}</span>
                                </div>
                            )
                        }
                    </CheckListBoxe>
                    <SwitchBox title={t("chatbot_activation_title")} name={"chatbot"} value={settings?.activated?.chatbot} onChange={() => changeActivation("chatbot")} />
                </ActivationContainer> 
            }
        </modificationContext.Provider>
    )
}

export default ArtificialInteligence;