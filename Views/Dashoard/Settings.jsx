import React, { useState, useEffect } from "react";
import { baseapiurl } from "../../Service/constante";
import Svg from "../../Components/Svg/Svg";
import Loader from "../../Components/Others/Loader";
import DashboardTitle from "./Components/DashboardTitle";
import RoleBox from "./Views/RoleBox";
import styles from "../../Style/Global.module.scss";

function DashboardSettings({ guild_id }) {

    const [info, setInfo] = useState({ access: false });
    const [modal, openModal] = useState(false);
    const languages = [
        "français",
        "english"
    ]

    if(typeof window !== "undefined") {
        var access_token = localStorage.getItem("access_token");
    }
    useEffect(() => {

        async function getData() {
            const access_token = localStorage.getItem("access_token");
            
            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            };
            
            const request = await fetch(`${baseapiurl}/servers/${guild_id}/settings`, requestOptions);

            if(request.status === 400) return;
            let res = await request.json();

            setInfo({
                access: true,
                language: res.language === "français" ? "français" : "english"
            });
        }
        getData();
    }, [guild_id]);

    const changeLanguage = async (lang) => {

        const requestOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${access_token}`
            },
            body: JSON.stringify({
                modif: lang.toLowerCase(),
            })
        };
        setInfo({...info, language: lang });
        await fetch(`${baseapiurl}/servers/${guild_id}/settings/language`, requestOptions);
        
    }

    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Global Settings" />
                {
                    !info.access ? <Loader /> :
                    <div className="settings-boxes">
                        <div className="boxe">
                            <div className="title">
                                <p>Choose the language :</p>
                            </div>
                            <div className={`${styles.row} description`}>
                                {
                                    languages.map((l, index) => 
                                        <span onClick={() => changeLanguage(l)} className={`${info.language === l ? styles.muted : styles.a}`} key={index} >{l}</span>
                                    )
                                }
                            </div>
                        </div>
                        {
                            /**
                             *                         <div className="boxe">
                            <div className="title">
                                <p>Specials roles accepted to moderate the bot :</p>
                            </div>
                            <div className="description">
                                <div className="roles">
                                    {
                                        info.accepted_roles.map((id, index) => 
                                            <RoleBox role={info.roles.find(r => r.id === id)} key={index} />
                                        )
                                    }
                                </div>
                                <Svg name="circle-plus" onClick={() => openModal(!modal)}/>
                                {
                                    modal ? 
                                    <div className="roles-modal">
                                        <div className="roles">
                                            {
                                                info.roles.map((role, index) => 
                                                    <RoleBox role={role} key={index} />
                                                )
                                            }
                                        </div>
                                    </div>
                                    : ""
                                }
                            </div>
                        </div>
                             */
                        }
                    </div>
                }
        </div>
    )
}

export default DashboardSettings;