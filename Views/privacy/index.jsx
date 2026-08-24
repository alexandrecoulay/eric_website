import React from "react";

import styles from "../../Style/Global.module.scss";

import Boxe from "../../Components/Dashboard/Boxes/Boxe";
import BoxeContainer from "../../Components/Dashboard/BoxeContainer";
import { useTranslation } from "../../Context/Localization";
import content from "./content";

function Section({ section }) {
    return (
        <Boxe title={section.title}>
            <div style={{ gap: "10px" }} className={`${styles.column} ${styles.align_start} ${styles.full_width}`}>
                { section.intro && <span className={`${styles.text_left}`}>{section.intro}</span> }
                {
                    section.list &&
                    <ul style={{ paddingLeft: "20px", margin: 0 }} className={`${styles.text_left} ${styles.full_width}`}>
                        { section.list.map((item, index) => <li key={index} style={{ paddingBottom: "5px" }}>{item}</li>) }
                    </ul>
                }
                { section.paragraphs && section.paragraphs.map((paragraph, index) => <span key={index} className={`${styles.text_left}`}>{paragraph}</span>) }
                { section.outro && <span className={`${styles.text_left}`}>{section.outro}</span> }
            </div>
        </Boxe>
    )
}

function PrivacyScreen() {

    const { currentLanguage } = useTranslation();

    const page = content[currentLanguage?.code] ?? content.en;

    return (
        <BoxeContainer title={page.title}>
            <span className={`${styles.muted} ${styles.text_left}`}>{page.subtitle}</span>
            { page.intro.map((paragraph, index) => <span key={index} className={`${styles.text_left}`}>{paragraph}</span>) }
            <div style={{ gap: "10px" }} className={`${styles.column} ${styles.align_start} ${styles.full_width}`}>
                { page.sections.map((section, index) => <Section key={index} section={section} />) }
            </div>
        </BoxeContainer>
    )
}

export default PrivacyScreen;
