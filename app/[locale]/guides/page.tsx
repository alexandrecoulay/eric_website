import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import styles from "../../../Style/Global.module.scss";
import NavBar from "../../../Components/App/NavBar";
import JsonLd from "../../../Components/App/JsonLd";
import DocIndex from "../../../Components/App/DocIndex";
import { pageMetadata } from "../../../Service/seo";
import { itemList, breadcrumb } from "../../../Service/structuredData";
import guides from "../../../Service/guides";
import type { Locale } from "../../../i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const french = locale === "fr";

    return pageMetadata({
        locale,
        path: "/guides",
        title: french ? "Guides Discord — modération, niveaux, permissions" : "Discord guides — moderation, levels, permissions",
        description: french
            ? "Guides pratiques pour administrer un serveur Discord : modérer, se protéger des raids, mettre en place un système de niveaux, comprendre les permissions et choisir un bot."
            : "Practical guides for running a Discord server: moderating, defending against raids, setting up a levelling system, understanding permissions and choosing a bot.",
        keywords: french
            ? "guide discord, administrer serveur discord, tutoriel discord, configurer serveur discord"
            : "discord guide, run a discord server, discord tutorial, discord server setup"
    });
}

export default async function GuidesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const french = locale === "fr";
    const docs = guides[locale] ?? guides.en;

    return (
        <>
            <JsonLd data={[
                itemList(docs, "/guides", locale),
                breadcrumb([
                    { name: "Eric", path: "/" },
                    { name: french ? "Guides" : "Guides", path: "/guides" }
                ], locale)
            ]} />
            <NavBar />
            <section className={`${styles.padding_15} ${styles.column} ${styles.align_start}`} style={{ gap: "24px" }}>
                <h1>{french ? "Guides Discord" : "Discord guides"}</h1>
                <p className={`${styles.text_left}`} style={{ maxWidth: "820px", lineHeight: 1.7 }}>
                    {
                        french
                            ? "Des guides sur l'administration d'un serveur Discord, écrits pour être utiles indépendamment du bot utilisé. Chacun traite un problème concret et donne la méthode plutôt qu'une liste de fonctionnalités."
                            : "Guides on running a Discord server, written to be useful whichever bot you use. Each one takes a concrete problem and gives the method rather than a feature list."
                    }
                </p>
                <DocIndex docs={docs} basePath="/guides" />
            </section>
        </>
    );
}
