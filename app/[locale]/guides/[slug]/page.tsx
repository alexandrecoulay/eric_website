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
import guides from "../../../../Service/guides";
import { findDoc, docSlugs } from "../../../../Service/docTypes";
import { routing, type Locale } from "../../../../i18n/routing";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
    return routing.locales.flatMap(locale =>
        docSlugs(guides).map(slug => ({ locale, slug }))
    );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const doc = findDoc(guides, locale, slug);

    if (!doc) return {};

    return pageMetadata({
        locale,
        path: `/guides/${doc.slug}`,
        title: doc.metaTitle,
        description: doc.description,
        keywords: doc.keywords
    });
}

export default async function GuidePage({ params }: Props) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const doc = findDoc(guides, locale, slug);
    if (!doc) notFound();

    const french = locale === "fr";

    return (
        <>
            <JsonLd data={[
                article(doc, `/guides/${doc.slug}`, locale),
                ...(doc.faq ? [faqPage(doc.faq)] : []),
                breadcrumb([
                    { name: "Eric", path: "/" },
                    { name: "Guides", path: "/guides" },
                    { name: doc.title, path: `/guides/${doc.slug}` }
                ], locale)
            ]} />
            <NavBar />
            <section className={`${styles.padding_15} ${styles.column} ${styles.align_start}`} style={{ gap: "32px" }}>
                <Link href="/guides" className={`${styles.underline}`}>
                    ← {french ? "Tous les guides" : "All guides"}
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
