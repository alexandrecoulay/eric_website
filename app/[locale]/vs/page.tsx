import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import styles from "../../../Style/Global.module.scss";
import NavBar from "../../../Components/App/NavBar";
import JsonLd from "../../../Components/App/JsonLd";
import DocIndex from "../../../Components/App/DocIndex";
import { pageMetadata } from "../../../Service/seo";
import { itemList, breadcrumb } from "../../../Service/structuredData";
import competitors from "../../../Service/competitors";
import type { Locale } from "../../../i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const french = locale === "fr";

    return pageMetadata({
        locale,
        path: "/vs",
        title: french ? "Comparer Eric aux autres bots Discord" : "Compare Eric with other Discord bots",
        description: french
            ? "Comparer le bot Discord Eric aux bots les plus répandus : les critères qui décident réellement, et ce qu'Eric fait précisément sur chacun."
            : "Comparing the Eric Discord bot with the most widely deployed bots: the criteria that actually decide, and precisely what Eric does on each.",
        keywords: french
            ? "comparatif bot discord, alternative bot discord, meilleur bot discord français"
            : "discord bot comparison, discord bot alternative, best discord bot"
    });
}

export default async function VsPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const french = locale === "fr";
    const docs = competitors[locale] ?? competitors.en;

    return (
        <>
            <JsonLd data={[
                itemList(docs, "/vs", locale),
                breadcrumb([
                    { name: "Eric", path: "/" },
                    { name: french ? "Comparatifs" : "Comparisons", path: "/vs" }
                ], locale)
            ]} />
            <NavBar />
            <section className={`${styles.padding_15} ${styles.column} ${styles.align_start}`} style={{ gap: "24px" }}>
                <h1>{french ? "Comparer Eric aux autres bots Discord" : "Compare Eric with other Discord bots"}</h1>
                <p className={`${styles.text_left}`} style={{ maxWidth: "820px", lineHeight: 1.7 }}>
                    {
                        french
                            ? "Ces pages n'affirment rien des autres bots au-delà de leur positionnement public : leurs fonctionnalités et leurs tarifs changent sans préavis, et un tableau figé devient faux en quelques mois. Ce qu'elles apportent, ce sont les critères qui décident réellement et le détail vérifiable de ce que fait Eric."
                            : "These pages state nothing about other bots beyond their public positioning: their features and pricing change without notice, and a frozen table becomes wrong within months. What they offer is the criteria that actually decide, and a verifiable account of what Eric does."
                    }
                </p>
                <DocIndex docs={docs} basePath="/vs" />
            </section>
        </>
    );
}
