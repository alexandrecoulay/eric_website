import React from "react";
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation'

import styles from "../Style/Global.module.scss";

import Seo from "../Components/Seo"
import NavBar from "../Views/navbar/Navbar"
import Boxe from "../Components/Dashboard/Boxe";
import BoxeContainer from "../Components/Dashboard/BoxeContainer";
import CreateLink from "../Components/Text/Link";

function Help() {

    const router = useRouter();

    const { t } = useTranslation('help')

    return (
        <div>
            <Seo title="Availables Eric commands" description="Choose the language to display the help commands of the bot" />
            <NavBar />
            <section className={`${styles.padding_15}`}>
                <BoxeContainer title={`${t("The_available_help_commands")}`}>
                    <span className={`${styles.text_left}`}>{t("more_info")}</span>
                    <span className={`${styles.text_left}`}>{t("A_problem_with_the_bot_Join_the_support_server")}</span>
                    <span className={`${styles.text_left}`}>{t("Bot_prefix")} {t("prefix")}</span>

                    <div className={`${styles.row} ${styles.space_evenly} ${styles.full_width}`}>
                        <CreateLink href={`${router.pathname}/#level`} text={t("level")} />
                        <CreateLink href={`${router.pathname}/#stream`} text={t("stream")} />
                        <CreateLink href={`${router.pathname}/#moderation`} text={t("moderation")} />
                        <CreateLink href={`${router.pathname}/#various`} text={t("various")} />
                        <CreateLink href={`${router.pathname}/#fun`} text={t("fun")} />
                        <CreateLink href={`${router.pathname}/#emotes`} text={t("emotes")} />
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
                                <Boxe title={t("title_1_2")}>
                                    <span>{t("desc_1_2")}</span>
                                </Boxe>
                                <Boxe title={t("title_1_3")}>
                                    <span>{t("desc_1_3")}</span>
                                </Boxe>
                                <Boxe title={t("title_1_4")}>
                                    <span>{t("desc_1_4")}</span>
                                </Boxe>
                                <Boxe title={t("title_1_2")}>
                                    <span>{t("desc_1_2")}</span>
                                </Boxe>
                                <Boxe title={t("title_1_5")}>
                                    <span>{t("desc_1_5")}</span>
                                </Boxe>
                                <Boxe title={t("title_1_6")}>
                                    <span>{t("desc_1_6")}</span>
                                </Boxe>
                                <Boxe title={t("title_1_7")}>
                                    <span>{t("desc_1_7")}</span>
                                </Boxe>
                            </div>
                            <div className={`${styles.column}`} id="stream">
                            <span style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                    paddingBottom: 5,
                                    textDecoration: "underline"
                                }} className={`${styles.text_left}`}>{t("title_2")}</span>
                            <Boxe title="oui">
                            
                            </Boxe>
                            </div>
                            <div className={`${styles.column}`} id="moderation">
                            <span style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                    paddingBottom: 5,
                                    textDecoration: "underline"
                                }} className={`${styles.text_left}`}>{t("title_3")}</span>
                            <Boxe title="oui">
                            
                            </Boxe>
                            </div>
                            <div className={`${styles.column}`} id="various">
                            <span style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                    paddingBottom: 5,
                                    textDecoration: "underline"
                                }} className={`${styles.text_left}`}>{t("title_4")}</span>
                            <Boxe title="oui">
                            
                            </Boxe>
                            </div>
                            <div className={`${styles.column}`} id="fun">
                            <span style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                    paddingBottom: 5,
                                    textDecoration: "underline"
                                }} className={`${styles.text_left}`}>{t("title_5")}</span>
                            <Boxe title="oui">
                            
                            </Boxe>
                            </div>
                            <div className={`${styles.column}`} id="emotes">
                            <span style={{
                                    fontWeight: 600,
                                    fontSize: 18,
                                    paddingBottom: 5,
                                    textDecoration: "underline"
                                }} className={`${styles.text_left}`}>{t("title_6")}</span>
                            <Boxe title="oui">
                            
                            </Boxe>
                            </div>
                        </div>
                    </div>
                </BoxeContainer>
            </section>
        </div>
    );
}

export default Help;
