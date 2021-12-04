import React from "react";
import { useRouter } from "next/router";

import styles from "../Style/Global.module.scss";

import Seo from "../Components/Seo"
import NavBar from "../Views/navbar/Navbar"
import HelpScreen from "../Views/help";

function Help() {

    const router = useRouter();

    return (
        <div>
            <Seo title="Availables Eric commands" description="Choose the language to display the help commands of the bot" />
            <NavBar />
            <section className={`${styles.padding_15}`}>
                <HelpScreen pathname={router.pathname} />
            </section>
        </div>
    );
}

export default Help;
