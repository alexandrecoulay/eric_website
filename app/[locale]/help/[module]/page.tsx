import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import styles from "../../../../Style/Global.module.scss";
import NavBar from "../../../../Components/App/NavBar";
import JsonLd from "../../../../Components/App/JsonLd";
import DocArticle from "../../../../Components/App/DocArticle";
import Faq from "../../../../Components/App/Faq";
import { Link } from "../../../../i18n/navigation";
import { pageMetadata } from "../../../../Service/seo";
import { faqPage, breadcrumb, techArticle } from "../../../../Service/structuredData";
import modules from "../../../../Service/modules";
import { findDoc, docSlugs } from "../../../../Service/docTypes";
import { routing, type Locale } from "../../../../i18n/routing";

type Props = { params: Promise<{ locale: Locale; module: string }> };

/**
 * Les slugs sont identiques dans toutes les langues, ce qui garde une grappe
 * hreflang simple : /help/level et /fr/help/level désignent la même page.
 */
export function generateStaticParams() {
    return routing.locales.flatMap(locale =>
        docSlugs(modules).map(slug => ({ locale, module: slug }))
    );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, module } = await params;
    const doc = findDoc(modules, locale, module);

    if (!doc) return {};

    return pageMetadata({
        locale,
        path: `/help/${doc.slug}`,
        title: doc.metaTitle,
        description: doc.description,
        keywords: doc.keywords
    });
}

export default async function ModulePage({ params }: Props) {
    const { locale, module } = await params;
    setRequestLocale(locale);

    const doc = findDoc(modules, locale, module);
    if (!doc) notFound();

    const t = await getTranslations();
    const french = locale === "fr";

    return (
        <>
            <JsonLd data={[
                techArticle(doc, locale),
                ...(doc.faq ? [faqPage(doc.faq)] : []),
                breadcrumb([
                    { name: "Eric", path: "/" },
                    { name: t("commands"), path: "/help" },
                    { name: doc.title, path: `/help/${doc.slug}` }
                ], locale)
            ]} />
            <NavBar />
            <section className={`${styles.padding_15} ${styles.column} ${styles.align_start}`} style={{ gap: "32px" }}>
                <Link href="/help" className={`${styles.underline}`}>
                    ← {french ? "Toute la documentation" : "All documentation"}
                </Link>

                <DocArticle doc={doc} updatedLabel={french ? "Dernière mise à jour :" : "Last updated:"} />

                {
                    doc.faq &&
                    <Faq
                        title={french ? "Questions fréquentes" : "Frequently asked questions"}
                        entries={doc.faq}
                    />
                }
            </section>
        </>
    );
}
