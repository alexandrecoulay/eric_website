import React from "react";
import Script from "next/script";

const GA_ID = "G-45LV4VEEB5";

/**
 * Google Analytics via next/script.
 *
 * Le script était auparavant injecté dans next/head avec un attribut `async` et un
 * dangerouslySetInnerHTML : Next ne garantit pas l'ordre d'exécution dans le head,
 * et la mesure pouvait partir avant que gtag existe. `afterInteractive` charge le
 * script une fois la page interactive, sans retarder le premier rendu.
 */
function Analytics() {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
        </>
    );
}

export default Analytics;
