import React from "react";

function LogoSvg({ setClass, onSvgClick }) {
    return (
        <svg onClick={onSvgClick ? onSvgClick : undefined} className={setClass ? setClass : ""} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="254.965" height="254.965" viewBox="0 0 2667 2667">
            <path className="cls-1" d="M1334,0.4c735.97,0,1332.6,597.072,1332.6,1333.6S2069.97,2667.6,1334,2667.6,1.4,2070.53,1.4,1334,598.026,0.4,1334,.4Z"/>
            <image data-name="Calque 5" x="562" y="710" width="1523" height="1523" xlinkHref="data:img/png;base64,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"/>
            <image data-name="Calque 1 copie" x="408" y="382" width="1853" height="1903" xlinkHref="data:img/png;base64,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"/>
        </svg>
    )
}

export default LogoSvg;