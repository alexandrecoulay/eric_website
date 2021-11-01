import React from 'react';
import Head from 'next/head';

function Seo({ children, title = "Eric, The Discord Bot 100% Free", description = "Official Eric Discord Bot Website with Dashboard, Twitch commands, Emoji’s, Leveling System and more than 60 commands completly free !", image = "https://cdn.boteric.fr/assets/favicons/mstile-310x310.png", url = "https://boteric.fr" }) {

    const meta_title = title ?? "Eric, The Discord Bot 100% Free";
    const meta_description = description ?? "Official Eric Discord Bot Website with Dashboard, Twitch commands, Emoji’s, Leveling System and more than 60 commands completly free !";
    const meta_image = image ?? "https://cdn.boteric.fr/assets/favicons/mstile-310x310.png";
    const meta_url = url ?? `https://boteric.fr`;
    
    
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta title={meta_title} />
            <title>{meta_title}</title>

            <meta name="description" content={meta_description} />
            <meta name="application-name" content={meta_title} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow,nosnippet" />
            <meta name="copyright" content="© boteric.fr 2021" />
            <meta name="publisher" content="ALEX_OFF" />
            <meta name="Language" content="fr" />
            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="author" content="Alex." />
            <meta name="Keywords" content="Discord, Bot, Eric, Dashboard, Twitch, Emoji’s, Leveling System, Mee6 Like" />
            <meta name="format-detection" content="telephone=yes" />
            <meta httpEquiv="Cache-control" content="public" />
            <meta httpEquiv="default-style" content="index" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="cleartype" content="on" />
            <meta httpEquiv="pragma" content="no-cache" />
            <meta name="viewport" content="width = device-width, initial-scale=1, user-scalable=yes" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={meta_url} />
            <meta name="twitter:title" content={meta_title} />
            <meta name="twitter:description" content={meta_description} />
            <meta name="twitter:image" content={meta_image} />

            <meta property="og:title" content={meta_title} />
            <meta property="og:image" content={meta_image} />
            <meta property="og:site_name" content={meta_title} />
            <meta property="og:description" content={meta_description} />
            <meta property="og:url" content={meta_url} />
            <meta property="og:type" content="website" />

            <meta name="msapplication-TileImage" content="https://cdn.boteric.fr/assets/favicons/ms-icon-144x144.png" />
            <meta name="msapplication-TileImage" content="https://cdn.boteric.fr/assets/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="https://cdn.boteric.fr/assets/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="https://cdn.boteric.fr/assets/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="https://cdn.boteric.fr/assets/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="https://cdn.boteric.fr/assets/favicons/mstile-310x310.png" />
            <link rel="apple-touch-icon" sizes="57x57" href="https://cdn.boteric.fr/assets/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="https://cdn.boteric.fr/assets/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="https://cdn.boteric.fr/assets/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="https://cdn.boteric.fr/assets/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="https://cdn.boteric.fr/assets/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="https://cdn.boteric.fr/assets/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="https://cdn.boteric.fr/assets/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.boteric.fr/assets/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.boteric.fr/assets/favicons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="https://cdn.boteric.fr/assets/favicons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.boteric.fr/assets/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="https://cdn.boteric.fr/assets/favicons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.boteric.fr/assets/favicons/favicon-16x16.png" />

            { children }

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-45LV4VEEB5"></script>
            <script async dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-45LV4VEEB5');`
            }}
            />
        </Head>
    )
};

export default Seo;