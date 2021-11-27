import React from "react";
import Seo from "../Components/Seo";
import EmotesHome from "../Views/Emotes";
import NavBar from "../Views/navbar/Navbar";
import styles from "../Style/Global.module.scss";

function EmotesIndex() {
    return (
        <div>
            <Seo title="Availables emotes for Eric" description="Search the availables emojis of Eric" />
            <NavBar />
            <section className={`${styles.padding_15}`}>
                <EmotesHome />
            </section>
        </div>
    )
}

export default EmotesIndex;