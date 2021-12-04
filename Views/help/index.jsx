import React from "react";
import useTranslation from 'next-translate/useTranslation'

import styles from "../../Style/Global.module.scss";

import Boxe from "../../Components/Dashboard/Boxes/Boxe";
import BoxeContainer from "../../Components/Dashboard/BoxeContainer";
import CreateLink from "../../Components/Text/Link";
import { oauth2url } from "../../Service/constante";


function HelpScreen({ pathname }) {

    const { t } = useTranslation('help')

    return (
        <BoxeContainer title={`${t("The_available_help_commands")}`}>
            <CreateLink href={oauth2url}><span className={`${styles.underline} ${styles.text_left}`}>{t("connect_dashboard")}</span></CreateLink>
            <span className={`${styles.text_left}`}>{t("require_param")}</span>
            <span className={`${styles.text_left}`}>{t("optional_param")}</span>
            <CreateLink href="https://discord.gg/p3Sj432"><span className={`${styles.underline} ${styles.text_left}`}>{t("A_problem_with_the_bot_Join_the_support_server")}</span></CreateLink>
            <span className={`${styles.text_left}`}>{t("Bot_prefix")} {t("prefix")}</span>

            <div className={`${styles.row} ${styles.space_evenly} ${styles.full_width}`}>
                <CreateLink href={`${pathname}/#level`} text={t("level")} />
                <CreateLink href={`${pathname}/#moderation`} text={t("moderation")} />
                <CreateLink href={`${pathname}/#various`} text={t("various")} />
                <CreateLink href={`${pathname}/#fun`} text={t("fun")} />
                <CreateLink href={`${pathname}/#emotes`} text={t("emotes")} />
            </div>
            <div style={{ gap: "10px" }} className={`${styles.full_height} ${styles.full_width} ${styles.column}`}>
                <div style={{ gap: "10px" }} id="level" className={`${styles.full_height} ${styles.full_width} ${styles.scroll} ${styles.column}`}>
                    <div style={{
                        gap: 5
                    }} className={`${styles.column}`} id="level">
                        <span style={{
                            fontWeight: 600,
                            fontSize: 18,
                            paddingBottom: 5,
                            textDecoration: "underline"
                        }} className={`${styles.text_left}`}>{t("title_1")}</span>
                        <Boxe title={t("title_1_1")}>
                            <span>{t("desc_1_1")}</span>
                        </Boxe>
                        <Boxe title={t("title_1_5")}>
                            <span>{t("desc_1_5")}</span>
                        </Boxe>
                        <Boxe title={t("title_1_6")}>
                            <span>{t("desc_1_6")}</span>
                        </Boxe>
                    </div>
                    <div style={{
                        gap: 5
                    }} className={`${styles.column}`} id="moderation">
                    <span style={{
                            fontWeight: 600,
                            fontSize: 18,
                            paddingBottom: 5,
                            textDecoration: "underline"
                        }} className={`${styles.text_left}`}>{t("title_3")}</span>
                        <Boxe title={t("title_3_5")}>
                            <span>{t("desc_3_5")}</span>
                        </Boxe>
                        <Boxe title={t("title_3_6")}>
                            <span>{t("desc_3_6")}</span>
                        </Boxe>
                        <Boxe title={t("title_3_8")}>
                            <span>{t("desc_3_8")}</span>
                        </Boxe>
                        <Boxe title={t("title_3_7")}>
                            <span>{t("desc_3_7")}</span>
                        </Boxe>
                        <Boxe title={t("title_3_4")}>
                            <span>{t("desc_3_4")}</span>
                        </Boxe>
                    </div>
                    <div style={{
                        gap: 5
                    }} className={`${styles.column}`} id="various">
                    <span style={{
                            fontWeight: 600,
                            fontSize: 18,
                            paddingBottom: 5,
                            textDecoration: "underline"
                        }} className={`${styles.text_left}`}>{t("title_4")}</span>
                        <Boxe title={t("title_4_2")}>
                            <span>{t("desc_4_2")}</span>
                        </Boxe>
                        <Boxe title={t("title_4_3")}>
                            <span>{t("desc_4_3")}</span>
                        </Boxe>
                        <Boxe title={t("title_4_4")}>
                            <span>{t("desc_4_4")}</span>
                        </Boxe>
                        <Boxe title={t("title_4_5")}>
                            <span>{t("desc_4_5")}</span>
                        </Boxe>
                        <Boxe title={t("title_4_6")}>
                            <span>{t("desc_4_6")}</span>
                        </Boxe>
                        <Boxe title={t("title_4_8")}>
                            <span>{t("desc_4_8")}</span>
                        </Boxe>
                        <Boxe title={t("title_4_9")}>
                            <span>{t("desc_4_9")}</span>
                        </Boxe>
                        <Boxe title={t("title_4_10")}>
                            <span>{t("desc_4_10")}</span>
                        </Boxe>
                        <Boxe title={t("title_4_11")}>
                            <span>{t("desc_4_11")}</span>
                        </Boxe>
                        <Boxe title={t("title_4_12")}>
                            <span>{t("desc_4_12")}</span>
                        </Boxe>
                    </div>
                    <div style={{
                        gap: 5
                    }} className={`${styles.column}`} id="fun">
                    <span style={{
                            fontWeight: 600,
                            fontSize: 18,
                            paddingBottom: 5,
                            textDecoration: "underline"
                        }} className={`${styles.text_left}`}>{t("title_5")}</span>
                        <Boxe title={t("title_5_1")}>
                            <span>{t("desc_5_1")}</span>
                        </Boxe>
                    </div>
                    <div style={{
                        gap: 5
                    }} className={`${styles.column}`} id="emotes">
                    <span style={{
                            fontWeight: 600,
                            fontSize: 18,
                            paddingBottom: 5,
                            textDecoration: "underline"
                        }} className={`${styles.text_left}`}>{t("title_6")}</span>
                        <Boxe title={t("title_6_1")}>
                            <span>{t("desc_6_1")}</span>
                        </Boxe>
                        <Boxe title={t("title_6_2")}>
                            <span>{t("desc_6_2")}</span>
                        </Boxe>
                        <Boxe title={t("title_6_4")}>
                            <span>{t("desc_6_4")}</span>
                        </Boxe>
                    </div>
                </div>
            </div>
        </BoxeContainer>
    )

}

export default HelpScreen;