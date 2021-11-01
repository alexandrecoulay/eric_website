import React from "react";
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation'

import NavBar from "../Views/navbar/Navbar";
import Seo from "../Components/Seo";
import { basecdnurl } from "../Service/constante";

function Home() {

    const router = useRouter();
    const { t } = useTranslation('home')

    const fonctionalities = () => {
      if(typeof window !== "undefined") {
        window.location.href = "/#fonctionalities";
      }
        
    }
    
    const add_bot = () => {
      router.push("/bot/invite")
    }

    return(
        <div className="body">
            <Seo />
            <NavBar />
            <div className="home">
                <section className="Hero">
                    <div className="Hero-text">
                        <h1>Eric</h1>
                        <p>{t("second_title")}</p>
                    </div>
                    
                    <div className="HeroButtons">
                        <div className="HeroButtonWrapper">
                            <button className="btn_index" onClick={add_bot}>{t("add_to_server")}</button>
                            <button className="btn_index" onClick={fonctionalities}>{t("browse_fonctionalities")}</button>
                        </div>
                    </div>
                </section>
                <section className="Section" id="fonctionalities">
                    <div className="SectionInner">
                        <div className="SectionText">
                            <h2>{t("title_1")}</h2>
                            <p>{t("desc_1_1")}</p>
                            <p>{t("desc_1_2")}</p>
                        </div>
                        <div className="SectionImg">
                            <img src={`${basecdnurl}/assets/home/level.png`} alt="Leveling system" />
                        </div>
                    </div>
                </section>
                <section className="Section">
                    <div className="SectionInner reverse">
                        <div className="SectionText">
                            <h2>{t("title_2")}</h2>
                            <p>{t("desc_2_1")}</p>
                            <p>{t("desc_2_2")}</p>
                        </div>
                        <div className="SectionImg">
                            <img src={`${basecdnurl}/assets/home/moderation.png`} alt="Raid protect" />
                        </div>
                    </div>
                </section>
                <section className="Section">
                    <div className="SectionInner">
                        <div className="SectionText">
                            <h2>{t("title_3")}</h2>
                            <p>{t("desc_3_1")}</p>
                            <p>{t("desc_3_2")}</p>
                        </div>
                        <div className="SectionImg">
                            <img src={`${basecdnurl}/assets/home/stream_2.png`} alt="twitch notifications" />
                        </div>
                    </div>
                </section>
                <section className="Section">
                    <div className="SectionInner reverse">
                        <div className="SectionText">
                            <h2>{t("title_4")}</h2>
                            <p>{t("desc_4_1")}</p>
                            <p>{t("desc_4_2")}</p>
                        </div>
                        <div className="SectionImg">
                            <img src={`${basecdnurl}/assets/home/various.png`} alt="various commands" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;