import React, { useState } from "react";
import DashboardTitle from "./Components/DashboardTitle";

function DashboardVarious({ guild_id }) {
    const [info, setInfo] = useState({ access: false });

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
    
    return (
        <div className="dashboard-activation">
            <DashboardTitle title="Various Settings" />
            {
                !info.access ? <Loader /> :
                <div className="settings-boxes">
                    <div className="boxe">
                        <div className="title">
                            <p>Enable Various commands :</p>
                        </div>
                        <div className="description">  

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DashboardVarious;