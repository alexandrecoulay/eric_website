import React from "react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import styles from "../../../Style/Doc.module.scss";
import NavBar from "../../../Components/App/NavBar";
import PrivacyScreen from "../../../Views/privacy";
import { pageMetadata } from "../../../Service/seo";
import type { Locale } from "../../../i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    return pageMetadata({
        locale,
        path: "/privacy",
        title: locale === "fr" ? "Politique de confidentialité" : "Privacy Policy",
        description: locale === "fr"
            ? "Quelles données le bot Discord Eric collecte, pourquoi, combien de temps elles sont conservées et comment en demander la suppression."
            : "Which data the Eric Discord bot collects, why, how long it is kept and how to have it deleted."
    });
}

export default async function PrivacyPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <NavBar />
            <section className={`${styles.page} ${styles.narrow}`}>
                <PrivacyScreen />
            </section>
        </>
    );
}
