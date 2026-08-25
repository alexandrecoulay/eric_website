"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import styles from "../../Style/All.module.scss";
import FixedMenu from "../Menu/FixedMenu";
import { Svg } from "../Svg";
import { RoundedIcon } from "../Assets";
import { basecdnurl } from "../../Service/constante";
import { routing, localeFiles, type Locale } from "../../i18n/routing";

const labels: Record<Locale, string> = {
    en: "English",
    fr: "Français"
};

/**
 * Changement de langue par navigation, et non plus par écriture dans le
 * localStorage : chaque langue a désormais sa propre URL, donc en changer doit
 * changer l'adresse. C'est ce qui rend la version française indexable.
 */
function LocaleSwitcher({ size = 22, displayText = false }: { size?: number; displayText?: boolean }) {

    const router = useRouter();
    const pathname = usePathname() ?? "/";
    const [display, setDisplay] = useState(false);

    const current = (routing.locales.find(
        locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    ) ?? routing.defaultLocale) as Locale;

    const switchTo = (locale: Locale) => {
        // Chemin sans son préfixe de locale éventuel, puis reconstruit dans la cible.
        const bare = pathname.replace(new RegExp(`^/(${routing.locales.join("|")})(?=/|$)`), "") || "/";
        const target = locale === routing.defaultLocale ? bare : `/${locale}${bare === "/" ? "" : bare}`;

        setDisplay(false);
        router.push(target);
    };

    return (
        <div>
            <span className={`${styles.row} ${styles.pointer}`}>
                <Svg size={size} margin={!displayText} name="globe" hover pointer onClick={() => setDisplay(true)} />
                {displayText && labels[current]}
            </span>
            {
                display && <FixedMenu oustideClick={setDisplay}>
                    {
                        routing.locales.map(locale => (
                            <span
                                onClick={() => switchTo(locale)}
                                key={locale}
                                className={`${current === locale ? `${styles.second_background} ${styles.radius_5}` : ""} ${styles.row} ${styles.justify_center} ${styles.full_width} ${styles.padding_10} ${styles.border_bottom} ${styles.pointer} ${styles.hover}`}>
                                <RoundedIcon size={22} src={`${basecdnurl}/assets/flags/${localeFiles[locale]}.png`} /> {labels[locale]}
                            </span>
                        ))
                    }
                </FixedMenu>
            }
        </div>
    );
}

export default LocaleSwitcher;
