import React from "react";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import "../../Style/dashboard.scss";
import "../../Style/error.scss";
import "../../Style/loader.scss";
import "../../Style/style.scss";
import "../../Style/alert.scss";

import { routing } from "../../i18n/routing";
import Analytics from "../../Components/Analytics";

export function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) notFound();

    // Permet le rendu statique des pages de ce segment.
    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/assets/favicons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-icon-180x180.png" />
                <meta name="theme-color" content="#000000" />
            </head>
            <body>
                {/* `body .body` dans Style/style.scss : c'est un descendant du body,
                    pas le body lui-meme. */}
                <div className="body">
                    <NextIntlClientProvider>
                        {children}
                    </NextIntlClientProvider>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
