import React, { useState, useEffect } from "react";
import { apibaseurl } from "../../Service/constante";
import CirclePlusSvg from "../../Svg/circle-plus";
import Loader from "../Loader";
import DashboardTitle from "./Components/DashboardTitle";
import RoleBox from "./Views/RoleBox";

function DashboardSettings({ guild_id }) {

    const [info, setInfo] = useState({ access: false });
    const [modal, openModal] = useState(false);
    const languages = [
        "français",
        "english"
    ]

    useEffect(() => {

        async function getData() {
            const access_token = localStorage.getItem("access_token");
            
            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            };
            
            const request = await fetch(`${apibaseurl}/servers/${guild_id}/settings`, requestOptions);

            if(request.status === 400) return;
            let res = await request.json();

            setInfo(res);
        }
        getData();
    }, [guild_id]);

    useEffect(() => {
        if(!info.access || !languages.some(e => e === info.language)) return;

        async function getData() {
            const access_token = localStorage.getItem("access_token");

            const requestOptions = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${access_token}`
                },
                body: JSON.stringify({
                    language: info.language.toLowerCase(),
                    accepted_roles: info.accepted_roles
                })
            };
            
            const request = await fetch(`${apibaseurl}/servers/${guild_id}/settings`, requestOptions);

            if(request.status === 400) return;
            let res = await request.json();

            setInfo(res);
        }
        getData();
    }, [info])

    const HandleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value });
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
                            <div className="description">  
                                <input onChange={HandleChange} value={info.language} className="list" list="languages" name="language" id="language" />
                                <datalist id="languages">
                                    {
                                        languages.map((l, index) => 
                                            <option key={index} value={l} />
                                        )
                                    }
                                </datalist>
                            </div>
                        </div>
                        <div className="boxe">
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
                                <CirclePlusSvg setClass="fa-primary" onSvgClick={() => openModal(!modal)}/>
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
                    </div>
                }
        </div>
    )
}

export default DashboardSettings;