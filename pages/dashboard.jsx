import React, { useContext } from "react";

import NavBar from "../Views/navbar/Navbar";
import { UserContext } from "../Context/AppContext";
import Seo from "../Components/Seo";
import DashboardIndex from "../Views/Dashoard";

function DashBoardHome() {

    const [user, setUser] = useContext(UserContext)

    return (
        <div>
            <NavBar />
            <Seo title="Select a server" description="Choose a server where you want to configure the bot !" />
            <div className="main">
                <DashboardIndex user={user} />
            </div>
        </div>
    );
}

export default DashBoardHome;