import React from "react";
import Image from "next/image";
import styles from "../../Style/Global.module.scss"

/**
 * Petite image carrée, arrondie par défaut.
 *
 * Trois défauts corrigés ici, tous visibles sur les drapeaux du sélecteur de
 * langue, qui s'affichaient en taille réelle et sans arrondi :
 *
 * 1. `width` et `height` recevaient une chaîne, `"22px"`. next/image attend un
 *    nombre de pixels ; la chaîne était ignorée et l'image rendue à sa taille
 *    naturelle.
 * 2. `objectFit` en propriété a été retiré de next/image depuis Next 13. Il
 *    passe désormais par `style`.
 * 3. `notRounded ?? styles.rounded` : `??` ne teste que null et undefined, donc
 *    avec `notRounded` valant `false` l'expression rendait `false` et la classe
 *    d'arrondi n'était jamais appliquée. Le défaut `= false` a été ajouté lors de
 *    la migration pour satisfaire TypeScript, et a cassé l'arrondi au passage.
 */
function Icon({ src, size = 33, onClick = undefined, className = "", notRounded = false }) {
    return (
        <Image
            onClick={onClick}
            className={`${notRounded ? "" : styles.rounded} ${className}`}
            draggable="false"
            width={size}
            height={size}
            src={src}
            alt=""
            style={{ objectFit: "cover", width: `${size}px`, height: `${size}px` }}
        />
    )
}

export default Icon;
