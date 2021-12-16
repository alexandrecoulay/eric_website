import React from 'react';
import Head from 'next/head';

function Seo({ children, title, description, image, url }) {

    const meta_description = description ?? "Official Eric Discord Bot Website with Dashboard, Twitch commands, Emoji’s, Leveling System and more than 60 commands completely free !";
    const meta_title = title ?? "Eric, The Discord Bot 100% Free";
    const meta_image = image ?? "https://cdn.boteric.fr/assets/favicons/favicon.ico";
    const meta_url = url ?? "https://boteric.fr";
    
    return (
        <Head>

            <title>{meta_title}</title>
            <meta title={meta_title} />
            <meta name="description" content={meta_description} />
            <meta name="Keywords" content="Discord, Bot, Eric, Dashboard, Twitch, Emoji’s, Leveling System, Mee6 Like" />
            <link rel="icon" href={meta_image} />

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
            <meta name="copyright" content="© boteric.fr 2021" />
            <meta name="publisher" content="ALEX_OFF" />
            <meta name="author" content="Alex." />
            <meta name="format-detection" content="telephone=yes" />
            <meta name="viewport" content="width = device-width, initial-scale=1, user-scalable=yes" />
            <meta httpEquiv="Cache-control" content="public" />
            <meta httpEquiv="default-style" content="index" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="cleartype" content="on" />
            <meta httpEquiv="pragma" content="no-cache" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={meta_title} />
            <meta property="og:site_name" content={meta_title} />
            <meta property="og:description" content={meta_description} />
            <meta property="og:image" content={meta_image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={meta_url} />
            <meta name="twitter:title" content={meta_title} />
            <meta name="twitter:description" content={meta_description} />
            <meta name="twitter:image" content={meta_image} />

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