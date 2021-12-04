import React, { useState, useEffect } from "react";
import useTranslation from 'next-translate/useTranslation'

import { baseapiurl, discordcdnurl } from "../../Service/constante";

import CreateLink from "../../Components/Text/Link";
import Svg from "../../Components/Svg/Svg";
import Loader from "../../Components/Others/Loader";
import Icon from "../../Components/Assets/RoundedIcon";

function DashboardIndex({ user }) {

    const [guilds, setGuilds] = useState([]);

    const { t } = useTranslation('common')

    useEffect(() => {
        async function getData() {

            if(!user) return;
            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user.access_token}`
                }
            };
            
            let response = await fetch(`${baseapiurl}/servers`, requestOptions)
            let res = await response.json();

            setGuilds(res);
        }
        getData();
    }, [user]);

    return (
        <div className="dashboard-home">
            <h2>{t("select_a_server")}</h2>
            { 
                guilds.length < 1 ? <Loader /> :
                guilds.map((e, index) =>
                    e != null ?
                    <CreateLink key={index} href={`/dashboard/${e.guild_id}`}>
                        <div className="guild-info">
                            <div className="top-informations">
                                <Icon size={40} src={`${discordcdnurl}/icons/${e.guild_id}/${e.icon}.webp`} />
                                <span className="guild-name">{e.name}</span> 
                                { e.owner && <Svg name="crown" size={22} /> }
                            </div>
                            <div className="bottom-informations">
                                <span>{t("dashboard")}</span>
                            </div>
                        </div> 
                    </CreateLink>: e
                )
            }
        </div>
    )

}

export default DashboardIndex;