import React from "react";
import Link from "next/link";

import Seo from "../Components/Seo";
import NavBar from "../Components/Navbar";

function Help() {
 
    return (
        <div>
            <Seo title="Availables Eric commands" description="Choose the language to display the help commands of the bot" />
            <NavBar />
            <section className="Hero">
                <div className="Hero-text">
                    <h1>Commands Help</h1>
                    <p>Choose Your language :</p>
                </div>
                <div className="HeroButtons">
                    <div className="HeroButtonWrapper">
                        <Link href="/commands/fr"><a><button className="btn_index">Français</button></a></Link>
                        <Link href="/commands/en"><a><button className="btn_index">English</button></a></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Help;
