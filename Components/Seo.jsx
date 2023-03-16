import React from 'react';
import Head from 'next/head';
import React from 'react';
import Head from 'next/head';

function Seo({ children, title, description, image, url }) {

    const meta_description = description ?? "Eric Discord bot offers advanced features including AI, Anti-Bot, Auto-Moderation, Music, Emojis, Level System & more. Join now!";
    const meta_title = title ?? "Eric Discord Bot | AI, Anti-Bot, Auto-Moderation, Music & More";
    const meta_image = image ?? "/assets/favicons/favicon.ico";
    const meta_url = url ?? "https://boteric.fr";
    const keywords = "Eric, Discord bot, multilingual, AI, anti-bot, auto-moderation, music, emojis, level system, chatbot, server, community, commands";
    const current_year = new Date().getFullYear();
   
    return (
        <Head>
            <title>{meta_title}</title>
            <meta title={meta_title} />
            <meta name="description" content={meta_description} />
            <link rel="prefetch" href={meta_url} / >
            <meta name="keywords" content={keywords} />
            <link rel="icon" href={meta_image} />
            <link rel="canonical" href={meta_url} />

            <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="robots" content="index, follow" />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
            <meta name="googlebot" content="noindex,nofollow" />
            <meta name="google" content="notranslate" key="notranslate" />
            <meta name="application-name" content={title} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow,nosnippet" />
            <meta name="copyright" content={`© boteric.fr ${current_year}`} />
            <meta name="publisher" content="ALEX_OFF" />
            <meta name="author" content="Alex." />
            <meta name="format-detection" content="telephone=yes" />
            <meta name="viewport" content="width = device-width, initial-scale=1, user-scalable=yes" />
            <meta httpEquiv="Cache-control" content="public" />
            <meta httpEquiv="default-style" content="index" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="cleartype" content="on" />
            <meta httpEquiv="pragma" content="no-cache" />
            
            {
            /**
             * <meta name="yandex-verification" content="XXXXXXXXXXXXXXXX" /> <!-- Vérification de propriété -->
             <meta name="yandex" content="noindex,follow" /> <!-- Indique à Yandex de ne pas indexer la page -->
            <meta name="robots" content="noyaca" /> <!-- Indique à Yandex de ne pas indexer les liens externes sur la page -->

            */
            }

            <meta property="og:url" content={meta_url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={meta_title} />
            <meta property="og:site_name" content={meta_title} />
            <meta property="og:description" content={meta_description} />
            <meta property="og:image" content={meta_image} />
            <meta property="og:keywords" content={keywords} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={meta_url} />
            <meta name="twitter:title" content={meta_title} />
            <meta name="twitter:description" content={meta_description} />
            <meta name="twitter:image" content={meta_image} />

            <meta name="dc.Title" content={title} />
            <meta name="dc.creator" content="BotEric Inc." />
            <meta name="dc.description" content={description} />
            <meta name="dc.identifier" content={meta_url} />
            <meta name="dc.relation" content={meta_url} />
            <meta name="dc.source" content={meta_url} />
            <meta name="dc.Coverage" content={current_year} />
            <meta name="dc.Rights" content={`Copyright ${current_year}, BotEric Inc.`} />

            { children }

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-45LV4VEEB5"></script>
            <script async dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', "G-45LV4VEEB5");`
              }}
            />

        </Head>
    )
};

export default Seo;