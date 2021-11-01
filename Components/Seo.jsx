import React from 'react';
import Head from 'next/head';

function Seo({ title = "Eric, The Discord Bot 100% Free", description = "Official Eric Discord Bot Website with Dashboard, Twitch commands, Emoji’s, Leveling System and more than 60 commands completly free !", image = "https://cdn.boteric.fr/assets/favicons/mstile-310x310.png", url = "https://boteric.fr" }) {

 //   const title = title ?? "Eric, The Discord Bot 100% Free";
  //  const description = description ?? "Official Eric Discord Bot Website with Dashboard, Twitch commands, Emoji’s, Leveling System and more than 60 commands completly free !";
    //const image = image ?? "https://cdn.boteric.fr/assets/favicons/mstile-310x310.png";
    //const url = url ?? `https://boteric.fr`;
    
    const script_analytics = () => {
        if(typeof windows !== "undefined") {
            window.dataLayer = window.dataLayer || [];
            function gtag(){
                dataLayer.push(arguments)
            }
            gtag('js', new Date());
            gtag('config', 'G-7GR7G4764X');
        }
    }
    
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta title={title} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="application-name" content={title} />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow,nosnippet" />
            <meta name="copyright" content="© boteric.fr 2021" />
            <meta name="publisher" content="ALEX_OFF" />
            <meta name="Language" content="en" />
            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="author" content="Alex." />
            <meta name="Keywords" content="Discord, Bot, Eric, Dashboard, Twitch, Emoji’s, Leveling System, Mee6 Like" />
            <meta name="format-detection" content="telephone=yes" />
            <meta name="viewport" content="width = device-width, initial-scale=1, user-scalable=yes" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta httpEquiv="Cache-control" content="public" />
            <meta httpEquiv="default-style" content="index" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="cleartype" content="on" />
            <meta httpEquiv="pragma" content="no-cache" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Bot Eric" />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fr-FR" />
            <meta name="msapplication-TileImage" content="https://cdn.boteric.fr/assets/favicons/ms-icon-144x144.png" />
            <meta name="msapplication-TileImage" content="https://cdn.boteric.fr/assets/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="https://cdn.boteric.fr/assets/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="https://cdn.boteric.fr/assets/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="https://cdn.boteric.fr/assets/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="https://cdn.boteric.fr/assets/favicons/mstile-310x310.png" />

            <link rel="icon" href="https://cdn.boteric.fr/assets/favicons/favicon.ico" />
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
        </Head>
    )
};

export default Seo;