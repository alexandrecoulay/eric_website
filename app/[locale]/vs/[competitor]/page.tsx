import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import styles from "../../../../Style/Global.module.scss";
import NavBar from "../../../../Components/App/NavBar";
import JsonLd from "../../../../Components/App/JsonLd";
import DocArticle from "../../../../Components/App/DocArticle";
import Faq from "../../../../Components/App/Faq";
import { Link } from "../../../../i18n/navigation";
import { pageMetadata } from "../../../../Service/seo";
import { faqPage, breadcrumb, article } from "../../../../Service/structuredData";
import competitors from "../../../../Service/competitors";
import { findDoc, docSlugs } from "../../../../Service/docTypes";
import { routing, type Locale } from "../../../../i18n/routing";

type Props = { params: Promise<{ locale: Locale; competitor: string }> };

export function generateStaticParams() {
    return routing.locales.flatMap(locale =>
        docSlugs(competitors).map(competitor => ({ locale, competitor }))
    );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, competitor } = await params;
    const doc = findDoc(competitors, locale, competitor);

    if (!doc) return {};

    return pageMetadata({
        locale,
        path: `/vs/${doc.slug}`,
        title: doc.metaTitle,
        description: doc.description,
        keywords: doc.keywords
    });
}

export default async function CompetitorPage({ params }: Props) {
    const { locale, competitor } = await params;
    setRequestLocale(locale);

    const doc = findDoc(competitors, locale, competitor);
    if (!doc) notFound();

    const french = locale === "fr";

    return (
        <>
            <JsonLd data={[
                article(doc, `/vs/${doc.slug}`, locale),
                ...(doc.faq ? [faqPage(doc.faq)] : []),
                breadcrumb([
                    { name: "Eric", path: "/" },
                    { name: french ? "Comparatifs" : "Comparisons", path: "/vs" },
                    { name: doc.title, path: `/vs/${doc.slug}` }
                ], locale)
            ]} />
            <NavBar />
            <section className={`${styles.padding_15} ${styles.column} ${styles.align_start}`} style={{ gap: "32px" }}>
                <Link href="/vs" className={`${styles.underline}`}>
                    ← {french ? "Tous les comparatifs" : "All comparisons"}
                </Link>

                <DocArticle doc={doc} updatedLabel={french ? "Dernière vérification :" : "Last verified:"} />

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
