import React, { useContext } from "react";
import { useTranslation } from "../../Context/Localization";

import { baseapiurl } from "../../Service/constante";

import styles from "../../Style/Global.module.scss"
import commandContext, { modificationContext } from "../../Views/Dashoard/DashboardContext";
import Svg from "../Svg/Svg";


function ActivationContainer({ children, plugin, text, user, guild_id, noSwitch, sendModification }) {

    const [commands, setCommands] = useContext(commandContext);
    const [modification, setModification] = useContext(modificationContext);

    const { t } = useTranslation();

    const changeActivation = async () => {

        const name = plugin;
        const newObject = {...commands};
        newObject[name].activate = !newObject[name].activate;

        const to_send = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user?.access_token}`
            },
            body: JSON.stringify({
                commands
            })
        };

        const request = await fetch(`${baseapiurl}/servers/${guild_id}`, to_send);
        const status = request.status;

        if(status === 200) return setCommands(newObject);
    };

    const sendClick = (type) => {
        sendModification(type);
        setModification({ ...modification, type: type });
    }

    return (
        <div className={`${styles.column} ${styles.align_start}`}>
            <div className={`${styles.row} ${styles.space_between} ${styles.full_width}`}>
                <div className={`${styles.column} ${styles.gap} ${styles.align_start}`}>
                    <h2>{t(`${text}_title`)}</h2>
                    <span className={`${styles.padding_5}`}>{t(`${text}_description`)}</span>
                    {
                        modification.activated &&                                          
                            <div className="send_info">
                                <div className="bar">
                                    <div>{t("modification_detected")} !</div>
                                    <div className="buttons">
                                        <button onClick={() => sendClick("cancel")} className={`cancel ${modification.type === "cancel" ? "loader" : ""}`}>{modification.loading && modification.type === "cancel" ? <Svg size={20} color="#F5F5F5" name="arrows-rotate" /> : t("cancel")}</button>
                                        <button onClick={() => sendClick("save")} className={`save ${modification.type === "save" ? "loader" : ""}`}>{modification.loading && modification.type === "save" ? <Svg size={20} color="#F5F5F5" name="arrows-rotate" /> : t("save")}</button>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
                { noSwitch ? "" : <div>{commands[plugin].activate && <label>{t("activated")} </label>}<input  id="s2" type="checkbox" name={plugin} className="switch" checked={commands[plugin].activate} onChange={() => changeActivation()} /></div> }  
            </div>
            <div style={{ gap: "20px" }} className={`${styles.column} ${styles.align_start} ${styles.full_width}`}>
                { children }
            </div>
        </div>
    )
}

export default ActivationContainer;