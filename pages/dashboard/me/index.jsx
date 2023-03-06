import React, { useContext } from "react";

import NavBar from "../../../Views/navbar/Navbar";
import Seo from "../../../Components/Seo";
import { twitchoauth2url } from "../../../Service/constante";
import { UserContext } from "../../../Context/AppContext";

function DashBoardHome() {

    const { user, setUser } = useContext(UserContext); 

    console.log(user);
    return (
        <div>
            <NavBar />
            <Seo title="Your dashboard" description="Configure your profile !" />
            <div className="main">
                <div className="dashboard">
                    <div className="dashboard-view">
                        { user?.twitch ?? <a href={twitchoauth2url}>Connect to Twitch</a> }
                        { user?.twitch && <button onClick={() => setUser({ ...user })}>Delete the Twitch connection ({ twitch.display_name })</button> }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoardHome;