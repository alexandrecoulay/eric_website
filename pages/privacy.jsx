import React from "react";

import styles from "../Style/Global.module.scss";

import Seo from "../Components/Seo"
import NavBar from "../Views/navbar/Navbar"
import PrivacyScreen from "../Views/privacy";

function Privacy() {

    return (
        <div>
            <Seo title="Privacy Policy | Eric Discord Bot" description="How the Eric Discord bot collects, uses, keeps and deletes your data." url="https://boteric.fr/privacy" />
            <NavBar />
            <section className={`${styles.padding_15}`}>
                <PrivacyScreen />
            </section>
        </div>
    );
}

export default Privacy;
