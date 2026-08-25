import React from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import NavBar from "../../Components/App/NavBar";
import HomeButtons from "../../Views/App/HomeButtons";
import JsonLd from "../../Components/App/JsonLd";
import { pageMetadata } from "../../Service/seo";
import { softwareApplication, organization } from "../../Service/structuredData";
import { basecdnurl } from "../../Service/constante";
import type { Locale } from "../../i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    return pageMetadata({
        locale,
        path: "/",
        title: locale === "fr"
            ? "Eric — Bot Discord français : modération, niveaux, IA et Twitch"
            : "Eric — Discord bot for moderation, levels, AI and Twitch",
        description: locale === "fr"
            ? "Eric est un bot Discord francophone gratuit : automodération, système de niveaux avec cartes personnalisées, assistant IA, alertes Twitch et vérification des nouveaux membres."
            : "Eric is a free Discord bot: auto-moderation, a levelling system with custom cards, an AI assistant, Twitch alerts and new member verification.",
        keywords: locale === "fr"
            ? "bot discord français, bot modération discord, bot niveau discord, bot discord gratuit, bot discord IA, alerte twitch discord"
            : "discord bot, discord moderation bot, discord leveling bot, free discord bot, discord ai bot, twitch alert discord"
    });
}

/** Les quatre sections de présentation, chacune adossée à une clé de traduction. */
const sections = [
    { key: 1, image: "level.png", alt: "Leveling system", reverse: false, id: "fonctionalities" },
    { key: 2, image: "moderation.png", alt: "Auto-moderation", reverse: true },
    { key: 3, image: "stream_2.png", alt: "Twitch notifications", reverse: false },
    { key: 4, image: "various.png", alt: "Various commands", reverse: true }
] as const;

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations();

    return (
        <>
            <JsonLd data={[softwareApplication(locale), organization()]} />
            <NavBar />
            <div className="home">
                <section className="Hero">
                    <div className="Hero-text">
                        <h1>Eric</h1>
                        <p>{t("second_title")}</p>
                    </div>
                    <HomeButtons />
                </section>
                {
                    sections.map(section => (
                        <section className="Section" key={section.key} id={"id" in section ? section.id : undefined}>
                            <div className={`SectionInner${section.reverse ? " reverse" : ""}`}>
                                <div className="SectionText">
                                    <h2>{t(`home_title_${section.key}`)}</h2>
                                    <p>{t(`home_desc_${section.key}_1`)}</p>
                                    <p>{t(`home_desc_${section.key}_2`)}</p>
                                </div>
                                <div className="SectionImg">
                                    <img src={`${basecdnurl}/assets/home/${section.image}`} alt={section.alt} loading="lazy" />
                                </div>
                            </div>
                        </section>
                    ))
                }
            </div>
        </>
    );
}
