import React, { useEffect, useState } from "react";
import Boxe from "../../Components/Dashboard/Boxe";
import BoxeContainer from "../../Components/Dashboard/BoxeContainer";
import Loader from "../../Components/Others/Loader";
import { baseapiurl } from "../../Service/constante";
import styles from "../../Style/Global.module.scss";

function DashboardModeration({ guild_id }) {

    const [info, setInfo] = useState({
        access: false
    })

    useEffect(() => {
        async function getData() {
            const access_token = localStorage.getItem("access_token");
            
            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            };

            const request = await fetch(`${baseapiurl}/servers/${guild_id}/moderation`, requestOptions);
            const response = await request.json();

            setInfo(response)
        }

        getData()
    }, [])

    return (
        <div className="dashboard-activation">
                {
                    !info.access ? 
                    <Loader /> :
                    <BoxeContainer title="Moderation Settings">
                        <Boxe title="Logs channel">
                            <div className={`${styles.row} description`}>
                                {
                                    info.channels.map((c, index) =>
                                        <span key={index} className={`${info.informations === c.id ? styles.muted : styles.a}`}>#{c.name}</span>
                                    )
                                }
                            </div>
                        </Boxe>
                    </BoxeContainer>
                }
        </div>
    )
}

export default DashboardModeration;