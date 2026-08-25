import React from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import styles from "../../../Style/Doc.module.scss";
import NavBar from "../../../Components/App/NavBar";
import JsonLd from "../../../Components/App/JsonLd";
import Faq from "../../../Components/App/Faq";
import DocIndex from "../../../Components/App/DocIndex";
import CommandTable from "../../../Components/App/CommandTable";
import modules from "../../../Service/modules";
import { allCommands } from "../../../Service/docTypes";
import { pageMetadata } from "../../../Service/seo";
import { faqPage, breadcrumb } from "../../../Service/structuredData";
import { helpFaq } from "../../../Service/faq";
import type { Locale } from "../../../i18n/routing";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    return pageMetadata({
        locale,
        path: "/help",
        title: locale === "fr"
            ? "Commandes du bot Eric — documentation complète"
            : "Eric bot commands — full documentation",
        description: locale === "fr"
            ? "Liste complète des commandes du bot Discord Eric : niveaux, modération, automodération, sondages, émojis et utilitaires, avec leur syntaxe et leurs paramètres."
            : "Complete command list for the Eric Discord bot: levels, moderation, auto-moderation, polls, emojis and utilities, with syntax and parameters.",
        keywords: locale === "fr"
            ? "commandes bot eric, commandes bot discord, aide bot discord, documentation bot discord"
            : "eric bot commands, discord bot commands, discord bot help, discord bot documentation"
    });
}

export default async function HelpPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations();
    const faq = helpFaq(locale);
    const french = locale === "fr";
    const docs = modules[locale] ?? modules.en;
    const commands = allCommands(modules, locale);

    return (
        <>
            <JsonLd data={[
                faqPage(faq),
                breadcrumb([
                    { name: "Eric", path: "/" },
                    { name: t("commands"), path: "/help" }
                ], locale)
            ]} />
            <NavBar />
            <section className={styles.page}>
                <h1 className={styles.indexTitle}>{french ? "Documentation du bot Eric" : "Eric bot documentation"}</h1>
                <p className={styles.lead} style={{ maxWidth: "760px" }}>
                    {
                        french
                            ? "Toutes les commandes du bot, avec leur syntaxe exacte et la permission Discord qu'elles exigent. Le préfixe par défaut est * et se modifie par serveur depuis le tableau de bord ; certaines commandes portent un nom traduit selon la langue du serveur."
                            : "Every command of the bot, with its exact syntax and the Discord permission it requires. The default prefix is * and can be changed per server from the dashboard; some command names are translated with the server's language."
                    }
                </p>

                <p className={styles.legend}>
                    <span><code>{french ? "<requis>" : "<required>"}</code> {french ? "paramètre obligatoire" : "required parameter"}</span>
                    <span><code>{french ? "{optionnel}" : "{optional}"}</code> {french ? "paramètre facultatif" : "optional parameter"}</span>
                </p>

                <CommandTable
                    commands={commands}
                    labels={{
                        command: french ? "Commande" : "Command",
                        description: french ? "Description" : "Description",
                        permission: french ? "Permission requise" : "Permission required",
                        none: french ? "aucune" : "none"
                    }}
                />

                <h2>{french ? "Documentation par module" : "Module documentation"}</h2>
                <p className={styles.lead} style={{ maxWidth: "760px" }}>
                    {
                        french
                            ? "Chaque module a sa page : ce qu'il fait, comment l'activer depuis le tableau de bord, et ce que Discord impose."
                            : "Every module has its own page: what it does, how to enable it from the dashboard, and what Discord enforces."
                    }
                </p>

                <DocIndex docs={docs} basePath="/help" />

                <Faq
                    title={locale === "fr" ? "Questions fréquentes" : "Frequently asked questions"}
                    entries={faq}
                />
            </section>
        </>
    );
}
